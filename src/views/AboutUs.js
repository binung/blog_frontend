import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import Blog from '../components/Blog';
import Newsletter from "../components/Newsletter";
import ContactImage from "../assets/img/images/contact_img.jpg";
import about_img01 from "../assets/img/images/about_img01.jpg"
import about_img02 from "../assets/img/images/about_img02.jpg"
import about_img03 from "../assets/img/images/about_img03.jpg"
import about_shape from "../assets/img/images/about_shape.png"
import { Link } from "react-router-dom";

const AboutUs = () => {
    return (
        <>
            <div class="breadcrumb-area">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="breadcrumb-content">
                                <nav aria-label="breadcrumb">
                                    <ol class="breadcrumb">
                                        <li class="breadcrumb-item"><Link to="/" >Home <span> <FontAwesomeIcon icon="fa-solid fa-angles-right" /></span></Link></li>
                                        <li class="breadcrumb-item active" aria-current="page">About Us</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section class="about-area pt-80 pb-80">
                <div class="container">
                    <div class="row align-items-center justify-content-center">
                        <div class="col-lg-7 col-md-10 order-0 order-lg-2">
                            <div class="about-img">
                                <div class="left-img">
                                    <img src={about_img01} alt=""/>
                                    <img src={about_img02} alt=""/>
                                </div>
                                <div class="right-img">
                                    <img src={about_img03} alt=""/>
                                </div>
                                <img src={about_shape} alt="" class="shape" />
                            </div>
                        </div>
                        <div class="col-lg-5">
                            <div class="about-content">
                                <div class="section-title-five">
                                    <span class="sub-title">WHO WE ARE?</span>
                                    <h2 class="title">We Build Bridge Between Companies And Customers</h2>
                                </div>
                                <span>
                                    "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages"
                                </span>
                                <p>
                                    "popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker."
                                </p>
                                <div class="view-all-btn">
                                    <Link to="/contact" class="btn btn-two link-btn">
                                        Read More <span class="svg-icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10" fill="none">
                                                <path d="M1.07692 10L0 8.92308L7.38462 1.53846H0.769231V0H10V9.23077H8.46154V2.61538L1.07692 10Z" fill="currentColor"></path>
                                                <path d="M1.07692 10L0 8.92308L7.38462 1.53846H0.769231V0H10V9.23077H8.46154V2.61538L1.07692 10Z" fill="currentColor"></path>
                                            </svg>
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Newsletter />
        </>
    );
};

export default AboutUs;
