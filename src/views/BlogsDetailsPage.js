import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from "react-router-dom";
import BlogDetailComponent from "../components/BlogDetailComponent";
import RelatedPostsComponent from "../components/RelatedPostsComponent";

const BlogsDetails = () => {
    return (
        <>
            {/* <div class="breadcrumb-area">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="breadcrumb-content">
                                <nav aria-label="breadcrumb">
                                    <ol class="breadcrumb">
                                        <li class="breadcrumb-item"><Link to="/">Home<span> <FontAwesomeIcon icon="fa-solid fa-angles-right" /></span></Link></li>
                                        <li class="breadcrumb-item" aria-current="page"><Link to="/blog">Blogs <span> <FontAwesomeIcon icon="fa-solid fa-angles-right" /></span></Link></li>
                                        <li class="breadcrumb-item active" aria-current="page">Smashing Podcast Episode 58 With Debbie What Is CX Design?</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}

            <BlogDetailComponent />

            <RelatedPostsComponent />
        </>
    );
};

export default BlogsDetails;
