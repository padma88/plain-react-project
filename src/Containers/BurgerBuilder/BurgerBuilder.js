import React, { Component } from 'react';
import Auxilary from '../../hoc/Auxilary/Auxilary';
import Burger from '../../Components/Burger/Burger';
import BurgerControls from '../../Components/BurgerControls/BurgerControls';
import Modal from '../../Components/UI/Modal/Modal';
import OrderSummary from '../../Components/OrderSummary/OrderSummary';

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
        purchasing: false
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
        return (
            <Auxilary>
                <Modal show={this.state.purchasing} 
                       modalClosed={this.cancelPurchaseHandler}>
                    <OrderSummary ingredients={this.state.ingredients}
                       continue={() => this.purchaseHandler()}
                       cancel={() => this.cancelPurchaseHandler()}/>
                </Modal>
                <Burger ingredients={this.state.ingredients} price={this.state.totalPrice}></Burger>
                <BurgerControls 
                    ingredients={this.state.ingredients}
                    minPrice={MIN_PRICE}
                    price={this.state.totalPrice}
                    checkout={() => this.purchaseHandler()}
                    ingredientAdded={(type) => this.addIngredientHandler(type)}
                    ingredientRemoved={(type) => this.removeIngredientHandler(type)}>
                </BurgerControls>
            </Auxilary>
        );
    }
}

export default BurgerBuilder;