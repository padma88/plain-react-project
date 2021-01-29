import React, { Component } from 'react';
import axios from 'axios';
import Button from '../../../Components/UI/Button/Button';
import Spinner from '../../../Components/UI/Spinner/Spinner';
import Input from '../../../Components/UI/Input/Input';
import './ContactData.css';

class ContactData extends Component {
    state = {
        orderForm: {
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Name'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 3,
                    maxLength: 30
                }
            },
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Your Email-ID'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 1,
                    maxLength: 30
                }
            },
            postalCode: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Postal Code'
                },
                value: '',
                validation: {
                    required: true,
                    isNumber: true,
                    minLength: 5,
                    maxLength: 5
                }
            },
            street: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Street'
                },
                value: ''
            },
            country: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Country'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 1,
                    maxLength: 30
                }
            },
            deliveryMode: {
                elementType: 'select',
                elementConfig: {
                    options: [{
                        value: 'fastest',
                        displayValue: 'Fastest'
                    }, {
                        value: 'cheapest',
                        displayValue: 'Cheapest'
                    }]
                },
                value: '',
                validation: {
                    required: true,
                }
            }
        }
    }
    inputChangeEventHandler = (event, inputIdentifier) => {
        const value = event.target.value;
        this.callValidation(value, inputIdentifier)
    }
    callValidation (value, inputIdentifier) {
        const updatedForm = {...this.state.orderForm};
        let updatedFormElement = {...updatedForm[inputIdentifier]}
        updatedFormElement.value = value;
        updatedFormElement = {...updatedFormElement, ...this.checkValidation(value, updatedFormElement.validation)};
        updatedForm[inputIdentifier] = updatedFormElement;
        this.setState({
            orderForm: updatedForm
        });
    }
    checkValidation (val, validation) {
        let isValid = true;
        let errorMessage = '';
        let value = val.trim();
        if (validation) {
            if (!value && validation.required) {
                isValid = value && value.length;
                errorMessage = 'This field is required';
            }
            if (value && validation.minLength) {
                isValid = value.length >= validation.minLength;
                errorMessage = 'Minimum length is ' + validation.minLength;
            } 
            if (isValid && value && validation.maxLength) {
                isValid = value.length <= validation.maxLength;
                errorMessage = 'Maximum length is ' + validation.maxLength;
            }
        }
        return {valid: isValid, errorMessage: errorMessage};
    }
    orderHandler = (event) => {
        event.preventDefault();
        let formData = {};
        const formFields = this.state.orderForm;
        let formElement = {};
        for (let inputIdentifier in formFields) {
            formElement = formFields[inputIdentifier];
            this.callValidation(formElement.value, inputIdentifier);
            if (formElement.valid) {
                formData[inputIdentifier] = formElement.value;
            } else {
                return
            }
        }
        const orderInfo = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            customer: formData
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
    formInputElements () {
        const orderForm = this.state.orderForm;
        const inputs = Object.keys(orderForm).map(element => {
            return <Input key={element}
                          elementType={orderForm[element].elementType}
                          elementConfig={orderForm[element].elementConfig}
                          {...orderForm[element]}
                          changed={(event) => this.inputChangeEventHandler(event, element)}/>;
        });
        return inputs;
    }
    frameContactData () {
        return (<div className='ContactDataContainer'>
            <h4 className='HeaderContactData'>Enter your Contact Data</h4>
            <form className='ContactForm'>
                {this.formInputElements()}
                <div>
                    <Button btnType='Success' clicked={this.orderHandler}>ORDER</Button>
                </div>
            </form>
        </div>);
    }
    render () {
        const ContactData = this.frameContactData();
        if (this.state.loading) {
            return <Spinner loading/>;
        } else {
            return ContactData;
        }
    }
}

export default ContactData;