import React from "react";
// import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import post05 from "../assets/img/blog/5.jpg";
import post06 from "../assets/img/blog/6.jpg";
import post07 from "../assets/img/blog/7.jpg";


const RelatedPostsComponent = () => {

    return (
        <>
            <section class="today-post-area pt-50">
                <div class="container">
                    <div class="section-title-wrap">
                        <div class="section-title section-title-four">
                            <h2 class="title">Related Posts</h2>
                            <div class="section-title-line"></div>
                        </div>
                    </div>
                    <div class="today-post-wrap">
                        <div class="row gutter-40 justify-content-center">
                            <div class="col-lg-4 col-md-6">
                                <div class="banner-post-five banner-post-seven">
                                    <div class="banner-post-thumb-five">
                                        <a href="blog-details.html"><img src={post05} alt="" /></a>
                                    </div>
                                    <div class="banner-post-content-five">
                                        <a href="blog.html" class="post-tag-four">Sports</a>
                                        <h2 class="post-title"><a href="blog-details.html">Designing Better Error Messages UX</a></h2>
                                        <div class="blog-post-meta">
                                            <ul class="list-wrap">
                                                <li><FontAwesomeIcon icon="fa-regular fa-user" />by<a href="author.html">Admin</a></li>
                                                <li><FontAwesomeIcon icon="fa-regular fa-calendar" />27 August, 2024</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6">
                                <div class="banner-post-five banner-post-seven">
                                    <div class="banner-post-thumb-five">
                                        <a href="blog-details.html"><img src={post06} alt="" /></a>
                                        <a href="https://www.youtube.com/watch?v=G_AEL-Xo5l8" class="paly-btn popup-video"><FontAwesomeIcon icon="fa-solid fa-play" /></a>
                                    </div>
                                    <div class="banner-post-content-five">
                                        <a href="blog.html" class="post-tag-four">Tech</a>
                                        <h2 class="post-title"><a href="blog-details.html">Implementing A Reset Password Feature With Dynamic Routes</a></h2>
                                        <div class="blog-post-meta">
                                            <ul class="list-wrap">
                                                <li><FontAwesomeIcon icon="fa-regular fa-user" />by<a href="author.html">Admin</a></li>
                                                <li><FontAwesomeIcon icon="fa-regular fa-calendar" />27 August, 2024</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6">
                                <div class="banner-post-five banner-post-seven">
                                    <div class="banner-post-thumb-five">
                                        <a href="blog-details.html"><img src={post07} alt="" /></a>
                                    </div>
                                    <div class="banner-post-content-five">
                                        <a href="blog.html" class="post-tag-four">Politics</a>
                                        <h2 class="post-title"><a href="blog-details.html">An Introduction To Context Propagation In JavaScript</a></h2>
                                        <div class="blog-post-meta">
                                            <ul class="list-wrap">
                                                <li><FontAwesomeIcon icon="fa-regular fa-user" />by<a href="author.html">Admin</a></li>
                                                <li><FontAwesomeIcon icon="fa-regular fa-calendar" />27 August, 2024</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default RelatedPostsComponent;
