import actionTypes from '../constant/actionTypes';

const initialState = {
    products: [],
    allMenProducts: [],
    allWomenProducts: [],
    allKidsProducts: [],
    productsByCategory: [],
    product: {}
}

export const setProductReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case actionTypes.SET_PRODUCTS:
            return { ...state, products: payload };

        case actionTypes.FILTER_FOR_MEN:
            return { ...state, allMenProducts: payload };

        case actionTypes.FILTER_FOR_WOMEN:
            return { ...state, allWomenProducts: payload };

        case actionTypes.FILTER_FOR_KIDS:
            return { ...state, allKidsProducts: payload }

        case actionTypes.SET_SELECTED_CATEGORY:
            return { ...state, productsByCategory: payload };

        case actionTypes.REMOVE_SELECTED_CATEGORY:
            return { ...state, productsByCategory: [] };

        case actionTypes.SET_SELECTED_PRODUCT:
            return { ...state, product: payload }

        case actionTypes.REMOVE_SELECTED_PRODUCT:
            return { ...state, product: {} }

        default:
            return state;
    }
}