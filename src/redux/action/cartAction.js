import commerce from "../../lib/commerce";
import actionTypes from "../constant/actionTypes";

export const retrieveCart = () => async (dispatch, getstate) => {
    const cart = await commerce.cart.retrieve();
    dispatch({ type: actionTypes.RETRIEVE_CART, payload: cart })
}