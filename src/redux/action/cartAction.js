import actionTypes from "../constant/actionTypes";

export const retrieveCart = (cart) => {
    return {
        type: actionTypes.RETRIEVE_CART,
        payload: cart
    }
}