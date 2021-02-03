import * as actionTypes from '../actions/actionTypes';

const initialState = {
    ingredients: {},
    ingredientPrice: {
        salad: 1.3,
        meat: 0.5,
        cheese: 1.1,
        bacon: 0.7
    },
    totalPrice: 4.00,
    minPrice: 4.00
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_INGREDIENTS:
            return {
                ...state,
                ingredients: { ...action.data},
                totalPrice: state.minPrice
            }
        case actionTypes.FETCH_ERROR:
            return {
                ...state,
                error: action.error
            }
        case actionTypes.ADD_INGREDIENT:
            return {
                ...state,
                totalPrice: Number(
                                Number(state.totalPrice) + 
                                Number(state.ingredientPrice[action.key])
                            ).toFixed(2),
                ingredients: {
                    ...state.ingredients,
                    [action.key]: state.ingredients[action.key] + 1
                }
            }
        case actionTypes.REMOVE_INGREDIENT:
            return {
                ...state,
                totalPrice: Number(
                                Number(state.totalPrice) + 
                                Number(state.ingredientPrice[action.key])
                            ).toFixed(2),
                ingredients: {
                    ...state.ingredients,
                    [action.key]: state.ingredients[action.key] - 1
                }
            }
        default:
            return state;
    }
}

export default reducer;