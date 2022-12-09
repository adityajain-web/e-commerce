import actionTypes from '../constant/actionTypes';

const initialState = {
    products: [],
    allMenProducts: [],
    allWomenProducts: [],
    allKidsProducts: [],
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

        default:
            return state;
    }
}