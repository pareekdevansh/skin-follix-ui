import React from "react";
import { Card, CardContent, CardMedia, Typography, Button, Box } from "@mui/material";
import { useNavigate } from "react-router-dom"; // Assuming you're using react-router for navigation

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

const Services = () => {
	const navigate = useNavigate(); // Hook to handle navigation

	const navigateToService = (serviceName) => {
		// Navigate to service page, this assumes a dynamic route
		navigate(`/service/${serviceName}`);
	};

	return (
		<Box sx={{ padding: "32px", backgroundColor: "#f9f9f9" }}>
			<Box
				sx={{
					display: "flex",
					flexWrap: "wrap",
					gap: "2rem", // Space between cards
					justifyContent: "center", // Center items in the container
				}}
			>
				{services.map((service) => (
					<Card key={service.name} sx={{ width: { xs: "100%", sm: "50%", md: "30%" } }}>

						<Box sx={{ paddingX: "8px", paddingY: "4px", display: 'flex', flexDirection: "column", justifyContent: "space-between", flexGrow: 1, height: '90%' }}>
							<Box
								component="img"
								alt={service.name}
								height="180"
								src={service.image}
								sx={{
									objectFit: "cover",
									borderTopLeftRadius: "8px",
									borderTopRightRadius: "8px",
								}}
							/>
							<Box sx={{ display: 'flex', flexDirection: 'column' }}>
								<Typography variant="h6" component="h3" sx={{ fontWeight: "bold", color: "text.primary" }}>
									{service.name}
								</Typography>
								<Typography variant="body2" sx={{ marginTop: "8px", marginBottom: "16px", color: "text.secondary" }}>
									{service.description}
								</Typography>
							</Box>

						</Box>
						<Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>

							<Button
								variant="contained"
								color="primary"
								size="small"
								sx={{ paddingX: "16px", marginLeft: 'auto', marginRight: "4px" }}
								onClick={() => navigateToService(service.name)}
							>
								Show More
							</Button>
						</Box>
					</Card>
				))}
			</Box>
		</Box>
	);
};

export default Services;
