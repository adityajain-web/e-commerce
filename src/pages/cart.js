import { Container, Grid, Box, CircularProgress, Typography, IconButton, Button, Paper, Divider, List, ListItem, ListItemText } from '@mui/material';
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { retrieveCart } from '../redux/action/cartAction';
import { CategoryTitle } from '../components/components'
import { Add, Remove, Delete } from '@mui/icons-material'
import { removeProductFromCart, handleCartUpdate, setCartEmpty } from '../redux/action/cartAction'
import { useNavigate } from 'react-router-dom';

const Cart = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const cart = useSelector((state) => state.retrieveCartReducer.cart);

    useEffect(() => {
        dispatch(retrieveCart())
    }, [dispatch])

    return (
        <>
            <main>
                <Container maxWidth="xxl">
                    <Grid container>
                        <Grid item xs={12} lg={10} className="mx-auto">
                            <Box py={5}>
                                <Box my={3}>
                                    <CategoryTitle variant="h1" align="center" title="CART" />
                                </Box>
                                {
                                    cart ? <>
                                        {
                                            cart.total_items > 0 ? <>
                                                <Grid container spacing={5}>
                                                    <Grid item xs={12} md={8}>
                                                        {
                                                            cart.line_items.map(product => <Box mb={3} p={1} key={product.id} className="border rounded">
                                                                <Grid container spacing={3}>
                                                                    <Grid item xs={12} md={2}>
                                                                        <Box p={3} className="bg--light-grey rounded">
                                                                            <img src={product.image ? product.image.url ? product.image.url : 'https://coastaire.com.au/wp-content/uploads/2017/02/dummy-product.jpg' : 'https://coastaire.com.au/wp-content/uploads/2017/02/dummy-product.jpg'} alt="product" className='img-fluid' />
                                                                        </Box>
                                                                    </Grid>
                                                                    <Grid item xs={12} md={10}>
                                                                        <Box>
                                                                            <Typography variant='h2' gutterBottom>{product.name}</Typography>
                                                                            <Typography variant='h3'>{product.line_total ? product.line_total.formatted_with_symbol ? product.line_total.formatted_with_symbol : '' : ""}</Typography>
                                                                            <Box mt={3} className="d-flex align-items-center">
                                                                                <Box className='d-flex align-items-center'>
                                                                                    <IconButton className='mx-2 bg--light-grey' onClick={() => product.quantity > 1 ? dispatch(handleCartUpdate(product.id, product.quantity - 1)) : dispatch(removeProductFromCart(product.id))}><Remove /></IconButton>
                                                                                    <Box className='border rounded d-flex justify-content-center align-items-center' style={{ height: "2.5rem", width: "2.5rem" }}><strong>{product.quantity}</strong></Box>
                                                                                    <IconButton className='mx-2 bg--light-grey' onClick={() => dispatch(handleCartUpdate(product.id, product.quantity + 1))}><Add /></IconButton>
                                                                                </Box>
                                                                                <Button color='secondary' className='ms-5' onClick={() => dispatch(removeProductFromCart(product.id))}>Remove <Delete /></Button>
                                                                            </Box>
                                                                        </Box>
                                                                    </Grid>
                                                                </Grid>
                                                            </Box>)
                                                        }
                                                    </Grid>
                                                    <Grid item xs={12} md={4} style={{ height: "inherit" }}>
                                                        <Box p={3} component={Paper} style={{ position: 'sticky', top: "12%" }} >
                                                            <List>
                                                                <ListItem>
                                                                    <ListItemText primary={<h2>Subtotal</h2>} />
                                                                    <Typography variant='h2'>{cart.subtotal.formatted_with_symbol}</Typography>
                                                                </ListItem>
                                                            </List>
                                                            <Divider className='bg--grey' />
                                                            <Box my={2} className='d-flex justify-content-between'>
                                                                <Button onClick={() => navigate('/checkout/')}>Checkout</Button>
                                                                <Button onClick={() => dispatch(setCartEmpty())}>Make Cart Empty</Button>
                                                            </Box>
                                                        </Box>
                                                    </Grid>
                                                </Grid>
                                            </> : <>
                                                <Box className='d-flex justify-content-center align-items-center' style={{ height: '89vh', width: "100%" }}>
                                                    <Box className='d-flex flex-column align-items-center justify-content-center
                                                    '>
                                                        <img src="https://constant.myntassets.com/checkout/assets/img/empty-bag.webp" alt="emptybag" className='img-fluid' />
                                                        <Typography variant='h2' className='my-1' align='center'>Hey, it feels so light!</Typography>
                                                        <Typography variant='subtitle1' className='my-1' align='center'>There is nothing in your bag. Let's add some items.</Typography>
                                                    </Box>
                                                </Box>
                                            </>
                                        }
                                    </> : <Box className='d-flex justify-content-center align-items-center' style={{ height: '89vh', width: "100%" }}>
                                        <Box className='text-center'>
                                            <CircularProgress />
                                            <Typography variant='h3'>Loading...</Typography>
                                        </Box>
                                    </Box>
                                }
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </main>
        </>
    )
}

export default Cart