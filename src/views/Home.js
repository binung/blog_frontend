import React from "react";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Blog from '../components/Blog';
import Newsletter from "../components/Newsletter";
const Home = () => {
    const categoryName = "Home";
    return (
        <>
            <Blog title={categoryName} />

            <Newsletter />
            
        </>
    );
};

export default Home;
