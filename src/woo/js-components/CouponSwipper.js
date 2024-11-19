import CouponOne from '../assets/images/coupon1.png'
import CouponTwo from '../assets/images/coupon2.png'
import CouponThree from '../assets/images/coupon3.png'
import CouponFour from '../assets/images/coupon4.png'
import React, { useEffect } from 'react';
import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css';

function CouponSwipper() {

    useEffect(() => {
        new Swiper(".couponSwiper", {
            slidesPerView: 2.5,
            spaceBetween: 0,
            speed: 1500,
            loop: true,
            freeMode: true,
            autoplay: { delay: 3500, disableOnInteraction: false, pauseOnMouseEnter: true },
            breakpoints: {
                320: { slidesPerView: 1.2 },
                640: { slidesPerView: 1.3 },
                767: { slidesPerView: 2.5 },
                991: { slidesPerView: 2.5 },
                1199: { slidesPerView: 2.5 }
            }
        });
    }, []);

    return (
        <div className="swiper couponSwiper">
            <div className="swiper-wrapper">
                <div className="swiper-slide">
                    <div className="coupon-card">
                        <img src={CouponOne} alt="coupon" />
                    </div>
                </div>
                <div className="swiper-slide">
                    <div className="coupon-card">
                        <img src={CouponTwo} alt="coupon" />
                    </div>
                </div>
                <div className="swiper-slide">
                    <div className="coupon-card">
                        <img src={CouponThree} alt="coupon" />
                    </div>
                </div>
                <div className="swiper-slide">
                    <div className="coupon-card">
                        <img src={CouponFour} alt="coupon" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CouponSwipper;