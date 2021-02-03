import React, { Component } from 'react';
import { connect } from 'react-redux';
import Spinner from '../../../Components/UI/Spinner/Spinner';
import Order from '../../../Components/Order/Order';
import * as orderActions from '../../../store/actions/index';

class Orders extends Component {
    state = {
        order: [],
        isLoading: false
    }

    componentDidMount () {
        this.props.getOrders();
    }

    render () {
        let orders = this.state.isLoading ? <Spinner loading/> : null;
        if (this.props.orders && this.props.orders.length) {
            orders = this.props.orders.map((order) => {
                return <Order key={order.id} order={order.data}/>
            });
        }
        return (
            orders
        );
    }
}

const mapStatetoProps = state => {
    return {
        orders: state.order.orders
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getOrders: () => dispatch(orderActions.fetchOrders())
    }
}
 export default connect(mapStatetoProps, mapDispatchToProps)(Orders);