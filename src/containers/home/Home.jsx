import React from "react";
import "./home.css";
import { Box } from "@mui/material";
import TreatmentsList from "./treatments/TreatmentsSection";
import AboutSection from "./about/AboutSection";
import ContactUsSection from "./contact-us/ContactUsSection";
import Carousel from "../../components/carousel/Carousel";
import GallerySection from "./gallery/GallerySection";

const heroUrls =
	[
		{ type: "image", src: "assets/images/bg_skin_follix.jpg", alt: "Image at bg_skin_follix.jpg" },
		{ type: "image", src: "assets/images/dr_vipul.jpg", alt: "Image at dr_vipul.jpg" },
		{ type: "image", src: "assets/images/awards_wall.jpg", alt: "Image at awards_wall.jpg" }
	]


const testimonialsList = [
	{
		testimonialSampleUrls: [
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKbNoLb-0P6lZXYZVXt0rEWoeC-WrRzuxpFbnslzsE7Xj7yXqhXm7kX-vDB-VyeAx6eO4&usqp=CAU",
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKbNoLb-0P6lZXYZVXt0rEWoeC-WrRzuxpFbnslzsE7Xj7yXqhXm7kX-vDB-VyeAx6eO4&usqp=CAU",
		],
		treatmentName: "Acne Treatment",
		patientFeedback:
			"I had a great experience with this dermatology hospital. The staff is knowledgeable and caring, and the treatments are effective.",
		rating: 4,
		patientName: "Arya Sharma",
	}
];


const Home = () => {
	const handleSlideChange = (currentSlide) => {
		console.log(`Current Slide: ${currentSlide}`);
	};

	return (
		<Box>
			<Carousel carouselItems={heroUrls} autoplay={true} autoplayInterval={5000} />

			<Box sx={{ width: "100%", padding: "16px", backgroundColor: "#f4f4f4" }}>

				<TreatmentsList />

				{/* <TestimonialsSection /> */}
				<GallerySection />
				
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
