import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import CheckoutSummary from '../../Components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';

class Checkout extends Component {
    state = {
        ingredients: {},
        price: 0
    }
    componentDidMount () {
        const query = new URLSearchParams(this.props.location.search);
        const ingredients = {};
        let price = 0;
        for (let param of query.entries()) {
            // ingredients[param[0]] = Number.parseInt(param[1]);
            if (param[0] === 'price') {
                price = +param[1];
            } else {
                ingredients[param[0]] = +param[1];
            }
        }
        this.setState({
            ingredients: ingredients,
            price: price
        })
    }
    checkoutContiued = () => {
       this.props.history.replace('/checkout/contact-data');
    }
    checkoutCancelled = () => {
        this.props.history.goBack();
    }
    render () {
        return (
            <div>
                <CheckoutSummary 
                    checkoutCancelled={this.checkoutCancelled}
                    checkoutContiued={this.checkoutContiued}
                    ingredients={this.state.ingredients}/>
                <Route path='/checkout/contact-data' 
                    render={() => 
                        <ContactData 
                            ingredients={this.state.ingredients} 
                            price={this.state.price}
                            {...this.props}/>
                    }/>
            </div>
        )
    }
}

export default Checkout;