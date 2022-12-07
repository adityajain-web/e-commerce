import React, { useEffect } from 'react';
import commerce from './lib/commerce';
import { useSelector, useDispatch } from 'react-redux';
import { setProduct } from './redux/action/productAction';
import { retrieveCart } from './redux/action/cartAction';
import { Header, Footer } from './components/components';
import Router from './router/index';

const App = () => {
  const cart = useSelector((state) => state.retrieveCartReducer.cart);
  const dispatch = useDispatch()

  const fetchProducts = async () => {
    const { data } = await commerce.products.list({ limit: 200 })
    dispatch(setProduct(data))
  }

  const handleCartRetrieve = async () => {
    dispatch(retrieveCart(await commerce.cart.retrieve()))
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  useEffect(() => {
    handleCartRetrieve()
  }, [])

  return (
    <>
      <Header />
      <Router />
      <Footer />
    </>
  )
}

export default App