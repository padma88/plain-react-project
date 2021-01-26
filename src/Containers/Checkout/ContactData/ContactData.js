import React, { Component } from 'react';
import axios from 'axios';
import Button from '../../../Components/UI/Button/Button';
import Spinner from '../../../Components/UI/Spinner/Spinner';
import './ContactData.css';

class ContactData extends Component {
    state = {
        customer: {
            name: '',
            email: '',
            address: {
                postalCode: '',
                street: ''
            }
        }
    }
    orderHandler = (event) => {
        event.preventDefault();
        const orderInfo = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            customer: this.state.customer,
            deliveryMode: 'fastest'
        };
        this.setState({ loading: true });
        axios.post('/orders.json', orderInfo)
            .then((response) => {
                this.setState({
                    loading: false
                })
                this.props.history.replace('/');
            })
            .catch(error => {
                this.setState({
                    loading: false
                })
            })
    }
    render () {
        const ContactData = 
            <div className='ContactDataContainer'>
                <h4>Enter your Contact Data</h4>
                <form className='ContactForm'>
                    <input type='text' name={this.state.customer.name} placeholder='Name'/>
                    <input type='email' name='email' placeholder='Email ID'/>
                    <input type='text' name='street' placeholder='Street'/>
                    <input type='text' name='postalCode' placeholder='ZipCode'/>
                    <div>
                        <Button btnType='Success' clicked={this.orderHandler}>ORDER</Button>
                    </div>
                </form>
            </div>;
        if (this.state.loading) {
            return <Spinner loading/>;
        } else {
            return ContactData;
        }
    }
}

export default ContactData;