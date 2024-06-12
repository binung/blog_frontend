import React from "react";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Blog from '../components/Blog';
import Newsletter from "../components/Newsletter";
const Entertainment = () => {
    const categoryName = "Entertainment";
    return (
        <>
            <Blog title={categoryName} />

            <Newsletter />
        </>
    );
};

export default Entertainment;
