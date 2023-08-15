import React, { useState, useEffect } from 'react';
import "./Home.scss";
// import { Link } from "react-router-dom";
import MinLoader from "../../Components/Loader/MinLoader";
import ShopInstagram from "../../Components/Instagram/Instagram";
// import Category from '../../Components/Category/Category';
//SwiperSLider
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SwiperCore from "swiper";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css/navigation";
import 'swiper/css/autoplay';
SwiperCore.use([Autoplay, Navigation]);

const breakpoints = {
    333: {
        slidesPerView: 1,
    },

    420: {
        slidesPerView: 1.2,
    },
    480: {
        slidesPerView: 2,
    },
    768: {
        slidesPerView: 3,
    },
    1024: {
        slidesPerView: 5,
    },
};

export default function Home() {

    const [isMobileView, setIsMobileView] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const handleResize = () => {
            setIsMobileView(window.innerWidth <= 640);
        };

        handleResize();
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    }, []);

    const products = [
        {
            image: {
                url: require('../../Assets/Images/Group 442.png'),
            },
            name: 'product name',
            category: 'category name',
            price: 400,
            button: 'add to cart',
        },
        {
            image: {
                url: require('../../Assets/Images/Group 442.png'),
            },
            name: 'product name',
            category: 'category name',
            price: 400,
            button: 'add to cart',
        },
        {
            image: {
                url: require('../../Assets/Images/Group 442.png'),
            },
            name: 'product name',
            category: 'category name',
            price: 400,
            button: 'add to cart',
        },
        {
            image: {
                url: require('../../Assets/Images/Group 442.png'),
            },
            name: 'product name',
            category: 'category name',
            price: 400,
            button: 'add to cart',
        },
        {
            image: {
                url: require('../../Assets/Images/Group 442.png'),
            },
            name: 'product name',
            category: 'category name',
            price: 400,
            button: 'add to cart',
        },
        {
            image: {
                url: require('../../Assets/Images/Group 442.png'),
            },
            name: 'product name',
            category: 'category name',
            price: 400,
            button: 'add to cart',
        },
        {
            image: {
                url: require('../../Assets/Images/Group 442.png'),
            },
            name: 'product name',
            category: 'category name',
            price: 400,
            button: 'add to cart',
        },
        {
            image: {
                url: require('../../Assets/Images/Group 442.png'),
            },
            name: 'product name',
            category: 'category name',
            price: 400,
            button: 'add to cart',
        },
        {
            image: {
                url: require('../../Assets/Images/Group 442.png'),
            },
            name: 'product name',
            category: 'category name',
            price: 400,
            button: 'add to cart',
        },
    ]


    const staticCategories = [
        {
            name: 'Category 1',
            image: {
                url: require('../../Assets/Images/Group 442.png'),
            },
        },
        {
            name: 'Category 2',
            image: {
                url: require('../../Assets/Images/Group 443.png'),
            },
        },
        {
            name: 'Category 2',
            image: {
                url: require('../../Assets/Images/Group 444.png'),
            },
        },
        {
            name: 'Category 2',
            image: {
                url: require('../../Assets/Images/Group 445.png'),
            },
        },
        {
            name: 'Category 2',
            image: {
                url: require('../../Assets/Images/Group 446.png'),
            },
        },
        {
            name: 'Category 2',
            image: {
                url: require('../../Assets/Images/Group 447.png'),
            },
        },
        {
            name: 'Category 2',
            image: {
                url: require('../../Assets/Images/Group 448.png'),
            },
        },
        {
            name: 'Category 2',
            image: {
                url: require('../../Assets/Images/Group 449.png'),
            },
        },
        {
            name: 'Category 2',
            image: {
                url: require('../../Assets/Images/Group 450.png'),
            },
        },
        {
            name: 'Category 2',
            image: {
                url: require('../../Assets/Images/Group 451.png'),
            },
        },
        {
            name: 'Category 2',
            image: {
                url: require('../../Assets/Images/Group 452.png'),
            },
        },
        {
            name: 'Category 2',
            image: {
                url: require('../../Assets/Images/Group 453.png'),
            },
        },
        {
            name: 'Category 2',
            image: {
                url: require('../../Assets/Images/Group 454.png'),
            },
        },
        {
            name: 'Category 2',
            image: {
                url: require('../../Assets/Images/Group 455.png'),
            },
        },
        {
            name: 'Category 2',
            image: {
                url: require('../../Assets/Images/Group 456.png'),
            },
        },
        {
            name: 'Category 2',
            image: {
                url: require('../../Assets/Images/Group 457.png'),
            },
        },
    ];

    return (
        <div className="Home">
            <div className="page-container">
                <div className="content">
                    <div className="left-side">
                        <h1>Your dream websites and instant apps awaits !</h1>
                        <p >
                            Welcome to our fresh collection of themes.
                            Hope you find your dream website and instant apps here.
                            Start your journey with our themes.
                        </p>
                        <button >View Collection</button>
                    </div>
                </div>
            </div>

            <div className="categories">
                <div className="categories__main container">
                    <div className="cat-head">
                        <h2>Our</h2>
                        <h1>Categories</h1>
                    </div>
                    <div className="cat-wrapper">
                        {isLoading ? (
                            <MinLoader />
                        ) : isMobileView ? (
                            staticCategories.map((category) => (

                                <img
                                    src={category?.image.url}
                                    alt="category"
                                    style={{
                                        minWidth: 50,
                                        minHeight: 50,
                                        maxWidth: 200,
                                        maxHeight: 200,
                                    }}
                                />

                            ))
                        ) : (
                            <Swiper
                                className="swiper"
                                spaceBetween={10}
                                slidesPerView={6}
                                navigation={true}
                                onSwiper={(swiper) => console.log(swiper)}
                                onSlideChange={() => console.log("slide change")}
                                breakpoints={breakpoints}
                                autoplay={{ delay: 2000 }}
                            >
                                {staticCategories.map((category) => (
                                    <SwiperSlide key={category.name}>

                                        <img
                                            src={category?.image.url}
                                            alt="category"
                                            style={{
                                                minWidth: 20,
                                                minHeight: 20,
                                                maxWidth: 200,
                                                maxHeight: 200,
                                            }}
                                        />

                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        )}
                    </div>
                </div>
            </div>
            <section className='product-wrapper contain contain-bg '>
                <div className='pr-wrapper-header'>
                    <h2 className='sec-head'>Education</h2>
                    <p className='sec-para'>View all</p>
                </div>
                <ShopInstagram />
            </section>
            <section className='product-wrapper contain contain-bg '>
                <div className='pr-wrapper-header'>
                    <h2 className='sec-head'>Non-Profit</h2>
                    <p className='sec-para'>View all</p>
                </div>
                <ShopInstagram />
            </section>
            <section className='product-wrapper contain contain-bg '>
                <div className='pr-wrapper-header'>
                    <h2 className='sec-head'>Chemical</h2>
                    <p className='sec-para'>View all</p>
                </div>
                <ShopInstagram />
            </section>
            <section className='product-wrapper contain contain-bg '>
                <div className='pr-wrapper-header'>
                    <h2 className='sec-head'>Healthcare</h2>
                    <p className='sec-para'>View all</p>
                </div>
                <ShopInstagram />
            </section>
            <section className='product-wrapper contain contain-bg '>
                <div className='pr-wrapper-header'>
                    <h2 className='sec-head'>Spa</h2>
                    <p className='sec-para'>View all</p>
                </div>
                <ShopInstagram />
            </section>
            <section className='product-wrapper contain contain-bg '>
                <div className='pr-wrapper-header'>
                    <h2 className='sec-head'>Portfolio</h2>
                    <p className='sec-para'>View all</p>
                </div>
                <ShopInstagram />
            </section>
            <section className='product-wrapper contain contain-bg '>
                <div className='pr-wrapper-header'>
                    <h2 className='sec-head'>Yoga</h2>
                    <p className='sec-para'>View all</p>
                </div>
                <ShopInstagram />
            </section>
        </div>
    )
}
