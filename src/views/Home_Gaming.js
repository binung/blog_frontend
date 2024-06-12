import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Blog from '../components/Blog';
import Newsletter from "../components/Newsletter";

import wpost01 from "../assets/img/blog/weekly_post01.jpg";
import wpost02 from "../assets/img/blog/weekly_post02.jpg";
import wpost03 from "../assets/img/blog/weekly_post03.jpg";
import wpost04 from "../assets/img/blog/weekly_post04.jpg";
import vpost01 from "../assets/img/blog/video_post01.jpg";
import vpost02 from "../assets/img/blog/video_post02.jpg";
import vpost03 from "../assets/img/blog/video_post03.jpg";
import vpost04 from "../assets/img/blog/video_post04.jpg";
import ca01 from "../assets/img/blog/g_categories_img01.png";
import ca02 from "../assets/img/blog/g_categories_img02.png";
import ca03 from "../assets/img/blog/g_categories_img03.png";
import ca04 from "../assets/img/blog/g_categories_img04.png";
import ca05 from "../assets/img/blog/g_categories_img05.png";
import ca06 from "../assets/img/blog/g_categories_img06.png";
import CryptoCurrency from "../components/CryptoCurrency";

const Home = () => {
    const categoryName = "Home";
    return (
        <>


            {/* <!-- spotlight-post-area --> */}
            <section class="spotlight-post-area pt-70 pb-60">
                <div class="spotlight-post-inner-wrap">
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-70">
                                <div class="spotlight-post-item-wrap">
                                    <div class="section-title-wrap-three mb-30">
                                        <div class="section-title-three">
                                            <h6 class="title">Today’s Spotlight
                                                <span class="section-title-svg">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 246 40" fill="none" preserveAspectRatio="none">
                                                        <path d="M10.1448 2.85061C10.6524 1.15867 12.2097 0 13.9761 0H241.624C244.303 0 246.225 2.58294 245.455 5.14939L235.855 37.1494C235.348 38.8413 233.79 40 232.024 40H4.37612C1.69667 40 -0.225117 37.4171 0.544817 34.8506L10.1448 2.85061Z" fill="currentcolor" />
                                                    </svg>
                                                </span>
                                            </h6>
                                            <div class="section-title-line-three"></div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-57">
                                            <div class="spotlight-post big-post">
                                                <div class="spotlight-post-thumb">
                                                    <a href="blog-details.html"><img src={wpost02} alt="" /></a>
                                                </div>
                                                <div class="spotlight-post-content">
                                                    <a href="blog.html" class="post-tag-two">Racing</a>
                                                    <h2 class="post-title bold-underline"><a href="blog-details.html">How To Build A Magazine Layout With CSS Grid Areas</a></h2>
                                                    <div class="blog-post-meta">
                                                        <ul class="list-wrap">
                                                            <li><i class="flaticon-user"></i>by<a href="author.html">Admin</a></li>
                                                            <li><i class="flaticon-calendar"></i>27 August, 2024</li>
                                                            <li><i class="flaticon-history"></i>20 Mins</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-43">
                                            <div class="spotlight-post small-post">
                                                <div class="spotlight-post-thumb">
                                                    <a href="blog-details.html"><img src={wpost01} alt="" /></a>
                                                </div>
                                                <div class="spotlight-post-content">
                                                    <a href="blog.html" class="post-tag-two">Action</a>
                                                    <h2 class="post-title"><a href="blog-details.html">Fortnite Ratings are Skyrocketing</a></h2>
                                                    <div class="blog-post-meta">
                                                        <ul class="list-wrap">
                                                            <li><i class="flaticon-calendar"></i>27 August, 2024</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="spotlight-post small-post">
                                                <div class="spotlight-post-thumb">
                                                    <a href="blog-details.html"><img src={wpost03} alt="" /></a>
                                                </div>
                                                <div class="spotlight-post-content">
                                                    <a href="blog.html" class="post-tag-two">Fighter</a>
                                                    <h2 class="post-title"><a href="blog-details.html">Everything You Need To Know About</a></h2>
                                                    <div class="blog-post-meta">
                                                        <ul class="list-wrap">
                                                            <li><i class="flaticon-calendar"></i>27 August, 2024</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="spotlight-post small-post">
                                                <div class="spotlight-post-thumb">
                                                    <a href="blog-details.html"><img src={wpost04} alt="" /></a>
                                                </div>
                                                <div class="spotlight-post-content">
                                                    <a href="blog.html" class="post-tag-two">Gaming</a>
                                                    <h2 class="post-title"><a href="blog-details.html">We Can’t Wait to Try
                                                        This Gaming Area</a></h2>
                                                    <div class="blog-post-meta">
                                                        <ul class="list-wrap">
                                                            <li><i class="flaticon-calendar"></i>27 August, 2024</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <div class="popular-post-item-wrap">
                                    <div class="section-title-wrap-three mb-30">
                                        <div class="section-title-three">
                                            <h6 class="title">Our Popular News
                                                <span class="section-title-svg">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 246 40" fill="none" preserveAspectRatio="none">
                                                        <path d="M10.1448 2.85061C10.6524 1.15867 12.2097 0 13.9761 0H241.624C244.303 0 246.225 2.58294 245.455 5.14939L235.855 37.1494C235.348 38.8413 233.79 40 232.024 40H4.37612C1.69667 40 -0.225117 37.4171 0.544817 34.8506L10.1448 2.85061Z" fill="currentcolor" />
                                                    </svg>
                                                </span>
                                            </h6>
                                            <div class="section-title-line-three"></div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-lg-6">
                                            <div class="ta-overlay-post-two">
                                                <div class="overlay-post-thumb-two">
                                                    <a href="blog-details.html"><img src={ca01} alt="" /></a>
                                                </div>
                                                <div class="overlay-post-content-two">
                                                    <a href="blog.html" class="post-tag post-tag-three">Racing</a>
                                                    <h2 class="post-title"><a href="blog-details.html">Racing Games Browned Butte roadert Cookies Daily Breakfast</a></h2>
                                                    <div class="blog-post-meta white-blog-meta">
                                                        <ul class="list-wrap">
                                                            <li><i class="flaticon-calendar"></i>27 August, 2024</li>
                                                            <li><i class="flaticon-history"></i>20 Mins</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-6">
                                            <div class="ta-overlay-post-two">
                                                <div class="overlay-post-thumb-two">
                                                    <a href="blog-details.html"><img src={ca01} alt="" /></a>
                                                </div>
                                                <div class="overlay-post-content-two">
                                                    <a href="blog.html" class="post-tag post-tag-three">Action</a>
                                                    <h2 class="post-title"><a href="blog-details.html">How To Host A WordPress Site On Amazon Lightsail</a></h2>
                                                    <div class="blog-post-meta white-blog-meta">
                                                        <ul class="list-wrap">
                                                            <li><i class="flaticon-calendar"></i>27 August, 2024</li>
                                                            <li><i class="flaticon-history"></i>20 Mins</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-4">
                                            <div class="ta-overlay-post-two">
                                                <div class="overlay-post-thumb-two">
                                                    <a href="blog-details.html"><img src={ca02} alt="" /></a>
                                                </div>
                                                <div class="overlay-post-content-two">
                                                    <a href="blog.html" class="post-tag post-tag-three">Fighter</a>
                                                    <h2 class="post-title"><a href="blog-details.html">The Magic Of February 2024 Wallpapers</a></h2>
                                                    <div class="blog-post-meta white-blog-meta">
                                                        <ul class="list-wrap">
                                                            <li><i class="flaticon-calendar"></i>27 August, 2024</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-4">
                                            <div class="ta-overlay-post-two">
                                                <div class="overlay-post-thumb-two">
                                                    <a href="blog-details.html"><img src={ca03} alt="" /></a>
                                                </div>
                                                <div class="overlay-post-content-two">
                                                    <a href="blog.html" class="post-tag post-tag-three">Animation</a>
                                                    <h2 class="post-title"><a href="blog-details.html">Customization And Animation</a></h2>
                                                    <div class="blog-post-meta white-blog-meta">
                                                        <ul class="list-wrap">
                                                            <li><i class="flaticon-calendar"></i>27 August, 2024</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-4">
                                            <div class="ta-overlay-post-two">
                                                <div class="overlay-post-thumb-two">
                                                    <a href="blog-details.html"><img src={ca04} alt="" /></a>
                                                </div>
                                                <div class="overlay-post-content-two">
                                                    <a href="blog.html" class="post-tag post-tag-three">Story</a>
                                                    <h2 class="post-title"><a href="blog-details.html">Better ROI For Your Digital Products</a></h2>
                                                    <div class="blog-post-meta white-blog-meta">
                                                        <ul class="list-wrap">
                                                            <li><i class="flaticon-calendar"></i>27 August, 2024</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}
                            </div>
                            <div class="col-30">
                                <CryptoCurrency/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="video-post-area video-post-bg" data-background="assets/img/bg/video_post_bg.jpg">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <div class="section-title-wrap-three mb-40">
                                <div class="section-title-three black-title">
                                    <h6 class="title">Trending Gaming News
                                        <span class="section-title-svg">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 246 40" fill="none" preserveAspectRatio="none">
                                                <path d="M10.1448 2.85061C10.6524 1.15867 12.2097 0 13.9761 0H241.624C244.303 0 246.225 2.58294 245.455 5.14939L235.855 37.1494C235.348 38.8413 233.79 40 232.024 40H4.37612C1.69667 40 -0.225117 37.4171 0.544817 34.8506L10.1448 2.85061Z" fill="currentcolor" />
                                            </svg>
                                        </span>
                                    </h6>
                                    <div class="section-title-line-three"></div>
                                </div>
                                <div class="view-all-btn view-all-btn-two">
                                    <a href="blog.html" class="link-btn">View All
                                        <span class="svg-icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10" fill="none">
                                                <path d="M1.07692 10L0 8.92308L7.38462 1.53846H0.769231V0H10V9.23077H8.46154V2.61538L1.07692 10Z" fill="currentColor" />
                                                <path d="M1.07692 10L0 8.92308L7.38462 1.53846H0.769231V0H10V9.23077H8.46154V2.61538L1.07692 10Z" fill="currentColor" />
                                            </svg>
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="video-post-item big-post">
                                <div class="video-post-thumb">
                                    <a href="blog-details.html"><img src={vpost04} alt="" /></a>
                                    <a href="https://www.youtube.com/watch?v=1iIZeIy7TqM" class="play-btn popup-video"><FontAwesomeIcon icon="fa-solid fa-play" /></a>
                                </div>
                                <div class="video-post-content">
                                    <a href="blog.html" class="post-tag post-tag-three">Fighter</a>
                                    <h2 class="post-title bold-underline"><a href="blog-details.html">Exciting New Browned Chocolate Gaming Cookies Daily Breakfast</a></h2>
                                    <div class="blog-post-meta white-blog-meta">
                                        <ul class="list-wrap">
                                            <li><i class="flaticon-user"></i>by<a href="author.html">Admin</a></li>
                                            <li><i class="flaticon-calendar"></i>27 August, 2024</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="video-small-post-wrap">
                                <div class="video-post-item small-post">
                                    <div class="video-post-thumb">
                                        <a href="blog-details.html"><img src={vpost02} alt="" /></a>
                                        <a href="https://www.youtube.com/watch?v=1iIZeIy7TqM" class="play-btn popup-video"><FontAwesomeIcon icon="fa-solid fa-play" /></a>
                                    </div>
                                    <div class="video-post-content">
                                        <a href="blog.html" class="post-tag post-tag-three">Animation</a>
                                        <h2 class="post-title"><a href="blog-details.html">A Guide To Getting Data Visualization Right</a></h2>
                                        <div class="blog-post-meta white-blog-meta">
                                            <ul class="list-wrap">
                                                <li><i class="flaticon-user"></i>by<a href="author.html">Admin</a></li>
                                                <li><i class="flaticon-calendar"></i>27 August, 2024</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="video-post-item small-post">
                                    <div class="video-post-thumb">
                                        <a href="blog-details.html"><img src={vpost03} alt="" /></a>
                                        <a href="https://www.youtube.com/watch?v=1iIZeIy7TqM" class="play-btn popup-video"><FontAwesomeIcon icon="fa-solid fa-play" /></a>
                                    </div>
                                    <div class="video-post-content">
                                        <a href="blog.html" class="post-tag post-tag-three">Action</a>
                                        <h2 class="post-title"><a href="blog-details.html">Fluid Typography: Predicting A Problem With Your User’s Zoom-In</a></h2>
                                        <div class="blog-post-meta white-blog-meta">
                                            <ul class="list-wrap">
                                                <li><i class="flaticon-user"></i>by<a href="author.html">Admin</a></li>
                                                <li><i class="flaticon-calendar"></i>27 August, 2024</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="video-post-item small-post">
                                    <div class="video-post-thumb">
                                        <a href="blog-details.html"><img src={vpost01} alt="" /></a>
                                        <a href="https://www.youtube.com/watch?v=1iIZeIy7TqM" class="play-btn popup-video"><FontAwesomeIcon icon="fa-solid fa-play" /></a>
                                    </div>
                                    <div class="video-post-content">
                                        <a href="blog.html" class="post-tag post-tag-three">Racing</a>
                                        <h2 class="post-title"><a href="blog-details.html">Deploying CSS Logical Properties On Web Apps</a></h2>
                                        <div class="blog-post-meta white-blog-meta">
                                            <ul class="list-wrap">
                                                <li><i class="flaticon-user"></i>by<a href="author.html">Admin</a></li>
                                                <li><i class="flaticon-calendar"></i>27 August, 2024</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="weekly-post-area pt-80 pb-80">
                <div class="container">
                    <div class="weekly-post-inner-wrap">
                        <div class="row justify-content-center">
                            <div class="col-70">
                                <div class="section-title-wrap-three mb-40">
                                    <div class="section-title-three">
                                        <h6 class="title">Weekly Best News
                                            <span class="section-title-svg">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 246 40" fill="none" preserveAspectRatio="none">
                                                    <path d="M10.1448 2.85061C10.6524 1.15867 12.2097 0 13.9761 0H241.624C244.303 0 246.225 2.58294 245.455 5.14939L235.855 37.1494C235.348 38.8413 233.79 40 232.024 40H4.37612C1.69667 40 -0.225117 37.4171 0.544817 34.8506L10.1448 2.85061Z" fill="currentcolor" />
                                                </svg>
                                            </span>
                                        </h6>
                                        <div class="section-title-line-three"></div>
                                    </div>
                                </div>
                                <div class="weekly-post-item-wrap">
                                    <div class="weekly-post-item">
                                        <div class="weekly-post-thumb">
                                            <a href="blog-details.html"><img src={wpost01} alt="" /></a>
                                        </div>
                                        <div class="weekly-post-content">
                                            <a href="blog.html" class="post-tag">Fighter</a>
                                            <h2 class="post-title"><a href="blog-details.html">Taking The Stress Out Of Design System Management</a></h2>
                                            <div class="blog-post-meta">
                                                <ul class="list-wrap">
                                                    <li><i class="flaticon-calendar"></i>27 August, 2024</li>
                                                    <li><i class="flaticon-history"></i>20 Mins</li>
                                                </ul>
                                            </div>
                                            <p>Browned butter and brown sugar caramelly oodness crispy edgesthick and soft centers and melty little puddles of chocolate y first favorite.</p>
                                            <div class="view-all-btn">
                                                <a href="blog-details.html" class="link-btn">Read More
                                                    <span class="svg-icon">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10" fill="none">
                                                            <path d="M1.07692 10L0 8.92308L7.38462 1.53846H0.769231V0H10V9.23077H8.46154V2.61538L1.07692 10Z" fill="currentColor" />
                                                            <path d="M1.07692 10L0 8.92308L7.38462 1.53846H0.769231V0H10V9.23077H8.46154V2.61538L1.07692 10Z" fill="currentColor" />
                                                        </svg>
                                                    </span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="weekly-post-item">
                                        <div class="weekly-post-thumb">
                                            <a href="blog-details.html"><img src={wpost02} alt="" /></a>
                                        </div>
                                        <div class="weekly-post-content">
                                            <a href="blog.html" class="post-tag">Racing</a>
                                            <h2 class="post-title"><a href="blog-details.html">Boosting Productivity For Designers With Efficient Tools</a></h2>
                                            <div class="blog-post-meta">
                                                <ul class="list-wrap">
                                                    <li><i class="flaticon-calendar"></i>27 August, 2024</li>
                                                    <li><i class="flaticon-history"></i>20 Mins</li>
                                                </ul>
                                            </div>
                                            <p>Browned butter and brown sugar caramelly oodness crispy edgesthick and soft centers and melty little puddles of chocolate y first favorite.</p>
                                            <div class="view-all-btn">
                                                <a href="blog-details.html" class="link-btn">Read More
                                                    <span class="svg-icon">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10" fill="none">
                                                            <path d="M1.07692 10L0 8.92308L7.38462 1.53846H0.769231V0H10V9.23077H8.46154V2.61538L1.07692 10Z" fill="currentColor" />
                                                            <path d="M1.07692 10L0 8.92308L7.38462 1.53846H0.769231V0H10V9.23077H8.46154V2.61538L1.07692 10Z" fill="currentColor" />
                                                        </svg>
                                                    </span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="weekly-post-item">
                                        <div class="weekly-post-thumb">
                                            <a href="blog-details.html"><img src={wpost03} alt="" /></a>
                                        </div>
                                        <div class="weekly-post-content">
                                            <a href="blog.html" class="post-tag">Action</a>
                                            <h2 class="post-title"><a href="blog-details.html">How To Prioritize User Security When Collecting Offline Data</a></h2>
                                            <div class="blog-post-meta">
                                                <ul class="list-wrap">
                                                    <li><i class="flaticon-calendar"></i>27 August, 2024</li>
                                                    <li><i class="flaticon-history"></i>20 Mins</li>
                                                </ul>
                                            </div>
                                            <p>Browned butter and brown sugar caramelly oodness crispy edgesthick and soft centers and melty little puddles of chocolate y first favorite.</p>
                                            <div class="view-all-btn">
                                                <a href="blog-details.html" class="link-btn">Read More
                                                    <span class="svg-icon">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10" fill="none">
                                                            <path d="M1.07692 10L0 8.92308L7.38462 1.53846H0.769231V0H10V9.23077H8.46154V2.61538L1.07692 10Z" fill="currentColor" />
                                                            <path d="M1.07692 10L0 8.92308L7.38462 1.53846H0.769231V0H10V9.23077H8.46154V2.61538L1.07692 10Z" fill="currentColor" />
                                                        </svg>
                                                    </span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="weekly-post-item">
                                        <div class="weekly-post-thumb">
                                            <a href="blog-details.html"><img src={wpost04} alt="" /></a>
                                        </div>
                                        <div class="weekly-post-content">
                                            <a href="blog.html" class="post-tag">Animation</a>
                                            <h2 class="post-title"><a href="blog-details.html">The Anatomy Of Themed Design System Components</a></h2>
                                            <div class="blog-post-meta">
                                                <ul class="list-wrap">
                                                    <li><i class="flaticon-calendar"></i>27 August, 2024</li>
                                                    <li><i class="flaticon-history"></i>20 Mins</li>
                                                </ul>
                                            </div>
                                            <p>Browned butter and brown sugar caramelly oodness crispy edgesthick and soft centers and melty little puddles of chocolate y first favorite.</p>
                                            <div class="view-all-btn">
                                                <a href="blog-details.html" class="link-btn">Read More
                                                    <span class="svg-icon">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10" fill="none">
                                                            <path d="M1.07692 10L0 8.92308L7.38462 1.53846H0.769231V0H10V9.23077H8.46154V2.61538L1.07692 10Z" fill="currentColor" />
                                                            <path d="M1.07692 10L0 8.92308L7.38462 1.53846H0.769231V0H10V9.23077H8.46154V2.61538L1.07692 10Z" fill="currentColor" />
                                                        </svg>
                                                    </span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-30">
                                
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Newsletter />

        </>
    );
};

export default Home;
