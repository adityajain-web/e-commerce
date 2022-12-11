import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setSelectedProduct, removeSelectedProduct } from '../redux/action/productAction'
import { handleAddToCart } from '../redux/action/cartAction'
import { Box, Container, Grid, CircularProgress, Typography, IconButton, Button } from '@mui/material';
import { Add, Remove } from '@mui/icons-material';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper";

const SingleProduct = () => {
    const [quantity, setQuantity] = useState(1)
    const params = useParams();
    const { permalink } = useParams();
    const product = useSelector((state) => state.setProductReducer.product)

    const dispatch = useDispatch()

    useEffect(() => {
        if (permalink !== '' || permalink !== undefined || permalink !== null) {
            dispatch(setSelectedProduct(permalink))
        }
        return (() => {
            dispatch(removeSelectedProduct())
        })
    }, [dispatch, permalink])

    return (
        <>
            <main>
                <Container maxWidth="xxl">
                    <Grid container>
                        <Grid item xs={12} lg={10} className="mx-auto">
                            <Box py={5}>
                                <Grid container spacing={5}>
                                    <Grid item xs={12} md={6}>
                                        <Box>
                                            <Swiper
                                                spaceBetween={30}
                                                centeredSlides={true}
                                                autoplay={{
                                                    delay: 2500,
                                                    disableOnInteraction: false,
                                                }}
                                                pagination={{
                                                    clickable: true,
                                                }}
                                                navigation={true}
                                                modules={[Autoplay, Pagination, Navigation]}
                                                className="mySwiper"
                                            >
                                                {
                                                    product.assets ? product.assets.map(item => <SwiperSlide key={item.id}>
                                                        <Box p={5} className="bg--light-grey">
                                                            <img src={item.url ? item.url : 'https://coastaire.com.au/wp-content/uploads/2017/02/dummy-product.jpg'} alt="product" className='img-fluid' />
                                                        </Box>
                                                    </SwiperSlide>) : <Box className='d-flex justify-content-center align-items-center' style={{ height: '89vh', width: "100%" }}>
                                                        <Box className='text-center'>
                                                            <CircularProgress />
                                                            <Typography variant='h3'>Loading...</Typography>
                                                        </Box>
                                                    </Box>
                                                }
                                            </Swiper>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        {
                                            product ? <>
                                                <Box>
                                                    <Box>
                                                        <Typography variant='h1' gutterBottom>{product.name}</Typography>
                                                        <Typography variant='h2' gutterBottom>{product.price ? product.price.formatted_with_symbol ? product.price.formatted_with_symbol : null : null}</Typography>
                                                    </Box>
                                                    <Box mt={3} className="d-flex align-items-center">
                                                        <Box className='d-flex align-items-center'>
                                                            <IconButton className='mx-2 bg--light-grey' onClick={() => quantity > 1 ? setQuantity(quantity - 1) : 1}><Remove /></IconButton>
                                                            <Box className='border rounded d-flex justify-content-center align-items-center' style={{ height: "2.5rem", width: "2.5rem" }}><strong>{quantity}</strong></Box>
                                                            <IconButton className='mx-2 bg--light-grey' onClick={() => setQuantity(quantity + 1)}><Add /></IconButton>
                                                        </Box>
                                                        <Button className='ms-5' onClick={() => dispatch(handleAddToCart(product.id, quantity))}>Add TO Cart</Button>
                                                    </Box>
                                                    <Box mt={3} dangerouslySetInnerHTML={{ __html: product.description ? product.description : null }} />
                                                </Box>
                                            </> : <Box className='d-flex justify-content-center align-items-center' style={{ height: '89vh', width: "100%" }}>
                                                <Box className='text-center'>
                                                    <CircularProgress />
                                                    <Typography variant='h3'>Loading...</Typography>
                                                </Box>
                                            </Box>
                                        }
                                    </Grid>
                                </Grid>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </main>
        </>
    )
}

export default SingleProduct