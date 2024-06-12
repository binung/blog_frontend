import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import logo from "../assets/img/logo/Today_Talks_Logo2.png";

const Footer = () => {

    return (
        <footer>
            <div className="footer-area">
                <div className="footer-top">
                    <div className="container">
                        <div className="row">
                            {/* <div className="col-lg-3 col-md-7">
                                <div className="footer-widget">
                                    <div className="fw-logo">
                                        <a href="index.html"><img src={logo} alt="" /></a>
                                    </div>
                                    <div className="footer-content">
                                        <p>Browned butter and brown sugar caramelly goodness, crispy edges thick and soft centers and melty little puddles of chocolate.</p>
                                    </div>
                                </div>
                            </div> */}
                            <div className="col-3">
                                <div className="footer-widget mb-30">
                                    <div className="footer-title">
                                        <h2 className="title text-lines-1">TodayTalks in Other Languages</h2>
                                    </div>
                                    <div className="footer-title-line"></div>
                                    <div className="footer-link-wrap mt-20">
                                        <ul className="list-wrap">
                                            <li><a href="about.html">English</a></li>
                                            <li><a href="contact.html">বাংলা </a></li>
                                            <li><a href="contact.html">ગુજરાતી </a></li>
                                            <li><a href="contact.html">हिन्दी </a></li>
                                            <li><a href="contact.html">ಕನ್ನಡ </a></li>
                                            <li><a href="contact.html">മലയാളം </a></li>
                                            <li><a href="contact.html">తెలుగు </a></li>
                                            <li><a href="contact.html">ଓଡ଼ିଆ </a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="col-6">
                                
                                <div className="footer-widget mb-30">
                                    <div className="footer-title">
                                        <h2 className="title">Get Help</h2>
                                    </div>
                                    <div className="footer-title-line"></div>
                                    <div className="footer-link-wrap mt-20 row">
                                        <ul className="list-wrap col">
                                            <li><a href="about.html">Contact & Faq</a></li>
                                            <li><a href="contact.html">Oders & Returns</a></li>
                                            <li><a href="contact.html">Gift Cards</a></li>
                                            <li><a href="contact.html">Register</a></li>
                                            <li><a href="contact.html">Catalog</a></li>
                                        </ul>
                                        <ul className="list-wrap col">
                                            <li><a href="about.html">Contact & Faq</a></li>
                                            <li><a href="contact.html">Oders & Returns</a></li>
                                            <li><a href="contact.html">Gift Cards</a></li>
                                            <li><a href="contact.html">Register</a></li>
                                            <li><a href="contact.html">Catalog</a></li>
                                            <li><a href="contact.html">മലയാളം </a></li>
                                            <li><a href="contact.html">తెలుగు </a></li>
                                            <li><a href="contact.html">ଓଡ଼ିଆ </a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="col-3">
                                <div className="footer-widget mb-30">
                                    <div className="footer-title">
                                        <h2 className="title text-lines-1">Follow us On</h2>
                                    </div>
                                    <div className="footer-title-line"></div>
                                    <div className="footer-link-wrap mt-20">
                                        <ul className="list-wrap d-flex" style={{gap: "20px"}}>
                                            <li><Link to="/"><FontAwesomeIcon icon="fa-brands fa-facebook-f" fontSize={"30px"} /></Link></li>
                                            <li><Link to="/"><FontAwesomeIcon icon="fa-brands fa-x-twitter" fontSize={"30px"} /></Link></li>
                                            <li><Link to="/"><FontAwesomeIcon icon="fa-brands fa-youtube" fontSize={"30px"} /></Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <div className="container">
                        <div className="footer-bottom-menu">
                            <ul className="list-wrap">
                                <li><Link to="/contact">About Us |</Link></li>
                                <li><Link to="/contact">Terms of Service |</Link></li>
                                <li><Link to="/contact">Privacy Policy |</Link></li>
                                <li><Link to="/contact">Apps |</Link></li>
                                <li><Link to="/contact">RSS |</Link></li>
                                <li><Link to="/contact">Advertise with Us |</Link></li>
                                <li><Link to="/contact">Contact Us |</Link></li>
                                <li><Link to="/contact">Feedback |</Link></li>
                                <li><Link to="/contact">Sitemap |</Link></li>
                                <li><Link to="/contact">Cookie Policy |</Link></li>
                                <li><Link to="/contact">Code of Business |</Link></li>
                                <li><Link to="/contact">Conduct |</Link></li>
                                <li><Link to="/contact">Grievance</Link></li>
                            </ul>
                            <div className="mt-20">
                                <p>© 2024 TodayTalks Digitech Media Pvt.Ltd. All Rights Reserved</p>
                                <p>The "TodayTalks" word mark and logo are owned by TodayTalks Digitech Media Pvt.Ltd.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
