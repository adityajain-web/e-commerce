import actionTypes from '../constant/actionTypes';

export const setProduct = (products) => {
    return {
        type: actionTypes.SET_PRODUCTS,
        payload: products
    }
}