import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import Blog from '../components/Blog';
import Newsletter from "../components/Newsletter";
import LocationIcon from "../assets/img/icon/contact_icon01.svg";
import MailIcon from "../assets/img/icon/contact_icon02.svg";
import PhoneIcon from "../assets/img/icon/contact_icon03.svg";
import ContactImage from "../assets/img/images/contact_img.jpg";

const Contact = () => {
    // const categoryName = "Contact";
    return (
        <>
            <div class="breadcrumb-area">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="breadcrumb-content">
                                <nav aria-label="breadcrumb">
                                    <ol class="breadcrumb">
                                        <li class="breadcrumb-item"><a href="index.html">Home <span> <FontAwesomeIcon icon="fa-solid fa-angles-right" /></span></a></li>
                                        <li class="breadcrumb-item active" aria-current="page">Contact With Us</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section class="contact-area pt-80 pb-50">
                <div class="container">
                    <div class="contact-info-wrap">
                        <div class="row justify-content-center">
                            <div class="col-xl-4 col-lg-6">
                                <div class="contact-info-item">
                                    <div class="icon">
                                        <img src={LocationIcon} alt=""/>
                                    </div>
                                    <div class="content">
                                        <h5 class="title">Location</h5>
                                        <p>2118 Thornridge Cir. Syracuse</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-4 col-lg-6">
                                <div class="contact-info-item">
                                    <div class="icon">
                                        <img src={MailIcon} alt=""/>
                                    </div>
                                    <div class="content">
                                        <h5 class="title">E-mail</h5>
                                        <p>Info@ghoradimgmail.com</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-4 col-lg-6">
                                <div class="contact-info-item">
                                    <div class="icon">
                                        <img src={PhoneIcon} alt=""/>
                                    </div>
                                    <div class="content">
                                        <h5 class="title">Phone</h5>
                                        <p>+123 98598 000, +123 8855 2222</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row justify-content-center">
                        <div class="col-lg-6 col-md-10">
                            <div class="contact-img">
                                <img src={ContactImage} alt=""/>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="contact-form">
                                <h4 class="title">Drop Us a Message</h4>
                                <p>Have a question? Need help? Don't hesitate, drop us a line</p>
                                <form id="contact-form" action="https://themegenix.net/html/zaira/assets/mail.php" method="POST">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="form-grp">
                                                <input type="text" name="name" placeholder="Name*"/>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-grp">
                                                <input type="email" name="email" placeholder="E-mail*"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-grp">
                                        <input type="number" name="phone" placeholder="Phone*"/>
                                    </div>
                                    <div class="form-grp">
                                        <textarea name="message" placeholder="Message*"></textarea>
                                    </div>
                                    <button type="submit" class="btn btn-two">Submit Now</button>
                                </form>
                                <p class="ajax-response mb-0"></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Newsletter />
            
        </>
    );
};

export default Contact;
