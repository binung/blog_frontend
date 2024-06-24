import React, {useEffect} from "react";
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Blog from '../components/Blog';
import Newsletter from "../components/Newsletter";
import CryptoCurrency from "../components/CryptoCurrency";

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
import Entertainment from "./Entertainment";

const Home = (props) => {
    const categoryName = "Home";

    const getApiTest = () => {
        // /* fetch API in action */
        fetch('/api/auth/login')
        .then(response => {
            // return response.json();
            console.log(response);
        })
    };

    useEffect(() => {
        getApiTest();
      }, []); 
    return (
        <>


            {/* <!-- spotlight-post-area --> */}
            <section class="spotlight-post-area pt-70 pb-60">
                <div class="spotlight-post-inner-wrap">
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-70">
                                <div class="spotlight-post-item-wrap">
                                    <div class="section-title-wrap-three mb-20">
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
                                        <div className="view-all-btn">
                                            <a href="blog.html" className="link-btn">View All
                                                <span className="svg-icon">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10" fill="none">
                                                        <path d="M1.07692 10L0 8.92308L7.38462 1.53846H0.769231V0H10V9.23077H8.46154V2.61538L1.07692 10Z" fill="currentColor" />
                                                        <path d="M1.07692 10L0 8.92308L7.38462 1.53846H0.769231V0H10V9.23077H8.46154V2.61538L1.07692 10Z" fill="currentColor" />
                                                    </svg>
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-57">
                                            <div class="spotlight-post big-post">
                                                <div class="spotlight-post-thumb">
                                                    <a href="blog-details.html"><img src={wpost02} alt="" /></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-43">
                                            <div class="weekly-post-content">
                                                <a href="blog.html" class="post-tag">fIGHTER</a>
                                                <h2 class="post-title"><a href="blog-details.html">The Growing Need For Effective Password Management</a></h2>
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
                                        <div className="pagination-wrap mt-40">
                                            <nav aria-label="Page navigation example">
                                                <ul className="pagination list-wrap">
                                                    <li className="page-item active"><a className="page-link" href="#">1</a></li>
                                                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                                                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                                                    <li className="page-item"><a className="page-link" href="#">4</a></li>
                                                    <li className="page-item"><a className="page-link" href="#">5</a></li>
                                                </ul>
                                            </nav>
                                        </div>
                                    </div>
                                </div>
                                <div class="spotlight-post-item-wrap">
                                <Blog title={'Sports'}/>
                                <Blog title={'Entertainment'}/>
                                </div>
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
                                <div className="view-all-btn">
                                    <a href="blog.html" className="link-btn">View All
                                        <span className="svg-icon">
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
            <Newsletter />

        </>
    );
};

export default Home;
