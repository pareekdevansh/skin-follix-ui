import React, { lazy } from "react";

const Home = lazy(() => import("../containers/home"));
const Appointment = lazy(() => import("../containers/appointment"));
const About = lazy(() => import("../containers/about"));
const Services = lazy(() => import("../containers/services"));
const Testimonials = lazy(() => import("../containers/testimonials"));
const ContactUs = lazy(() => import("../containers/contact-us"));
const Login = lazy(() => import("../containers/login"));
const Register = lazy(() => import("../containers/register"));
const ForgotPassword = lazy(() => import("../containers/forgot-password"));
const ResetPassword = lazy(() => import("../containers/reset-password"));
const Team = lazy(() => import("../containers/team"));
const Blogs = lazy(() => import("../containers/blogs"));
const NotFound = lazy(()=> import("../containers/not-found"));


export const routes = [
    { path: "/", component: Home, name: "Home", visibleInNav: true },
    { path: "/home", component: Home, name: "Home", visibleInNav: true },
    { path: "/login", component: Login, name: "Login", visibleInNav: false },
    { path: "/register", component: Register, name: "Register", visibleInNav: false },
    { path: "/forgot-password", component: ForgotPassword, name: "Forgot Password", visibleInNav: false },
    { path: "/reset-password", component: ResetPassword, name: "Reset Password", visibleInNav: false },
    { path: "/book-an-appointment", component: Appointment, name: "Book Appointment", visibleInNav: true },
    { path: "/about-us", component: About, name: "About Us", visibleInNav: true },
    { path: "/services", component: Services, name: "Services", visibleInNav: true },
    { path: "/testimonials", component: Testimonials, name: "Testimonials", visibleInNav: true },
    { path: "/team", component: Team, name: "Our Team", visibleInNav: false },
    { path: "/blogs", component: Blogs, name: "Blogs", visibleInNav: false },
    { path: "/contact-us", component: ContactUs, name: "Contact Us", visibleInNav: true },
    {path : "*", component : NotFound, name : "404: Page Not Found", visibleInNav : true},
];
