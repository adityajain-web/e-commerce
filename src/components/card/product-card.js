import React from 'react'
import { Box, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

const ProductCard = ({ productImage, productName, productPrice, productPermalink }) => {
    return (
        <>
            <Box>
                <Box p={5} className='bg--light-grey rounded-3'>
                    <img src={productImage} alt={productName} className="img-fluid rounded-3" />
                </Box>
                <Box mt={1}>
                    <Typography variant='h3' gutterBottom><Link className='text--grey' to={`/product/${productPermalink}`}>{productName}</Link></Typography>
                    <Typography variant='h4' className='text--dark-grey'>{productPrice}</Typography>
                </Box>
            </Box>
        </>
    )
}

export default ProductCard