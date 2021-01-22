import React, { Component } from 'react';
import Auxilary from '../../hoc/Auxilary/Auxilary';
import Burger from '../../Components/Burger/Burger';
import BurgerControls from '../../Components/BurgerControls/BurgerControls';
import Modal from '../../Components/UI/Modal/Modal';
import OrderSummary from '../../Components/OrderSummary/OrderSummary';
import Spinner from '../../Components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import axios from 'axios';

const INGREDIENT_PRICE = {
    salad: 1.3,
    meat: 0.5,
    cheese: 1.1,
    bacon: 0.7,
    leaf: 0.2
};
const MIN_PRICE = 3;

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 0,
            meat: 0,
            cheese: 0,
            bacon: 0,
            leaf: 0
        },
        totalPrice: MIN_PRICE,
        purchasing: false,
        loading: false
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
        const orderInfo = {
            ingredients: this.state.ingredients,
            price: this.state.totalPrice,
            customer: {
                name: 'Padma',
                address: {
                    street: 'XYZ',
                    zipcode: '23414',
                    city: 'XZY'
                },
                mailID: 'test@test.com',
            },
            deliveryMode: 'fastest'
        };
        this.setState({ loading: true });
        axios.post('/orders.on', orderInfo)
            .then((response) => {
                this.setState({
                    purchasing: false,
                    loading: false
                })
            })
            .catch(error => {
                this.setState({
                    purchasing: false,
                    loading: false
                })
            })
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
        let orderSummary = 
            <OrderSummary ingredients={this.state.ingredients}
                continue={this.orderHandler}
                cancel={this.cancelPurchaseHandler}
                price={this.state.totalPrice}/>;
        let spinner = <Spinner loading/>;
        return (
            <Auxilary>
                <Modal show={this.state.purchasing} 
                       modalClosed={this.cancelPurchaseHandler}>
                    {this.state.loading ? spinner : orderSummary }
                </Modal>
                <Burger ingredients={this.state.ingredients} price={this.state.totalPrice}></Burger>
                <BurgerControls 
                    ingredients={this.state.ingredients}
                    minPrice={MIN_PRICE}
                    price={this.state.totalPrice}
                    checkout={this.purchaseHandler}
                    ingredientAdded={(type) => this.addIngredientHandler(type)}
                    ingredientRemoved={(type) => this.removeIngredientHandler(type)}>
                </BurgerControls>
            </Auxilary>
        );
    }
}

export default withErrorHandler(BurgerBuilder, axios);