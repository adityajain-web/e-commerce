import React from 'react'
import { Box, Container, Grid, Typography } from '@mui/material'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper";
import Slider1 from '../assets/Home/Banner/slider-1.webp'
import Slider2 from '../assets/Home/Banner/slider-2.webp'
import Slider3 from '../assets/Home/Banner/slider-3.webp'
import Slider4 from '../assets/Home/Banner/slider-4.webp'
import mobBanner from '../assets/Home/Banner/mob-banner1.webp'
import { CategoryTitle } from '../components/components'

const Home = () => {
    return (
        <>
            <main>
                {/* Banner */}
                <section className='d-none d-xl-block'>
                    <Container maxWidth="xxl" className='p-0'>
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
                            navigation={false}
                            modules={[Autoplay, Pagination]}
                            className="mySwiper"
                        >
                            {
                                [Slider1, Slider2, Slider3, Slider4].map((item, index) => <SwiperSlide key={`home-banner-slider${index}`}>
                                    <img src={item} alt={`home-banner-slider${index}-img`} className="img-fluid" loading='lazy' />
                                </SwiperSlide>)
                            }
                        </Swiper>
                    </Container>
                </section>
                <section className='d-block d-xl-none'>
                    <Container maxWidth="xxl" className='p-0'>
                        <img src={mobBanner} alt="mob-banner" className='img-fluid' loading='lazy' />
                    </Container>
                </section>
                {/* Banner */}
                <section className='mt-md-5 mt-4'>
                    <Container maxWidth="xxl">
                        <Grid container>
                            <Grid item xs={12} sm={11} lg={10} className="mx-auto">
                                <Box py={2}>
                                    <CategoryTitle variant="h2" align="left" title="TRENDS FOR HIM" />
                                </Box>
                            </Grid>
                        </Grid>
                    </Container>
                </section>
            </main>
        </>
    )
}

export default Home