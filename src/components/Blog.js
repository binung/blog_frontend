import React from "react";
// import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import post01 from "../assets/img/blog/weekly_post01.jpg";
import post02 from "../assets/img/blog/weekly_post02.jpg";
import post03 from "../assets/img/blog/weekly_post03.jpg";
import CryptoCurrency from "./CryptoCurrency";

const Blog = (props) => {

    return (
        <>
            <section className="blog-area pt-60 pb-60">
                <div className="container">
                    <div className="author-inner-wrap blog-inner-wrap">
                        <div className="row justify-content-center">
                            {/* <div className="col-8 order-0 order-xl-2"> */}
                                <div className="section-title-wrap mb-30">
                                    <div className="section-title">
                                        <h2 className="title">{props.title}</h2>
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
                                    <div className="section-title-line"></div>
                                </div>
                                <div className="category-content">
                                    <div className="row">
                                        <div className="col row">
                                            <div className="col">
                                                <a href="blog-details.html"><img src={post01} alt="" /></a>
                                            </div>
                                            <div className="horizontal-post-content-four col">
                                                <a href="blog.html" className="post-tag-four text-lines-4">Grursus Mal Suada Faci Lisis Orem Ipsum Dola Onsectetur Elittery Vestey Bulum The Ipsumm Ipsum That Dolocons Rsus Mal Suada And There Fadolorit To The Consectetur Elite.</a>
                                                <div className="blog-post-meta">
                                                    <ul className="list-wrap">
                                                        <li><FontAwesomeIcon icon="fa-regular fa-calendar" />27 August, 2024</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col row">
                                            <div className="col">
                                                <a href="blog-details.html"><img src={post02} alt="" /></a>
                                            </div>
                                            <div className="horizontal-post-content-four col">
                                                <a href="blog.html" className="post-tag-four text-lines-4">Grursus Mal Suada Faci Lisis Orem Ipsum Dola Onsectetur Elittery Vestey Bulum The Ipsumm Ipsum That Dolocons Rsus Mal Suada And There Fadolorit To The Consectetur Elite.</a>
                                                <div className="blog-post-meta">
                                                    <ul className="list-wrap">
                                                        <li><FontAwesomeIcon icon="fa-regular fa-calendar" />27 August, 2024</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col row">
                                            <div className="col">
                                                <a href="blog-details.html"><img src={post03} alt="" /></a>
                                            </div>
                                            <div className="horizontal-post-content-four col">
                                                <a href="blog.html" className="post-tag-four text-lines-4">Grursus Mal Suada Faci Lisis Orem Ipsum Dola Onsectetur Elittery Vestey Bulum The Ipsumm Ipsum That Dolocons Rsus Mal Suada And There Fadolorit To The Consectetur Elite.</a>
                                                <div className="blog-post-meta">
                                                    <ul className="list-wrap">
                                                        <li><FontAwesomeIcon icon="fa-regular fa-calendar" />27 August, 2024</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row mt-20">
                                        <div className="col row">
                                            <div className="col">
                                                <a href="blog-details.html"><img src={post01} alt="" /></a>
                                            </div>
                                            <div className="horizontal-post-content-four col">
                                                <a href="blog.html" className="post-tag-four text-lines-4">Grursus Mal Suada Faci Lisis Orem Ipsum Dola Onsectetur Elittery Vestey Bulum The Ipsumm Ipsum That Dolocons Rsus Mal Suada And There Fadolorit To The Consectetur Elite.</a>
                                                <div className="blog-post-meta">
                                                    <ul className="list-wrap">
                                                        <li><FontAwesomeIcon icon="fa-regular fa-calendar" />27 August, 2024</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col row">
                                            <div className="col">
                                                <a href="blog-details.html"><img src={post02} alt="" /></a>
                                            </div>
                                            <div className="horizontal-post-content-four col">
                                                <a href="blog.html" className="post-tag-four text-lines-4">Grursus Mal Suada Faci Lisis Orem Ipsum Dola Onsectetur Elittery Vestey Bulum The Ipsumm Ipsum That Dolocons Rsus Mal Suada And There Fadolorit To The Consectetur Elite.</a>
                                                <div className="blog-post-meta">
                                                    <ul className="list-wrap">
                                                        <li><FontAwesomeIcon icon="fa-regular fa-calendar" />27 August, 2024</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col row">
                                            <div className="col">
                                                <a href="blog-details.html"><img src={post03} alt="" /></a>
                                            </div>
                                            <div className="horizontal-post-content-four col">
                                                <a href="blog.html" className="post-tag-four text-lines-4">Grursus Mal Suada Faci Lisis Orem Ipsum Dola Onsectetur Elittery Vestey Bulum The Ipsumm Ipsum That Dolocons Rsus Mal Suada And There Fadolorit To The Consectetur Elite.</a>
                                                <div className="blog-post-meta">
                                                    <ul className="list-wrap">
                                                        <li><FontAwesomeIcon icon="fa-regular fa-calendar" />27 August, 2024</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row mt-20">
                                        <div className="col row">
                                            <div className="col">
                                                <a href="blog-details.html"><img src={post01} alt="" /></a>
                                            </div>
                                            <div className="horizontal-post-content-four col">
                                                <a href="blog.html" className="post-tag-four text-lines-4">Grursus Mal Suada Faci Lisis Orem Ipsum Dola Onsectetur Elittery Vestey Bulum The Ipsumm Ipsum That Dolocons Rsus Mal Suada And There Fadolorit To The Consectetur Elite.</a>
                                                <div className="blog-post-meta">
                                                    <ul className="list-wrap">
                                                        <li><FontAwesomeIcon icon="fa-regular fa-calendar" />27 August, 2024</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col row">
                                            <div className="col">
                                                <a href="blog-details.html"><img src={post02} alt="" /></a>
                                            </div>
                                            <div className="horizontal-post-content-four col">
                                                <a href="blog.html" className="post-tag-four text-lines-4">Grursus Mal Suada Faci Lisis Orem Ipsum Dola Onsectetur Elittery Vestey Bulum The Ipsumm Ipsum That Dolocons Rsus Mal Suada And There Fadolorit To The Consectetur Elite.</a>
                                                <div className="blog-post-meta">
                                                    <ul className="list-wrap">
                                                        <li><FontAwesomeIcon icon="fa-regular fa-calendar" />27 August, 2024</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col row">
                                            <div className="col">
                                                <a href="blog-details.html"><img src={post03} alt="" /></a>
                                            </div>
                                            <div className="horizontal-post-content-four col">
                                                <a href="blog.html" className="post-tag-four text-lines-4">Grursus Mal Suada Faci Lisis Orem Ipsum Dola Onsectetur Elittery Vestey Bulum The Ipsumm Ipsum That Dolocons Rsus Mal Suada And There Fadolorit To The Consectetur Elite.</a>
                                                <div className="blog-post-meta">
                                                    <ul className="list-wrap">
                                                        <li><FontAwesomeIcon icon="fa-regular fa-calendar" />27 August, 2024</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row mt-20">
                                        <div className="col row">
                                            <div className="col">
                                                <a href="blog-details.html"><img src={post01} alt="" /></a>
                                            </div>
                                            <div className="horizontal-post-content-four col">
                                                <a href="blog.html" className="post-tag-four text-lines-4">Grursus Mal Suada Faci Lisis Orem Ipsum Dola Onsectetur Elittery Vestey Bulum The Ipsumm Ipsum That Dolocons Rsus Mal Suada And There Fadolorit To The Consectetur Elite.</a>
                                                <div className="blog-post-meta">
                                                    <ul className="list-wrap">
                                                        <li><FontAwesomeIcon icon="fa-regular fa-calendar" />27 August, 2024</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col row">
                                            <div className="col">
                                                <a href="blog-details.html"><img src={post02} alt="" /></a>
                                            </div>
                                            <div className="horizontal-post-content-four col">
                                                <a href="blog.html" className="post-tag-four text-lines-4">Grursus Mal Suada Faci Lisis Orem Ipsum Dola Onsectetur Elittery Vestey Bulum The Ipsumm Ipsum That Dolocons Rsus Mal Suada And There Fadolorit To The Consectetur Elite.</a>
                                                <div className="blog-post-meta">
                                                    <ul className="list-wrap">
                                                        <li><FontAwesomeIcon icon="fa-regular fa-calendar" />27 August, 2024</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col row">
                                            <div className="col">
                                                <a href="blog-details.html"><img src={post03} alt="" /></a>
                                            </div>
                                            <div className="horizontal-post-content-four col">
                                                <a href="blog.html" className="post-tag-four text-lines-4">Grursus Mal Suada Faci Lisis Orem Ipsum Dola Onsectetur Elittery Vestey Bulum The Ipsumm Ipsum That Dolocons Rsus Mal Suada And There Fadolorit To The Consectetur Elite.</a>
                                                <div className="blog-post-meta">
                                                    <ul className="list-wrap">
                                                        <li><FontAwesomeIcon icon="fa-regular fa-calendar" />27 August, 2024</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* <div className="pagination-wrap mt-60">
                                    <nav aria-label="Page navigation example">
                                        <ul className="pagination list-wrap">
                                            <li className="page-item active"><a className="page-link" href="#">1</a></li>
                                            <li className="page-item"><a className="page-link" href="#">2</a></li>
                                            <li className="page-item"><a className="page-link" href="#">3</a></li>
                                            <li className="page-item"><a className="page-link" href="#">4</a></li>
                                            <li className="page-item"><a className="page-link" href="#">5</a></li>
                                        </ul>
                                    </nav>
                                </div> */}
                            {/* </div> */}
                            {/* <CryptoCurrency/> */}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Blog;
