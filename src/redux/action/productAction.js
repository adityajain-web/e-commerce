import actionTypes from '../constant/actionTypes';

export const setProduct = (products) => {
    return {
        type: actionTypes.SET_PRODUCTS,
        payload: products
    }
}

export const setAllMenProducts = (products) => {
    return {
        type: actionTypes.FILTER_FOR_MEN,
        payload: products
    }
}

export const setAllWomenProducts = (products) => {
    return {
        type: actionTypes.FILTER_FOR_WOMEN,
        payload: products
    }
}

export const setAllKidsProducts = (products) => {
    return {
        type: actionTypes.FILTER_FOR_KIDS,
        payload: products
    }
}