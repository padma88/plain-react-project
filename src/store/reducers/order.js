import * as actionTypes from '../actions/actionTypes';

const initialState = {
    orders: [],
    purchased: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_ORDERS:
            const data = action.data;
            let updatedList = Object.keys(data).map(key => {
                return {id: key, data: data[key]};
            });
            return {
                ...state,
                orders: state.orders.concat(updatedList)
            }
        case actionTypes.PURCHASE:
            return {
                ...state,
                purchased: true
            }
        case actionTypes.FETCH_ERROR:
            return {
                ...state,
                error: action.error
            }
        default:
            return state;
    }
}

export default reducer;