import React, { useEffect } from 'react'
import { setAllMenProducts, setAllWomenProducts, setAllKidsProducts } from '../redux/action/productAction';
import { useSelector, useDispatch } from 'react-redux';
import { Box, Container, Typography, } from '@mui/material'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper";
import Slider1 from '../assets/Home/Banner/slider-1.webp'
import Slider2 from '../assets/Home/Banner/slider-2.webp'
import Slider3 from '../assets/Home/Banner/slider-3.webp'
import Slider4 from '../assets/Home/Banner/slider-4.webp'
import Brands from '../assets/Home/Banner/brands.jpg'
import promo1 from '../assets/Home/Banner/promo1.jpg'
import promo1Mob from '../assets/Home/Banner/promo1-mob.jpg'
import mobBanner from '../assets/Home/Banner/mob-banner1.webp'
import brandMob from '../assets/Home/Banner/brand-mob.jpg'
import promo2 from '../assets/Home/Banner/promo2.webp'
import promo2Mob from '../assets/Home/Banner/promo2-mob.jpg'
import promo3Mob from '../assets/Home/Banner/promo3-mob.webp'
import { CategoryTitle, ProductCard } from '../components/components'
import { Link } from 'react-router-dom';
import { ArrowForward } from '@mui/icons-material';
import commerce from '../lib/commerce';


const Home = () => {
    const dispatch = useDispatch()
    const { allMenProducts, allWomenProducts, allKidsProducts } = useSelector((state) => state.setProductReducer);

    useEffect(() => {
        dispatch(setAllMenProducts())
    }, [dispatch])

    useEffect(() => {
        dispatch(setAllWomenProducts())
    }, [dispatch])

    useEffect(() => {
        dispatch(setAllKidsProducts())
    }, [dispatch])

    return (
        <>
            <main>
                {/* Banner */}
                <section className='d-none d-xl-block'>
                    <Container maxWidth="xxl" className='p-0'>
                        <Swiper
                            spaceBetween={30}
                            loop={true}
                            loopFillGroupWithBlank={true}
                            centeredSlides={true}
                            autoplay={{
                                delay: 10000 * 6,
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
                        <Box py={2}>
                            <Box className='d-flex flex-column flex-md-row justify-content-between align-items-center'>
                                <CategoryTitle variant="h2" align="left" title="TRENDS FOR HIM" />
                                <Typography><Link to="/product/category/mens-clothings/" className='text--grey font--weight-bold'>VIEW MORE <ArrowForward /></Link></Typography>
                            </Box>
                            <Box my={3}>
                                <Swiper
                                    slidesPerView={1}
                                    spaceBetween={10}
                                    loop={true}
                                    loopFillGroupWithBlank={true}
                                    autoplay={{
                                        delay: 2500,
                                        disableOnInteraction: false,
                                    }}
                                    breakpoints={{
                                        640: {
                                            slidesPerView: 2,
                                            spaceBetween: 20
                                        },
                                        768: {
                                            slidesPerView: 4,
                                            spaceBetween: 40
                                        },
                                        1024: {
                                            slidesPerView: 5,
                                            spaceBetween: 50
                                        }
                                    }}
                                    navigation={true}
                                    modules={[Autoplay, Navigation]}
                                    className="mySwiper"
                                >
                                    {
                                        allMenProducts ? allMenProducts.slice(0, 8).map(product => <SwiperSlide key={product.id}>
                                            <ProductCard productId={product.id} productImage={product.image ? product.image.url ? product.image.url : "https://www.nidhibiopharma.in/wp-content/uploads/2022/03/placeholder-images-image_large.png" : "https://www.nidhibiopharma.in/wp-content/uploads/2022/03/placeholder-images-image_large.png"} productName={product.name} productPrice={product.price.formatted_with_symbol} productPermalink={product.permalink} />
                                        </SwiperSlide>) : "Loading..."
                                    }
                                </Swiper>
                            </Box>
                        </Box>
                    </Container>
                </section>
                <section className='mt-md-5 mt-4'>
                    <Container maxWidth="xxl" className='p-0'>
                        <img src={promo2} alt="promo" className='img-fluid d-none d-lg-block' />
                        <img src={promo2Mob} alt="promo" className='img-fluid d-block d-lg-none' />
                    </Container>
                </section>
                <section className='mt-md-5 mt-4'>
                    <Container maxWidth="xxl">
                        <Box py={2}>
                            <Box className='d-flex flex-column flex-md-row justify-content-between align-items-center'>
                                <CategoryTitle variant="h2" align="left" title="TRENDS FOR HER" />
                                <Typography><Link to="/product/category/women-clothing/" className='text--grey font--weight-bold'>VIEW MORE <ArrowForward /></Link></Typography>
                            </Box>
                            <Box my={3}>
                                <Swiper
                                    slidesPerView={1}
                                    spaceBetween={10}
                                    loop={true}
                                    loopFillGroupWithBlank={true}
                                    autoplay={{
                                        delay: 2500,
                                        disableOnInteraction: false,
                                    }}
                                    breakpoints={{
                                        640: {
                                            slidesPerView: 2,
                                            spaceBetween: 20
                                        },
                                        768: {
                                            slidesPerView: 4,
                                            spaceBetween: 40
                                        },
                                        1024: {
                                            slidesPerView: 5,
                                            spaceBetween: 50
                                        }
                                    }}
                                    navigation={true}
                                    modules={[Autoplay, Navigation]}
                                    className="mySwiper"
                                >
                                    {
                                        allWomenProducts ? allWomenProducts.slice(0, 8).map(product => <SwiperSlide key={product.id}>
                                            <ProductCard productId={product.id} productImage={product.image ? product.image.url ? product.image.url : "https://www.nidhibiopharma.in/wp-content/uploads/2022/03/placeholder-images-image_large.png" : "https://www.nidhibiopharma.in/wp-content/uploads/2022/03/placeholder-images-image_large.png"} productName={product.name} productPrice={product.price.formatted_with_symbol} productPermalink={product.permalink} />
                                        </SwiperSlide>) : "Loading..."
                                    }
                                </Swiper>
                            </Box>
                        </Box>
                    </Container>
                </section>
                <section className='mt-md-5 mt-4'>
                    <Container maxWidth="xxl" className='p-0'>
                        <img src={promo1} alt="promotion" className='img-fluid d-none d-lg-block' />
                        <img src={promo1Mob} alt="promotion" className='img-fluid d-block d-lg-none' />
                    </Container>
                </section>

                <section className='mt-md-5 mt-4'>
                    <Container maxWidth="xxl">
                        <Box py={2}>
                            <Box className='d-flex flex-column flex-md-row justify-content-between align-items-center'>
                                <CategoryTitle variant="h2" align="left" title="TRENDS FOR KIDS" />
                                <Typography><Link to="/product/category/kids/" className='text--grey font--weight-bold'>VIEW MORE <ArrowForward /></Link></Typography>
                            </Box>
                            <Box my={3}>
                                <Swiper
                                    slidesPerView={1}
                                    spaceBetween={10}
                                    loop={true}
                                    loopFillGroupWithBlank={true}
                                    autoplay={{
                                        delay: 2500,
                                        disableOnInteraction: false,
                                    }}
                                    breakpoints={{
                                        640: {
                                            slidesPerView: 2,
                                            spaceBetween: 20
                                        },
                                        768: {
                                            slidesPerView: 4,
                                            spaceBetween: 40
                                        },
                                        1024: {
                                            slidesPerView: 5,
                                            spaceBetween: 50
                                        }
                                    }}
                                    navigation={true}
                                    modules={[Autoplay, Navigation]}
                                    className="mySwiper"
                                >
                                    {
                                        allKidsProducts ? allKidsProducts.slice(0, 8).map(product => <SwiperSlide key={product.id}>
                                            <ProductCard productId={product.id} productImage={product.image ? product.image.url ? product.image.url : "https://www.nidhibiopharma.in/wp-content/uploads/2022/03/placeholder-images-image_large.png" : "https://www.nidhibiopharma.in/wp-content/uploads/2022/03/placeholder-images-image_large.png"} productName={product.name} productPrice={product.price.formatted_with_symbol} productPermalink={product.permalink} />
                                        </SwiperSlide>) : "Loading..."
                                    }
                                </Swiper>
                            </Box>
                        </Box>
                    </Container>
                </section>
                <section className='mt-md-5 mt-4'>
                    <Container maxWidth="xxl" className='p-0'>
                        <img src={promo3Mob} alt="promo" className='img-fluid img-fluid d-block d-lg-none' />
                        <img src={Brands} alt="brands" className='img-fluid d-none d-lg-block' />
                        <img src={brandMob} alt="brands" className='img-fluid d-block d-lg-none' />
                    </Container>
                </section>
            </main>
        </>
    )
}

export default Home