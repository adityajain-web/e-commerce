import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { setSelectedCategory, removeSelectedCategory } from '../redux/action/productAction'
import { Container, Grid, Box, CircularProgress, Typography } from '@mui/material';
import { ProductCard } from '../components/components';


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
                    <Box>
                        <Grid container>
                            <Grid item xs={12} lg={12} className="mx-auto">
                                {
                                    products ? <>
                                        <Grid container spacing={3}>
                                            {
                                                products.map(product => <Grid key={product.id} item xs={12} sm={6} lg={4} xl={3}>
                                                    <ProductCard productId={product.id} productImage={product.image ? product.image.url ? product.image.url : "https://www.nidhibiopharma.in/wp-content/uploads/2022/03/placeholder-images-image_large.png" : "https://www.nidhibiopharma.in/wp-content/uploads/2022/03/placeholder-images-image_large.png"} productName={product.name} productPrice={product.price.formatted_with_symbol} productPermalink={product.permalink} />
                                                </Grid>)
                                            }
                                        </Grid>
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
                </Container>
            </main>
        </>
    )
}

export default Singlecategory