import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import post02 from "../assets/img/blog/2.jpg";
import post03 from "../assets/img/blog/3.jpg";
import post04 from "../assets/img/blog/4.jpg";
import post05 from "../assets/img/blog/5.jpg";
import post06 from "../assets/img/blog/6.jpg";
import avatar from "../assets/img/images/avatar.png";

const BlogDetailComponent = () => {

    return (
        <>
            <section class="blog-details-area pt-60 pb-60">
                <div class="container">
                    <div class="author-inner-wrap">
                        <div class="row justify-content-center">
                            <div class="col-70">
                                <div class="blog-details-wrap">
                                    <div class="blog-details-content">
                                        <div class="blog-details-content-top">
                                            <a href="blog.html" class="post-tag">Appitizer</a>
                                            <h2 class="title">Emerging Global Trends in Leather and Fashion Nicely Photo Area Shooting With Hand Classic Style</h2>
                                            <div class="bd-content-inner">
                                                <div class="blog-post-meta">
                                                    <ul class="list-wrap">
                                                        <li><FontAwesomeIcon icon="fa-regular fa-user" />by<Link to="author.html">Admin</Link></li>
                                                        <li><FontAwesomeIcon icon="fa-regular fa-calendar" />27 August, 2024</li>
                                                        <li><FontAwesomeIcon icon="fa-regular fa-comment" /><Link to="blog-details.html">05 Comments</Link></li>
                                                        <li><FontAwesomeIcon icon="fa-regular fa-clock" />20 Mins</li>
                                                    </ul>
                                                </div>
                                                <div class="blog-details-social">
                                                    <ul class="list-wrap">
                                                        <li><Link to="/"><FontAwesomeIcon icon="fa-brands fa-facebook-f" /></Link></li>
                                                        <li><Link to="/"><FontAwesomeIcon icon="fa-brands fa-x-twitter" /></Link></li>
                                                        <li><Link to="/"><FontAwesomeIcon icon="fa-brands fa-instagram" /></Link></li>
                                                        <li><Link to="/"><FontAwesomeIcon icon="fa-brands fa-linkedin" /></Link></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="blog-details-thumb">
                                            <img src={post06} alt="" />
                                        </div>
                                        <p class="first-info">Browned butter and brown sugar caramelly oodness crispy edgesthick and soft centers andey melty little puddles of
                                            chocolate y first favorite.dolor sit amet, consectetuer adipiscing elitter Aenean commodo ligula eget dolor Aenean
                                            massa.</p>
                                        <p>Growned butter and brown sugar caramelly oodness crispy edgesthick and soft centers andey meltpuddles of chocolate y first favorite.dolor sit amet, consectetuer adipiscing elitter Aenean commodo ligula eget doloawr Aenean massa.m Ipsum has been the industry’s standard dummy.</p>

                                        {/* <blockquote>
                                            <span class="quoted"><FontAwesomeIcon icon="fa-solid fa-quote-left" /></span>
                                            <p>Grursus mal suada faci lisis orem ipsum dola onsectetur elittery Vestey  bulum the ipsumm ipsum that dolocons rsus mal suada and there fadolorit to the consectetur elite. </p>
                                            <cite>Thomas A. Edison</cite>
                                        </blockquote> */}
                                        <p>Growned butter and brown sugar caramelly oodness crispy edgesthick and soft centers andey meltpuddles offer chocolate y first favorite.dolor sit amet, consectetuer adipiscing elitter Aenean commodo ligula egette doloawr Aenean massa.m Ipsum has been the industry’s standard dummy.should never complain, complaining is a weak emotion, you got life, we breathing, we blessed. Surround yourself with angels.</p>
                                        <div class="blog-details-inner">
                                            <div class="row align-items-center">
                                                <div class="col-md-6">
                                                    <div class="blog-details-inner-img">
                                                        <img src={post02} alt="" />
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <div class="blog-details-inner-content">
                                                        <h3 class="title-two">Customer Engagement Marketing New Strategy for the Economy</h3>
                                                        <p>Pellentesque iaculis gravida nulla ac hendrerit Vestiabulum faucibus neque at lacus tristique eu ultrices area ipsum mollis Praesent pharetra semper purusPellentesque iaculis gravida nulla ac hendrerit.</p>
                                                        <ul class="list-wrap">
                                                            <li><FontAwesomeIcon icon="fa-solid fa-square-check" />Gutenberg Integration</li>
                                                            <li><FontAwesomeIcon icon="fa-solid fa-square-check" />Gutenberg Integration</li>
                                                            <li><FontAwesomeIcon icon="fa-solid fa-square-check" />Gutenberg Integration</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <p>Growned butter and brown sugar caramelly oodness crispy edgesthick and soft centers andey meltpuddles offer chocolate y first favorite.dolor sit amet, consectetuer adipiscing elitter Aenean commodo ligula egette doloawr Aenean massa.m Ipsum has been the industry’s standard dummy.should never complain, complaining is a weak emotion, you got life, we breathing, we blessed. Surround yourself with angels.</p>
                                        <div class="blog-details-video">
                                            <img src={post03} alt="" />
                                            <a href="https://www.youtube.com/watch?v=G_AEL-Xo5l8" class="paly-btn popup-video"><FontAwesomeIcon icon="fa-solid fa-play" /></a>
                                        </div>
                                        <p>Growned butter and brown sugar caramelly oodness crispy edgesthick and soft centers andey meltpuddles offer chocolate y first favorite.dolor sit amet, consectetuer adipiscing elitter Aenean commodo ligula egette doloawr Aenean massa.m Ipsum has been the industry’s standard dummy.should never complain, complaining is a weak emotion, you got life, we breathing, we blessed. Surround yourself with angels.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-30">

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default BlogDetailComponent;
