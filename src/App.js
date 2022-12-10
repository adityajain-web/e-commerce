import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { retrieveCart } from './redux/action/cartAction';
import { Header, Footer } from './components/components';
import Router from './router/index';

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(retrieveCart())
  }, [dispatch])

  return (
    <>
      <Header />
      <Router />
      <Footer />
    </>
  )
}

export default App