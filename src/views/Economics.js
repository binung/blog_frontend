import React from "react";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Blog from '../components/Blog';
import Newsletter from "../components/Newsletter";

const Economics = () => {
    const categoryName = "Economics";
    return (
        <>
            <Blog title={categoryName} />

            <Newsletter />
        </>
    );
};

export default Economics;
