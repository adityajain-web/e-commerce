import React, { useEffect } from 'react';
import commerce from './lib/commerce';
import { useSelector, useDispatch } from 'react-redux';
import { setProduct, setAllMenProducts, setAllWomenProducts, setAllKidsProducts } from './redux/action/productAction';
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

  const filterForMen = async () => {
    const { data } = await commerce.products.list({ category_slug: ['mens'] });
    dispatch(setAllMenProducts(data))
  }

  const filterForWomen = async () => {
    const { data } = await commerce.products.list({ category_slug: ['womens'] });
    dispatch(setAllWomenProducts(data))
  }

  const filterForKids = async () => {
    const { data } = await commerce.products.list({ category_slug: ['kids'] });
    dispatch(setAllKidsProducts(data))
  }

  useEffect(() => {
    fetchProducts()
    filterForMen()
    filterForWomen()
    filterForKids()
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