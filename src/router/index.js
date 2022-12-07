import React from 'react'
import { Routes, Route } from 'react-router-dom';
import { Home, Shop, Cart, Checkout, SingleProduct, SingleCategory, Error } from '../pages/pages'

const Router = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/shop/' element={<Shop />} />
                <Route path='/product/:permalink/' element={<SingleProduct />} />
                <Route path='/product/category/:slug/' element={<SingleCategory />} />
                <Route path='/cart/' element={<Cart />} />
                <Route path='/checkout/' element={<Checkout />} />
                <Route path='*' element={<Error />} />
            </Routes>
        </>
    )
}

export default Router