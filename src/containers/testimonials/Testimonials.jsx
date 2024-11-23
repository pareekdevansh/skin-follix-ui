import React from "react";
import "./testimonials.css";
import SampleCarousel from "../../components/SampleCarousel/SampleCarousel";
import { Button } from "../../components/";
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
		<div className="testimonials">
			<h2>What Out Customer Say About Us</h2>
			<div className="testimonials-grid">
				{testimonialsList.map((testimonial) => (
					<div className="testimonial-item card">
						<div className="testimonial-sample-carousel">
							<SampleCarousel urlsList={testimonial.testimonialSampleUrls} />
						</div>
						<div className="testimonial-descreption">
							<h4>{testimonial.treatmentName}</h4>
							<p>{testimonial.patientFeedback}</p>
							<i>-{testimonial.patientName}</i>
							<div className="rating-container">
								{Array.from({ length: testimonial.rating }, (_, index) => (
									<span>⭐</span>
								))}
							</div>
							<Button
								text="Read More"
								onClick={() => {}}
							/>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default Testimonials;
