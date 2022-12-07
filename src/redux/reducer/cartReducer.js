import actionTypes from "../constant/actionTypes";

const initialState = {
    cart: []
}

export const retrieveCartReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case actionTypes.RETRIEVE_CART:
            return { ...state, cart: payload }
        default:
            return state
    }
}