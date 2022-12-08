import { Copyright } from '@mui/icons-material'
import { Container, Typography } from '@mui/material'
import React from 'react'

const Footer = () => {
    return (
        <>
            <footer>
                <Container maxWidth="xxl" className='d-flex align-items-center justify-content-between bg-light py-2'>
                    <Typography variant='body2' className='text--grey'><Copyright />{new Date().getFullYear()} | All Rights Reserved</Typography>
                    <Typography variant='body2' className='text--grey'>Developed By | <a href="https://www.linkedin.com/in/adityaburse-jain">Aditya</a></Typography>
                </Container>
            </footer>
        </>
    )
}

export default Footer