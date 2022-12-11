import actionTypes from "../constant/actionTypes";

const initialState = {
    cart: []
}

export const retrieveCartReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case actionTypes.RETRIEVE_CART:
            return { ...state, cart: payload };

        case actionTypes.HANDLE_ADD_TO_CART:
            return { ...state, cart: payload };

        case actionTypes.REMOVE_PRODUCT_FROM_CART:
            return { ...state, cart: payload }

        case actionTypes.UPDATE_CART:
            return { ...state, cart: payload }

        case actionTypes.SET_CART_EMPTY:
            return { ...state, cart: payload }

        default:
            return state
    }
}