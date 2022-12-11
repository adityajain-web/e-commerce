import commerce from "../../lib/commerce";
import actionTypes from "../constant/actionTypes";

export const retrieveCart = () => async (dispatch, getstate) => {
    const cart = await commerce.cart.retrieve();
    dispatch({ type: actionTypes.RETRIEVE_CART, payload: cart })
}

export const handleAddToCart = (productId, quantity) => async (dispatch, getState) => {
    const cart = await commerce.cart.add(productId, quantity);
    dispatch({ type: actionTypes.HANDLE_ADD_TO_CART, payload: cart })
}

export const removeProductFromCart = (productId) => async (dispatch, getState) => {
    const cart = await commerce.cart.remove(productId);
    dispatch({ type: actionTypes.REMOVE_PRODUCT_FROM_CART, payload: cart })
}

export const handleCartUpdate = (productId, quantity) => async (dispatch, getState) => {
    const cart = await commerce.cart.update(productId, { quantity })
    dispatch({ type: actionTypes.UPDATE_CART, payload: cart })
}

export const setCartEmpty = () => async (dispatch, getState) => {
    const cart = await commerce.cart.empty();
    dispatch({ type: actionTypes.SET_CART_EMPTY, payload: cart })
}