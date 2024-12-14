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

export const routes = [
    {
        path: "/",
        component: Home,
        name: "Home",
        visibleToRouter: true,
        seo: {
            title: "Skin Follics - Expert Dermatology Care",
            description: "Skin Follics offers expert acne treatments, skin rejuvenation, laser services, and hair transplant solutions in Malviya Nagar, Delhi. Book your consultation today!",
            keywords: "dermatology, skin care, acne treatment, skincare clinic, Delhi, Malviya Nagar, Vipul Pareek, Skin Follics, hair transplant, skin rejuvenation",
        }
    },
    {
        path: "/home",
        component: Home,
        name: "Home",
        visibleToRouter: true,
        seo: {
            title: "Skin Follics - Home",
            description: "Welcome to Skin Follics, your trusted dermatology clinic in Malviya Nagar, Delhi.",
            keywords: "home, skin care clinic, expert dermatology, Skin Follics",
        }
    },
    {
        path: "/login",
        component: Login,
        name: "Login",
        visibleToRouter: false,
        seo: {
            title: "Login - Skin Follics",
            description: "Login to your Skin Follics account to book appointments or access your treatment history.",
            keywords: "login, user login, patient portal, Skin Follics account",
        }
    },
    {
        path: "/register",
        component: Register,
        name: "Register",
        visibleToRouter: false,
        seo: {
            title: "Register - Skin Follics",
            description: "Create an account on Skin Follics to book your first appointment or consult our experts.",
            keywords: "register, sign up, create account, patient registration, Skin Follics",
        }
    },
    {
        path: "/forgot-password",
        component: ForgotPassword,
        name: "Forgot Password",
        visibleToRouter: false,
        seo: {
            title: "Forgot Password - Skin Follics",
            description: "Forgot your password? Reset it quickly with Skin Follics and regain access to your account.",
            keywords: "forgot password, reset password, account recovery, Skin Follics",
        }
    },
    {
        path: "/reset-password",
        component: ResetPassword,
        name: "Reset Password",
        visibleToRouter: false,
        seo: {
            title: "Reset Password - Skin Follics",
            description: "Reset your password to access your Skin Follics account and continue booking appointments.",
            keywords: "reset password, password recovery, Skin Follics",
        }
    },
    {
        path: "/book-an-appointment",
        component: Appointment,
        name: "Book Appointment",
        visibleToRouter: true,
        seo: {
            title: "Book Appointment - Skin Follics",
            description: "Schedule an appointment at Skin Follics for expert acne treatments, hair transplants, and more.",
            keywords: "book appointment, schedule consultation, book skin treatment, dermatology appointment, Skin Follics",
        }
    },
    {
        path: "/about-us",
        component: About,
        name: "About Us",
        visibleToRouter: true,
        seo: {
            title: "About Us - Skin Follics",
            description: "Learn more about Skin Follics, our team of expert dermatologists, and our commitment to providing personalized skin care solutions.",
            keywords: "about Skin Follics, dermatologists, skincare experts, Skin Follics team, skin care clinic, Delhi",
        }
    },
    {
        path: "/treatments",
        component: Services,
        name: "Services",
        visibleToRouter: true,
        seo: {
            title: "Our Treatments - Skin Follics",
            description: "Explore the range of treatments available at Skin Follics, including acne care, skin rejuvenation, and hair transplant services.",
            keywords: "treatments, acne care, hair transplant, skin rejuvenation, dermatology treatments, skincare services",
        }
    },
    {
        path: "/testimonials",
        component: Testimonials,
        name: "Testimonials",
        visibleToRouter: true,
        seo: {
            title: "Testimonials - Skin Follics",
            description: "Read real-life experiences and testimonials from our satisfied patients who trusted Skin Follics for their dermatology needs.",
            keywords: "testimonials, patient reviews, customer feedback, skin care experiences, Skin Follics patients",
        }
    },
    {
        path: "/doctors",
        component: Team,
        name: "Doctors",
        visibleToRouter: true,
        seo: {
            title: "Our Doctors - Skin Follics",
            description: "Meet our team of experienced dermatologists at Skin Follics, dedicated to providing high-quality skin care.",
            keywords: "doctors, dermatologists, skincare experts, medical team, Skin Follics team",
        }
    },
    {
        path: "/gallery",
        component: Gallery,
        name: "Gallery",
        visibleToRouter: true,
        seo: {
            title: "Gallery - Skin Follics",
            description: "Explore the Skin Follics gallery and see the results of our advanced skin care treatments and services.",
            keywords: "gallery, skin care results, before and after, skin treatment photos, Skin Follics gallery",
        }
    },
    {
        path: "/blogs",
        component: Blogs,
        name: "Blogs",
        visibleToRouter: false,
        seo: {
            title: "Blogs - Skin Follics",
            description: "Read the latest articles and blogs on skin care, treatments, and expert tips from Skin Follics.",
            keywords: "blogs, skin care tips, skincare advice, dermatology articles, Skin Follics blog",
        }
    },
    {
        path: "/contact-us",
        component: ContactUs,
        name: "Contact Us",
        visibleToRouter: true,
        seo: {
            title: "Contact Us - Skin Follics",
            description: "Get in touch with Skin Follics for consultations, appointments, or to learn more about our dermatology services.",
            keywords: "contact Skin Follics, contact us, dermatology inquiries, appointment scheduling, skin care clinic",
        }
    },
    {
        path: "/privacy-policy",
        component: PrivacyPolicy,
        name: "Privacy Policy",
        visibleToRouter: true,
        seo: {
            title: "Privacy Policy - Skin Follics",
            description: "Read the privacy policy of Skin Follics, outlining how we protect your personal information and ensure your privacy.",
            keywords: "privacy policy, data protection, user privacy, Skin Follics privacy, personal information security",
        }
    },
    {
        path: "*",
        component: NotFound,
        name: "404: Page Not Found",
        visibleToRouter: true,
        seo: {
            title: "404: Page Not Found - Skin Follics",
            description: "Oops! The page you're looking for doesn't exist. Visit the homepage or contact us for assistance.",
            keywords: "404, page not found, error, missing page, Skin Follics",
        }
    },
];
