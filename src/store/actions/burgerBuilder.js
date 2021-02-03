import * as actionTypes from './actionTypes';
import axios from 'axios';

export const add = (value) => {
    return {
        type: actionTypes.ADD_INGREDIENT, 
        key: value
    }
}

export const remove = (value) => {
    return {
        type: actionTypes.REMOVE_INGREDIENT, 
        key: value
    }
}

export const setIngredients = (data) => {
    return {
        type: actionTypes.SET_INGREDIENTS,
        data: data
    }
}

export const fetchErrorAction = () => {
    return {
        type: actionTypes.FETCH_ERROR,
        error: true
    }
}

export const init = () => {
    return dispatch => {
        axios.get('/ingredients.json').then(response => {
            dispatch(setIngredients(response.data));
        }).catch(error => {
            dispatch(fetchErrorAction());
        })
    }
}