import Header from "./Header";
import Footer from "./Footer";

import offerImg from './assets/images/offer.svg';
import cuisineImg from './assets/images/cuisine.svg';
import filterImg from './assets/images/filter.svg';
import DatePicker from "./js-components/DatePicker";
import RestaurantSwipper from "./js-components/RestaurantSwipper";
import CouponSwipper from "./js-components/CouponSwipper";


function Front() {
    return (
        <>
            <Header />

            {/* banner filter start here */}
            <section className="banner-filter">
                <div className="container">
                    <h1>Best Place to Hangout!</h1>
                    <div className="filter-box">
                        <DatePicker />

                        <div className="time-picker">
                            <i className="fas fa-clock"></i>
                            <select>
                                <option>Select Time</option>
                                <option>12:00 AM</option>
                                <option>01:00 PM</option>
                                <option>02:00 PM</option>
                                <option>03:00 PM</option>
                                <option>04:00 PM</option>
                            </select>
                        </div>
                        <div className="select-people">
                            <i className="fas fa-user"></i>
                            <select>
                                <option>Select People</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
                        </div>
                        <div className="filter-btn">
                            <button className="btnFilter" type="button" data-bs-toggle="modal" data-bs-target="#filterModal"><img src={filterImg} /> Filter</button>
                        </div>
                        <div className="offer tags"><img src={offerImg} />Great Offer</div>
                        <div className="rateing tags"><i className="far fa-star"></i> Top Rated</div>
                        <div className="cuisine tags"><img src={cuisineImg} />Type of Cuisine</div>
                        <div className="location tags">Near by</div>
                    </div>
                </div>
            </section>

            <section className="our-restaurant">
                <div className="container">
                    <div className="heading-bar">
                        <h2 className="main-heading">Our Restaurants</h2>
                        <a href="#" className="view-btn">View all</a>
                    </div>
                    <div className="restaurant-list">
                        <RestaurantSwipper />
                    </div>
                </div>
            </section>


            <section className="cta-sec">
                <div className="container">
                    <h2>For Beast Food and Vibe Visit <span>WOW MY CITY</span></h2>
                    <p>Synergistically visualize alternative content before cross functional core Rapidiously administra standardized value via focused benefits. Rapidiously redefine highly efficient niche markets with plug-and-play materials professionally seize client centric solutions</p>
                    <a href="#" className="primary-btn">Book a Table</a>
                </div>
            </section>

            <section className="coupons">
                <div className="container">
                    <h2 className="main-heading">Coupons for you</h2>
                    <div className="coupon-list">
                        <CouponSwipper />
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}

export default Front;