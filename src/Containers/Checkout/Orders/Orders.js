import React, { Component } from 'react';
import axios from 'axios';
import Spinner from '../../../Components/UI/Spinner/Spinner';
import Order from '../../../Components/Order/Order';
import withErrorHandler from '../../../hoc/withErrorHandler/withErrorHandler';

class Orders extends Component {
    state = {
        order: [],
        isLoading: false
    }
    componentDidMount () {
        this.setState({
            isLoading: true
        })
        axios.get('/orders.json').then(response => {
            let orders = [];
            for (let key in response.data) {
                orders.push({
                    ...response.data[key], 
                    id: key
                });
            }
            this.setState({
                orders: orders,
                isLoading: false
            })
        }).catch(err => {
            this.setState({
                isLoading: false
            })
        })
    }
    render () {
        let orders = this.state.isLoading ? <Spinner loading/> : null;
        if (this.state.orders && this.state.orders.length) {
            orders = this.state.orders.map((order) => {
                return <Order key={order.id} order={order}/>
            });
        }
        return (
            orders
        );
    }
}
 export default withErrorHandler(Orders, axios);