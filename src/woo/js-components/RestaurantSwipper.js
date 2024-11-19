import ImageImage from '../assets/images/image.jpg';
import React, { useEffect } from 'react';
import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css';

function RestaurantSwipper() {

    useEffect(() => {
        new Swiper(".restaurantSwiper", {
            slidesPerView: 4.5,
            spaceBetween: 0,
            speed: 1500,
            loop: true,
            freeMode: true,
            autoplay: { delay: 3500, disableOnInteraction: false, pauseOnMouseEnter: true },
            breakpoints: {
                320: { slidesPerView: 1.2 },
                640: { slidesPerView: 1.3 },
                767: { slidesPerView: 2.5 },
                991: { slidesPerView: 3.5 },
                1199: { slidesPerView: 3.5 }
            }
        });
    }, []);

    return (
        <div className="swiper restaurantSwiper">
            <div className="swiper-wrapper">
                <div className="swiper-slide">
                    <div className="item-crad">
                        <a href="product-detail.html">
                            <div className="item-image">
                                <img src={ImageImage} alt="image" />
                            </div>
                        </a>
                        <div className="item-cont">
                            <div className="item-title">
                                <h3>Qube Squre</h3>
                                <span className="rating"><i className="fas fa-star"></i> 4.5</span>
                            </div>
                            <p>American, Italian Cuisine</p>
                            <p className="location"><i className="fas fa-map-marker-alt"></i>Fulham Broadway... | 1.5 km</p>
                        </div>
                    </div>
                </div>
                <div className="swiper-slide">
                    <div className="item-crad">
                        <a href="product-detail.html">
                            <div className="item-image">
                                <img src={ImageImage} alt="image" />
                            </div>
                        </a>
                        <div className="item-cont">
                            <div className="item-title">
                                <h3>Qube Squre</h3>
                                <span className="rating"><i className="fas fa-star"></i> 4.5</span>
                            </div>
                            <p>American, Italian Cuisine</p>
                            <p className="location"><i className="fas fa-map-marker-alt"></i>Fulham Broadway... | 1.5 km</p>
                        </div>
                    </div>
                </div>
                <div className="swiper-slide">
                    <div className="item-crad">
                        <a href="product-detail.html">
                            <div className="item-image">
                                <img src={ImageImage} alt="image" />
                            </div>
                        </a>
                        <div className="item-cont">
                            <div className="item-title">
                                <h3>Qube Squre</h3>
                                <span className="rating"><i className="fas fa-star"></i> 4.5</span>
                            </div>
                            <p>American, Italian Cuisine</p>
                            <p className="location"><i className="fas fa-map-marker-alt"></i>Fulham Broadway... | 1.5 km</p>
                        </div>
                    </div>
                </div>
                <div className="swiper-slide">
                    <div className="item-crad">
                        <a href="product-detail.html">
                            <div className="item-image">
                                <img src={ImageImage} alt="image" />
                            </div>
                        </a>
                        <div className="item-cont">
                            <div className="item-title">
                                <h3>Qube Squre</h3>
                                <span className="rating"><i className="fas fa-star"></i> 4.5</span>
                            </div>
                            <p>American, Italian Cuisine</p>
                            <p className="location"><i className="fas fa-map-marker-alt"></i>Fulham Broadway... | 1.5 km</p>
                        </div>
                    </div>
                </div>
                <div className="swiper-slide">
                    <div className="item-crad">
                        <a href="product-detail.html">
                            <div className="item-image">
                                <img src={ImageImage} alt="image" />
                            </div>
                        </a>
                        <div className="item-cont">
                            <div className="item-title">
                                <h3>Qube Squre</h3>
                                <span className="rating"><i className="fas fa-star"></i> 4.5</span>
                            </div>
                            <p>American, Italian Cuisine</p>
                            <p className="location"><i className="fas fa-map-marker-alt"></i>Fulham Broadway... | 1.5 km</p>
                        </div>
                    </div>
                </div>
                <div className="swiper-slide">
                    <div className="item-crad">
                        <a href="product-detail.html">
                            <div className="item-image">
                                <img src={ImageImage} alt="image" />
                            </div>
                        </a>
                        <div className="item-cont">
                            <div className="item-title">
                                <h3>Qube Squre</h3>
                                <span className="rating"><i className="fas fa-star"></i> 4.5</span>
                            </div>
                            <p>American, Italian Cuisine</p>
                            <p className="location"><i className="fas fa-map-marker-alt"></i>Fulham Broadway... | 1.5 km</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RestaurantSwipper;