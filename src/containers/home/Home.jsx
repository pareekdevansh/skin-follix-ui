import React from "react";
import "./home.css";
import SampleCarousel from "../../components/SampleCarousel/SampleCarousel";
// import Button from "../../components/button/Button";
import { Box, Button, Card, Typography } from "@mui/material";
import TreatmentsList from "./treatments/TreatmentsSection";

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


const Home = () => {

  return (
    <Box sx={{ width: "100%", padding: "16px", backgroundColor: "#f5f5f5" }}>
      <Box sx={{ marginBottom: "32px" }}>
        <SampleCarousel urlsList={heroUrls} timer={5} />
      </Box>

	<TreatmentsList />
      {/* <Box sx={{ marginBottom: "32px" }}>
        <Typography
          variant="h5"
          sx={{
            fontWeight: "bold",
            textAlign: "center",
            marginBottom: "16px",
          }}
        >
          Explore All Treatments:
        </Typography>
        <Card
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: "16px",
            padding: "16px",
            backgroundColor: "#ffffff",
            justifyContent: "center",
          }}
        >
          {services.map((service, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "150px",
                height: "100px",
                backgroundColor: "#e0f7fa",
                borderRadius: "12px",
                boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
                textAlign: "center",
                padding: "8px",
                cursor: "pointer",
              }}
            >
              <Typography variant="body1" sx={{ fontWeight: "500" }}>
                {service.name}
              </Typography>
            </Box>
          ))}
        </Card>
      </Box> */}

      {/* Testimonials Section */}
      <Card
        sx={{
          marginBottom: "32px",
          padding: "16px",
          backgroundColor: "#ffffff",
        }}
      >
        <Typography variant="body1">
          Visit our{" "}
          <Button
            variant="text"
            color="primary"
            onClick={() => (window.location.href = "/testimonials")}
          >
            Testimonials
          </Button>{" "}
          page to read what our patients are saying about us.
        </Typography>
      </Card>

      {/* About Section */}
      <Card
        sx={{
          marginBottom: "32px",
          padding: "16px",
          backgroundColor: "#ffffff",
        }}
      >
        <Typography variant="body1">
          Learn more about our company and mission on our{" "}
          <Button
            variant="text"
            color="primary"
            onClick={() => (window.location.href = "/about")}
          >
            About
          </Button>{" "}
          page.
        </Typography>
      </Card>

      {/* Contact Section */}
      <Card
        sx={{
          marginBottom: "32px",
          padding: "16px",
          backgroundColor: "#ffffff",
        }}
      >
        <Typography variant="body1">
          Contact us with any inquiries or feedback. Visit our{" "}
          <Button
            variant="text"
            color="primary"
            onClick={() => (window.location.href = "/contact-us")}
          >
            Contact Us
          </Button>{" "}
          page for more information.
        </Typography>
      </Card>

      {/* Floating Action Button */}
      <Box sx={{ textAlign: "center", marginTop: "32px" }}>
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
      </Box>
    </Box>
  );
};

export default Home;
