import { Typography } from '@mui/material'
import React from 'react'

const CategoryTitle = ({ variant, align, title }) => {
    return (
        <>
            <Typography className='category-title' variant={variant} align={align}>{title}</Typography>
        </>
    )
}

export default CategoryTitle