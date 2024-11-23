import React from "react";
import "./home.css";
import SampleCarousel from "../../components/SampleCarousel/SampleCarousel";
import { Button } from "../../components";

const heroUrls = [
	"https://medicaldialogues.in/h-upload/2022/07/15/180854-hospital-3.jpg",
];
const services = [
	{
		name: "Acne Treatment",
		image:
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo5ioKv64SgnLPfqBd2CrZ9vFHJh_grZUr9A&usqp=CAU",
		description:
			"We offer a variety of treatments for acne, including topical and oral medications, as well as procedures like chemical peels or laser therapy.",
	},
	{
		name: "Skin Cancer Screening and Treatment",
		image:
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo5ioKv64SgnLPfqBd2CrZ9vFHJh_grZUr9A&usqp=CAU",
		description:
			"Early detection and treatment of skin cancer is crucial. We offer screenings, excisions, and Mohs surgery for effective treatment.",
	},
	{
		name: "Cosmetic Dermatology",
		image:
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo5ioKv64SgnLPfqBd2CrZ9vFHJh_grZUr9A&usqp=CAU",
		description:
			"Enhance your skin's appearance with our range of procedures like Botox injections, dermal fillers, laser resurfacing, and chemical peels.",
	},
	{
		name: "Eczema and Psoriasis Management",
		image:
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo5ioKv64SgnLPfqBd2CrZ9vFHJh_grZUr9A&usqp=CAU",
		description:
			"Live comfortably with chronic skin conditions like eczema and psoriasis. We offer personalized treatment plans for optimal management.",
	},
	{
		name: "Hair Loss Treatment",
		image:
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo5ioKv64SgnLPfqBd2CrZ9vFHJh_grZUr9A&usqp=CAU",
		description:
			"Address various causes of hair loss with our effective treatments, including medications and procedures like PRP therapy.",
	},
	{
		name: "Dermatologic Surgery",
		image:
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo5ioKv64SgnLPfqBd2CrZ9vFHJh_grZUr9A&usqp=CAU",
		description:
			"Safe and precise removal of skin lesions, moles, and skin cancers with advanced techniques like Mohs surgery.",
	},
	{
		name: "Laser Hair Removal",
		image:
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo5ioKv64SgnLPfqBd2CrZ9vFHJh_grZUr9A&usqp=CAU",
		description:
			"Enjoy long-term hair reduction with our laser technology. Achieve smooth, hair-free skin with professional treatments.",
	},
	{
		name: "Wart and Skin Tag Removal",
		image:
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo5ioKv64SgnLPfqBd2CrZ9vFHJh_grZUr9A&usqp=CAU",
		description:
			"Say goodbye to unsightly warts and skin tags. We offer various methods like cryotherapy, laser therapy, and surgical excision for safe removal.",
	},
	{
		name: "Microdermabrasion and Chemical Peels",
		image:
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo5ioKv64SgnLPfqBd2CrZ9vFHJh_grZUr9A&usqp=CAU",
		description:
			"Reveal smoother, brighter skin with these cosmetic procedures. Improve skin texture by removing dead cells and promoting collagen production.",
	},
	{
		name: "Pediatric Dermatology",
		image:
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo5ioKv64SgnLPfqBd2CrZ9vFHJh_grZUr9A&usqp=CAU",
		description:
			"Providing specialized care for children's skin conditions. We treat eczema, acne, birthmarks, and genetic skin disorders with gentle and effective methods.",
	},
];
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
function Home() {
	return (
		<div className="home-container">
			<div className="hero-section">
				<SampleCarousel
					urlsList={heroUrls}
					timer={5}
				/>
			</div>
			<div className="home-cards">
				<div className="service-header">List of Services we offer :</div>
				<div className="service-container card">
					{services.map((service, index) => (
						<div
							key={index}
							className="service-item  "
						>
							{/* <div className="service-item-image">
								<img
									src={service.image}
									alt={`${service.name} image`}
								/>
							</div> */}
							<div className="service-item-descreption">{service.name}</div>
						</div>
					))}
				</div>

				<div className="testimonials-container card">
					<p>
						Visit our{" "}
						<span>
							<button
								className="button-link"
								onClick={() => {
									window.location.href = "/testimonials";
								}}
							>
								Testimonials
							</button>
						</span>{" "}
						Page to read what our patients are saying about Us.
					</p>
				</div>
				<div className="about-container card">
					<p>
						Learn more about our company and mission on our{" "}
						<span>
							<button
								className="button-link"
								onClick={() => {
									window.location.href = "/about";
								}}
							>
								About
							</button>
						</span>{" "}
						page.
					</p>
				</div>
				<div className="contact-container card">
					<p>
						Contact us with any inquiries or feedback. Visit our{" "}
						<span>
							<button
								className="button-link"
								onClick={() => {
									window.location.href = "/contact-us";
								}}
							>
								Contact-Us
							</button>
						</span>{" "}
						page for more information.
					</p>
				</div>
				<div className="fab-button">
					<Button
						text={"Book An Appointment"}
						onClick={() => {
							window.location.href = "/book-an-appointment";
						}}
						style={{ padding: "10px" }}
					/>
				</div>
			</div>
		</div>
	);
}

export default Home;
