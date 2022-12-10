import commerce from '../../lib/commerce';
import actionTypes from '../constant/actionTypes';

export const setProduct = () => async (dispatch, getState) => {
    const { data } = await commerce.products.list({ limit: 200 });
    dispatch({ type: actionTypes.SET_PRODUCTS, payload: data })
}

export const setAllMenProducts = () => async (dispatch, getState) => {
    const { data } = await commerce.products.list({ category_slug: ['mens'] });
    dispatch({ type: actionTypes.FILTER_FOR_MEN, payload: data })
}


export const setAllWomenProducts = () => async (dispatch, getState) => {
    const { data } = await commerce.products.list({ category_slug: ['womens'] });
    dispatch({ type: actionTypes.FILTER_FOR_WOMEN, payload: data })
}

export const setAllKidsProducts = () => async (dispatch, getState) => {
    const { data } = await commerce.products.list({ category_slug: ['kids'] });
    dispatch({ type: actionTypes.FILTER_FOR_KIDS, payload: data })
}

export const setSelectedCategory = (slug) => async (dispatch, getdata) => {
    const { data } = await commerce.products.list({ category_slug: [slug], limit: 200 });
    dispatch({ type: actionTypes.SET_SELECTED_CATEGORY, payload: data })
}

export const removeSelectedCategory = () => (dispatch) => {
    dispatch({ type: actionTypes.REMOVE_SELECTED_CATEGORY })
}