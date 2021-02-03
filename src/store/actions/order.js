import * as actionTypes from './actionTypes';
import axios from 'axios';

export const fetchErrorAction = () => {
    return {
        type: actionTypes.FETCH_ERROR,
        error: true
    }
}

export const setOrders = (data) => {
    return {
        type: actionTypes.SET_ORDERS,
        data: data
    }
}

export const fetchOrders = (value) => {
    return dispatch => {
        axios.get('/orders.json').then(response => {
            dispatch(setOrders(response.data));
        }).catch(error => {
            dispatch(fetchErrorAction());
        })
    }
}
