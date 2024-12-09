import React from "react";
import "./home.css";
import { Box, Button, Card, Typography } from "@mui/material";
import TreatmentsList from "./treatments/TreatmentsSection";
import TestimonialsSection from "./testimonials/TestimonialsSection";
import AboutSection from "./about/AboutSection";
import ContactUsSection from "./contact-us/ContactUsSection";
import Carousel from "../../components/carousel/Carousel";
const heroUrls = [
	"assets/bg_skin_follix.jpg"
];
const carouselItems = [
	{ type: "image", src: "assets/bg_skin_follix.jpg", alt: "SkinFollics" },
];

const Home = () => {
	const handleSlideChange = (currentSlide) => {
		console.log(`Current Slide: ${currentSlide}`);
	};

	return (
		<Box>
			<Carousel carouselItems={carouselItems} autoplay={true} autoplayInterval={5000} />

			{/* <Box
				sx={{
					diplay: "flex",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "center",
					minWidth: "100%",
					height: '100%',
					overflow: "hidden",
				}}
			>
				<img
					src={heroUrls[0]}
					alt="Hero Image"
					style={{
						display: "block",
						width: "100%",
						height: "auto",
						objectFit: "cover",
						margin: "0 auto",
						padding: "0",
						boxSizing: "border-box"
					}}
				/>

			</Box> */}

			<Box sx={{ width: "100%", padding: "16px", backgroundColor: "#f4f4f4" }}>


				<TreatmentsList />

				{/* <TestimonialsSection /> */}

				<AboutSection />

				<ContactUsSection />


				{/* Floating Action Button */}
				{/* <Box sx={{ textAlign: "center", marginTop: "32px" }}>
				<Button
					variant="contained"
					color="primary"
					sx={{
						padding: "10px 20px",
						fontSize: "16px",
						borderRadius: "24px",
					}}
					onClick={() => (window.location.href = "/book-an-appointment")}
				>
					Book An Appointment
				</Button>
			</Box> */}
			</Box>
		</Box>

	);
};

export default Home;
