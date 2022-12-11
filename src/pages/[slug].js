import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { setSelectedCategory, removeSelectedCategory } from '../redux/action/productAction'
import { Container, Grid, Box, CircularProgress, Typography, Paper, Divider } from '@mui/material';
import { ProductCard, CategoryTitle } from '../components/components';


const Singlecategory = () => {
    const params = useParams();
    const { slug } = params;

    const dispatch = useDispatch()

    const products = useSelector((state) => state.setProductReducer.productsByCategory);
    console.log(products, slug)

    useEffect(() => {
        if (slug !== '' || slug !== undefined || slug !== null) {
            dispatch(setSelectedCategory(slug))
        }
        return (() => {
            dispatch(removeSelectedCategory())
        })
    }, [dispatch, slug])

    return (
        <>
            <main>
                <Container maxWidth="xxl">
                    <Box py={5}>
                        <Box mb={3}>
                            <CategoryTitle variant="h1" align="center" title="SHOP" />
                        </Box>
                        <Box>
                            <Grid container spacing={5}>
                                <Grid item xs={12} md={4} className="order-1 order-md-0" style={{ height: 'inherit' }}>
                                    <aside style={{ height: "100%" }}>
                                        <Box p={3} component={Paper} style={{ position: 'sticky', top: '12%' }}>
                                            <Box>
                                                <Typography variant='h2' gutterBottom>Under Construction...</Typography>
                                                <Divider className='bg--grey' />
                                            </Box>
                                            <Box mt={5}>
                                                <img src="https://topgrowthmarketing.com/wp-content/uploads/2022/04/nasteeemail.jpg" className='img-fluid' alt="ads" />
                                            </Box>
                                        </Box>
                                    </aside>
                                </Grid>
                                <Grid item xs={12} md={8} className="order-0 order-md-1">
                                    <Box>
                                        <Box className='d-flex justify-content-between align-items-center' p={3} component={Paper}>
                                            <Typography variant='h2'>Search Results | <span className='text--grey'>{products ? products.length : '...'} Products</span></Typography>
                                            {/* <Box>
                                                <IconButton className='mx-1'><Apps /></IconButton>
                                                <IconButton className='mx-1'><List /></IconButton>
                                            </Box> */}
                                        </Box>
                                        <Box mt={3}>
                                            {
                                                products ? <>
                                                    <Grid container spacing={3}>
                                                        {
                                                            products.map(product => <Grid key={product.id} item xs={12} sm={6} md={6} lg={4}>
                                                                <ProductCard productId={product.id} productImage={product.image ? product.image.url ? product.image.url : "https://www.nidhibiopharma.in/wp-content/uploads/2022/03/placeholder-images-image_large.png" : "https://www.nidhibiopharma.in/wp-content/uploads/2022/03/placeholder-images-image_large.png"} productName={product.name} productPrice={product.price.formatted_with_symbol} productPermalink={product.permalink} />
                                                            </Grid>)
                                                        }
                                                    </Grid>
                                                </> : <Box className='d-flex justify-content-center align-items-center' style={{ height: '60vh', width: "100%" }}>
                                                    <Box className='text-center'>
                                                        <CircularProgress />
                                                        <Typography variant='h3'>Loading...</Typography>
                                                    </Box>
                                                </Box>
                                            }
                                        </Box>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </Container>
            </main>
        </>
    )
}

export default Singlecategory