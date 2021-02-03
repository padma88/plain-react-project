import React, { Component } from 'react';
import Auxilary from '../../hoc/Auxilary/Auxilary';
import Burger from '../../Components/Burger/Burger';
import BurgerControls from '../../Components/BurgerControls/BurgerControls';
import Modal from '../../Components/UI/Modal/Modal';
import OrderSummary from '../../Components/OrderSummary/OrderSummary';
import Spinner from '../../Components/UI/Spinner/Spinner';
import { connect } from 'react-redux';
import * as actionCreators from '../../store/actions/index';
// import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

class BurgerBuilder extends Component {
    state = {
        purchasing: false,
        loading: false,
        error: null
    }
    componentDidMount () {
        this.props.initIngredients();
    }
    orderHandler = () => {
        this.props.history.push('/checkout');
    }
    purchaseHandler = () => {
        this.setState({
            purchasing: true
        })
    }
    cancelPurchaseHandler = () => {
        this.setState({
            purchasing: false
        })
    }
    render () {
        let spinner = <Spinner loading/>;
        let burgerBurgerControls = 
            <Auxilary>
                <Burger ingredients={this.props.ingredients} price={this.props.totalPrice}></Burger>
                <BurgerControls 
                    ingredients={this.props.ingredients}
                    minPrice={this.props.minPrice}
                    price={this.props.totalPrice}
                    checkout={this.purchaseHandler}
                    ingredientAdded={(type) => this.props.addIngredientAction(type)}
                    ingredientRemoved={(type) => this.props.removeIngredientAction(type)}>
                </BurgerControls>
            </Auxilary>;
        return (
            this.state.error ? this.state.error :
                this.props.ingredients ? 
                    <Auxilary>
                        <Modal show={this.state.purchasing} 
                            modalClosed={this.cancelPurchaseHandler}>
                            <OrderSummary ingredients={this.props.ingredients}
                                continue={this.orderHandler}
                                cancel={this.cancelPurchaseHandler}
                                price={this.props.totalPrice}/> 
                        </Modal>
                        {burgerBurgerControls}
                    </Auxilary>
                : spinner
        );
    }
}

const mapStatetoProps = state => {
    return {
        ingredients: state.burgerBuilder.ingredients,
        totalPrice: state.burgerBuilder.totalPrice,
        minPrice: state.burgerBuilder.minPrice,
        ingredientPrice: state.burgerBuilder.ingredientPrice
    }
};

const mapDispatchToProps = dispatch => {
    return {
        addIngredientAction: (ingKey) => dispatch(actionCreators.add(ingKey)),
        removeIngredientAction: (ingKey) => dispatch(actionCreators.remove(ingKey)),
        initIngredients: () => dispatch(actionCreators.init())
    }
}
export default connect(mapStatetoProps, mapDispatchToProps)(BurgerBuilder);