import { lazy } from "react";
import { Navigate } from "react-router-dom";

/****Layouts*****/
const FullLayout = lazy(() => import("../layouts/FullLayout.js"));

/***** Pages ****/

const Home = lazy(() => import("../views/Home.js"));
const Entertainment = lazy(() => import("../views/Entertainment.js"));
const Economics = lazy(() => import("../views/Economics.js"));
const Sports = lazy(() => import("../views/Sports.js"));
const Politics = lazy(() => import("../views/Politics.js"));
const BlogLayout3 = lazy(() => import("../views/BlogLayout3.js"));
const BlogsDetails = lazy(() => import("../views/BlogsDetailsPage.js"));
const Contact = lazy(() => import("../views/Contact.js"));
const About = lazy(() => import("../views/AboutUs.js"));

/*****Routes******/

const ThemeRoutes = [
  {
    path: "/",
    element: <FullLayout />,
    children: [
      { path: "/", element: <Navigate to="/home" /> },
      { path: "/home", exact: true, element: <Home /> },
      { path: "/entertainment", exact: true, element: <Entertainment /> },
      { path: "/economics", exact: true, element: <Economics /> },
      { path: "/sports", exact: true, element: <Sports /> },
      { path: "/politics", exact: true, element: <Politics /> },
      { path: "/bloglayout3", exact: true, element: <BlogLayout3 /> },
      { path: "/detail", exact: true, element: <BlogsDetails /> },
      { path: "/contact", exact: true, element: <Contact /> },
      { path: "/about", exact: true, element: <About /> },
    ],
  },
];

export default ThemeRoutes;
