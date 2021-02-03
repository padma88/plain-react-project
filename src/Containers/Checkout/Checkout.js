import React, { Component } from 'react';
import { Redirect, Route } from 'react-router-dom';
import CheckoutSummary from '../../Components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';
import { connect } from 'react-redux';

class Checkout extends Component {
    checkoutContiued = () => {
       this.props.history.replace('/checkout/contact-data');
    }
    checkoutCancelled = () => {
        this.props.history.goBack();
    }
    render () {
        console.log(typeof Object.keys(this.props.ingredients).length);
        let redirect = null;
        if (Object.keys(this.props.ingredients).length === 0) {
            redirect = <Redirect to='/' exact/>
        }
        return (
            <div>
            {redirect}
                <CheckoutSummary 
                    checkoutCancelled={this.checkoutCancelled}
                    checkoutContiued={this.checkoutContiued}
                    ingredients={this.props.ingredients}/>
                <Route path='/checkout/contact-data' 
                    render={() => 
                        <ContactData 
                            ingredients={this.props.ingredients} 
                            price={this.props.price}
                            {...this.props}/>
                    }/>
            </div>
        )
    }
}


const mapStatetoProps = state => {
    return {
        ingredients: state.burgerBuilder.ingredients,
        price: state.burgerBuilder.totalPrice
    }
};

export default connect(mapStatetoProps)(Checkout);