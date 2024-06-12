import React, { useState } from 'react';
import { Link } from "react-router-dom";

import logo from "../assets/img/logo/Today_Talks_Logo2.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = () => {
    const [activeLink, setActiveLink] = useState('home');

    const handleLinkClick = (link) => {
        setActiveLink(link);
    };

    return (
        <header className="header-style-six">
            <div id="header-fixed-height"></div>
            <div className="header-top-wrap-four">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-8">
                            <div className="header-top-left-four">
                                <div className="trending-box">
                                    <div className="icon"><img src="assets/img/icon/trending_icon.svg" alt="" /></div>
                                    <span>Trending</span>
                                    <div className="shape">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122 36" preserveAspectRatio="none" fill="none">
                                            <path d="M0 18C0 8.05888 8.05887 0 18 0H110L121.26 16.8906C121.708 17.5624 121.708 18.4376 121.26 19.1094L110 36H18C8.05888 36 0 27.9411 0 18Z" fill="url(#trending_shape)" />
                                            <defs>
                                                <linearGradient id="trending_shape" x1="12" y1="36" x2="132" y2="36" gradientUnits="userSpaceOnUse">
                                                    <stop offset="0" stopColor="#3F6088" />
                                                    <stop offset="1" stopColor="#2A4970" stopOpacity="0" />
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                    </div>
                                </div>
                                <div className="swiper-container ta-trending-slider">
                                    <div className="swiper-wrapper">
                                        <div className="swiper-slide">
                                            <div className="trending-content">
                                                <a href="blog-details.html">Here area brands and designers to look out for next year 2023</a>
                                            </div>
                                        </div>
                                        <div className="swiper-slide">
                                            <div className="trending-content">
                                                <a href="blog-details.html">Here area brands and designers to look out for next year 2023</a>
                                            </div>
                                        </div>
                                        <div className="swiper-slide">
                                            <div className="trending-content">
                                                <a href="blog-details.html">Here area brands and designers to look out for next year 2023</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="header-top-social header-top-social-two">
                                <h5 className="title">Follow Us:</h5>
                                <ul className="list-wrap">
                                    <li><a href="https://www.facebook.com" target='blank'><FontAwesomeIcon icon="fa-brands fa-facebook-f" /></a></li>
                                    <li><a href="https://www.twitter.com" target='blank'><FontAwesomeIcon icon="fa-brands fa-x-twitter" /></a></li>
                                    <li><a href="https://www.instagram.com" target='blank'><FontAwesomeIcon icon="fa-brands fa-instagram" /></a></li>
                                    <li><a href="https://www.linkedin.com" target='blank'><FontAwesomeIcon icon="fa-brands fa-linkedin" /></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="sticky-header" className="menu-area menu-style-six">
                <div className="container">
                    <div className="row">
                        <div className="col-2">
                            <a href="#">
                                <img src={logo} alt="logo" className="logo-style" />
                            </a>
                        </div>
                        <div className="col-8">
                            <div className="menu-wrap">
                                <nav className="menu-nav">
                                    <div className="navbar-wrap main-menu d-none d-lg-flex">
                                        <ul className="navigation">
                                            
                                            <li className={activeLink === 'home' ? 'active' : ''}>
                                                <Link to="/" onClick={() => handleLinkClick('home')}>Home</Link>
                                            </li>
                                            <li className={activeLink === 'entertainment' ? 'active' : ''}>
                                                <Link to="/entertainment" onClick={() => handleLinkClick('entertainment')}>Entertainment</Link>
                                            </li>
                                            <li className={activeLink === 'economics' ? 'active' : ''}>
                                                <Link to="/economics" onClick={() => handleLinkClick('economics')}>Economics</Link>
                                            </li>
                                            <li className={activeLink === 'sports' ? 'active' : ''}>
                                                <Link to="/sports" onClick={() => handleLinkClick('sports')}>Sports</Link>
                                            </li>
                                            <li className={activeLink === 'politics' ? 'active' : ''}>
                                                <Link to="/politics" onClick={() => handleLinkClick('politics')}>Politics</Link>
                                            </li>
                                            
                                        </ul>
                                    </div>
                                </nav>
                            </div>
                        </div>

                        <div className="col-2">
                            <span className="date"><FontAwesomeIcon icon="fa-regular fa-calendar" />February 12, 2024</span>
                        </div>

                    </div>
                </div>
            </div>

        </header>
    );
};

export default Header;
