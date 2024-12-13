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
const NotFound = lazy(() => import("../containers/not-found"));
const PrivacyPolicy = lazy(() => import("../containers/privacy-policy"));
const Gallery = lazy(() => import("../containers/gallery"));
// for now, visible in Nav, routerVisibility flag is used to hide the route from Router
export const routes = [
    { path: "/", component: Home, name: "Home", visibleToRouter: true },
    { path: "/home", component: Home, name: "Home", visibleToRouter: true },
    { path: "/login", component: Login, name: "Login", visibleToRouter: false },
    { path: "/register", component: Register, name: "Register", visibleToRouter: false },
    { path: "/forgot-password", component: ForgotPassword, name: "Forgot Password", visibleToRouter: false },
    { path: "/reset-password", component: ResetPassword, name: "Reset Password", visibleToRouter: false },
    { path: "/book-an-appointment", component: Appointment, name: "Book Appointment", visibleToRouter: true },
    { path: "/about-us", component: About, name: "About Us", visibleToRouter: true },
    { path: "/treatments", component: Services, name: "Services", visibleToRouter: true },
    { path: "/testimonials", component: Testimonials, name: "Testimonials", visibleToRouter: true },
    { path: "/doctors", component: Team, name: "Doctors", visibleToRouter: true },
    { path: "/gallery", component: Gallery, name: "Gallery", visibleToRouter: true },
    { path: "/blogs", component: Blogs, name: "Blogs", visibleToRouter: false },
    { path: "/contact-us", component: ContactUs, name: "Contact Us", visibleToRouter: true },
    { path: "/privacy-policy", component: PrivacyPolicy, name: "Privacy Policy", visibleToRouter: true },
    { path: "*", component: NotFound, name: "404: Page Not Found", visibleToRouter: true },
];
