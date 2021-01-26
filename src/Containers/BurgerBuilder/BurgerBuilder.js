import React, { Component } from 'react';
import Auxilary from '../../hoc/Auxilary/Auxilary';
import Burger from '../../Components/Burger/Burger';
import BurgerControls from '../../Components/BurgerControls/BurgerControls';
import Modal from '../../Components/UI/Modal/Modal';
import OrderSummary from '../../Components/OrderSummary/OrderSummary';
import Spinner from '../../Components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import axios from 'axios';
// import axiosOrder from '../../axios.order';

const INGREDIENT_PRICE = {
    salad: 1.3,
    meat: 0.5,
    cheese: 1.1,
    bacon: 0.7
};
const MIN_PRICE = 3;

class BurgerBuilder extends Component {
    state = {
        ingredients: null,
        totalPrice: MIN_PRICE,
        purchasing: false,
        loading: false,
        error: null
    }
    componentDidMount () {
        axios.get('/ingredients.json').then(response => {
            this.setState({
                ingredients: response.data
            });
        }).catch(error => {
            this.setState({
                error: <div style={{marginTop: '80px'}}>Could not load data...</div>
            })
        })
    }
    addIngredientHandler = (type) => {
        const updatedIngredients = {...this.state.ingredients};
        updatedIngredients[type] = updatedIngredients[type] + 1;
        const newPrice = this.state.totalPrice + INGREDIENT_PRICE[type];
        this.setState({ 
            ingredients: updatedIngredients, 
            totalPrice: Number(newPrice.toFixed(2)) 
        });
    }
    removeIngredientHandler = (type) => {
        const updatedIngredients = {...this.state.ingredients};
        const totalPrice = this.state.totalPrice
        const newPrice = updatedIngredients[type] > 0 
                        ? totalPrice - INGREDIENT_PRICE[type]
                        : totalPrice;
        updatedIngredients[type] = updatedIngredients[type] > 0 ? updatedIngredients[type] - 1 : 0;
        this.setState({ 
            ingredients: updatedIngredients, 
            totalPrice: Number(newPrice.toFixed(2))
        });
    }
    orderHandler = () => {
        const queryParams = [];
        for (let i in this.state.ingredients) {
            queryParams.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.state.ingredients[i]));
        }
        queryParams.push('price=' + this.state.totalPrice);
        const queryString = queryParams.join('&');
        this.props.history.push('/checkout?' + queryString);
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
                <Burger ingredients={this.state.ingredients} price={this.state.totalPrice}></Burger>
                <BurgerControls 
                    ingredients={this.state.ingredients}
                    minPrice={MIN_PRICE}
                    price={this.state.totalPrice}
                    checkout={this.purchaseHandler}
                    ingredientAdded={(type) => this.addIngredientHandler(type)}
                    ingredientRemoved={(type) => this.removeIngredientHandler(type)}>
                </BurgerControls>
            </Auxilary>;
        return (
            this.state.error ? this.state.error :
                this.state.ingredients ? 
                    <Auxilary>
                        <Modal show={this.state.purchasing} 
                            modalClosed={this.cancelPurchaseHandler}>
                            <OrderSummary ingredients={this.state.ingredients}
                                continue={this.orderHandler}
                                cancel={this.cancelPurchaseHandler}
                                price={this.state.totalPrice}/> 
                        </Modal>
                        {burgerBurgerControls}
                    </Auxilary>
                : spinner
        );
    }
}

export default withErrorHandler(BurgerBuilder, axios);