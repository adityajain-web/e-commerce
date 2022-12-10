import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { retrieveCart } from '../redux/action/cartAction';

const Cart = () => {
    const dispatch = useDispatch()
    const cart = useSelector((state) => state.retrieveCartReducer.cart);

    useEffect(() => {
        dispatch(retrieveCart())
    }, [dispatch])

    return (
        <>Cart</>
    )
}

export default Cart