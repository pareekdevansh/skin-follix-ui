import React from "react";
import "./testimonials.css";
import SampleCarousel from "../../components/SampleCarousel/SampleCarousel";
import { Card, CardContent, Typography, Button, Box, Rating } from "@mui/material";

const testimonialsList = [
	{
		testimonialSampleUrls: [
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKbNoLb-0P6lZXYZVXt0rEWoeC-WrRzuxpFbnslzsE7Xj7yXqhXm7kX-vDB-VyeAx6eO4&usqp=CAU",
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPe9OkMA8ClwUsD5liieH9-Uc26E-F3oqKWhIzXxzs3LDTFXhpGrk-hynYDx-jRWPE7P0&usqp=CAU",
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKbNoLb-0P6lZXYZVXt0rEWoeC-WrRzuxpFbnslzsE7Xj7yXqhXm7kX-vDB-VyeAx6eO4&usqp=CAU",
		],
		treatmentName: "Acne Treatment",
		patientFeedback:
			"I had a great experience with this dermatology hospital. The staff is knowledgeable and caring, and the treatments are effective.",
		rating: 4,
		patientName: "Arya Sharma",
	},
	{
		testimonialSampleUrls: [
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKbNoLb-0P6lZXYZVXt0rEWoeC-WrRzuxpFbnslzsE7Xj7yXqhXm7kX-vDB-VyeAx6eO4&usqp=CAU",
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKbNoLb-0P6lZXYZVXt0rEWoeC-WrRzuxpFbnslzsE7Xj7yXqhXm7kX-vDB-VyeAx6eO4&usqp=CAU",
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKbNoLb-0P6lZXYZVXt0rEWoeC-WrRzuxpFbnslzsE7Xj7yXqhXm7kX-vDB-VyeAx6eO4&usqp=CAU",
		],
		treatmentName: "Skin Cancer Screening and Treatment",
		patientFeedback:
			"I highly recommend their skin cancer screening services. The doctor was thorough, and the treatment options were explained in detail.",
		rating: 5,
		patientName: "Vikram Singh",
	},
	{
		testimonialSampleUrls: [
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKbNoLb-0P6lZXYZVXt0rEWoeC-WrRzuxpFbnslzsE7Xj7yXqhXm7kX-vDB-VyeAx6eO4&usqp=CAU",
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKbNoLb-0P6lZXYZVXt0rEWoeC-WrRzuxpFbnslzsE7Xj7yXqhXm7kX-vDB-VyeAx6eO4&usqp=CAU",
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKbNoLb-0P6lZXYZVXt0rEWoeC-WrRzuxpFbnslzsE7Xj7yXqhXm7kX-vDB-VyeAx6eO4&usqp=CAU",
		],
		treatmentName: "Cosmetic Dermatology",
		patientFeedback:
			"The cosmetic dermatology procedures offered here are fantastic. I'm delighted with the results of my Botox injections.",
		rating: 4,
		patientName: "Priyanka Mishra",
	},
	{
		testimonialSampleUrls: [
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKbNoLb-0P6lZXYZVXt0rEWoeC-WrRzuxpFbnslzsE7Xj7yXqhXm7kX-vDB-VyeAx6eO4&usqp=CAU",
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKbNoLb-0P6lZXYZVXt0rEWoeC-WrRzuxpFbnslzsE7Xj7yXqhXm7kX-vDB-VyeAx6eO4&usqp=CAU",
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKbNoLb-0P6lZXYZVXt0rEWoeC-WrRzuxpFbnslzsE7Xj7yXqhXm7kX-vDB-VyeAx6eO4&usqp=CAU",
		],
		treatmentName: "Eczema and Psoriasis Management",
		patientFeedback:
			"I appreciate the personalized approach to eczema management. The treatment plan has made a significant improvement in my skin condition.",
		rating: 5,
		patientName: "Rajesh Gupta",
	},
	{
		testimonialSampleUrls: [
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKbNoLb-0P6lZXYZVXt0rEWoeC-WrRzuxpFbnslzsE7Xj7yXqhXm7kX-vDB-VyeAx6eO4&usqp=CAU",
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKbNoLb-0P6lZXYZVXt0rEWoeC-WrRzuxpFbnslzsE7Xj7yXqhXm7kX-vDB-VyeAx6eO4&usqp=CAU",
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKbNoLb-0P6lZXYZVXt0rEWoeC-WrRzuxpFbnslzsE7Xj7yXqhXm7kX-vDB-VyeAx6eO4&usqp=CAU",
		],
		treatmentName: "Hair Loss Treatment",
		patientFeedback:
			"Addressing various causes of hair loss with their effective treatments, including medications and procedures like PRP therapy.",
		rating: 4,
		patientName: "Sonia Kapoor",
	},
	{
		testimonialSampleUrls: [
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKbNoLb-0P6lZXYZVXt0rEWoeC-WrRzuxpFbnslzsE7Xj7yXqhXm7kX-vDB-VyeAx6eO4&usqp=CAU",
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKbNoLb-0P6lZXYZVXt0rEWoeC-WrRzuxpFbnslzsE7Xj7yXqhXm7kX-vDB-VyeAx6eO4&usqp=CAU",
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKbNoLb-0P6lZXYZVXt0rEWoeC-WrRzuxpFbnslzsE7Xj7yXqhXm7kX-vDB-VyeAx6eO4&usqp=CAU",
		],
		treatmentName: "Dermatologic Surgery",
		patientFeedback:
			"I underwent dermatologic surgery, and the process was smooth. The surgeon was skilled, and the post-operative care was excellent.",
		rating: 4,
		patientName: "Arjun Patel",
	},
];


function Testimonials() {
	return (
		<Box sx={{ padding: "2rem", backgroundColor: "#f5f5f5" }}>
			<Typography variant="h4" gutterBottom align="left"> 
				What Our Customers Say About Us
			</Typography>

			<Box
				sx={{
					display: "flex",
					flexWrap: "wrap",
					justifyContent: "center",
					gap: 4
				}}
			>
				{testimonialsList.map((testimonial, index) => (
					<Box
						key={index}
						sx={{
							width: { xs: "100%", sm: "48%", md: "30%" },
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
						}}
					>
						<Card elevation={3} sx={{ width: "100%" }}>
							<CardContent>
								<div style={{ marginBottom: "1rem" }}>
									<SampleCarousel urlsList={testimonial.testimonialSampleUrls} />
								</div>

								<Typography variant="h6">{testimonial.treatmentName}</Typography>
								<Typography variant="body2" color="textSecondary" paragraph>
									{testimonial.patientFeedback}
								</Typography>
								<Typography variant="body2" color="textPrimary" gutterBottom>
									- {testimonial.patientName}
								</Typography>

								<Rating
									value={testimonial.rating}
									precision={0.5}
									readOnly
									size="small"
								/>

								<Button
									variant="outlined"
									color="primary"
									onClick={() => { }}
									fullWidth
									sx={{ marginTop: "1rem" }}
								>
									Read More
								</Button>
							</CardContent>
						</Card>
					</Box>
				))}
			</Box>
		</Box>
	);
}

export default Testimonials;