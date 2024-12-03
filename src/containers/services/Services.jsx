import React from "react";
import { Card, CardContent, CardMedia, Typography, Button, Box } from "@mui/material";
import { useNavigate } from "react-router-dom"; // Assuming you're using react-router for navigation

const services = [
	{
		name: "Acne (Pimples) Treatment",
		image: "https://example.com/acne-treatment.jpg",
		description:
			"We provide personalized acne treatments, including topical therapies, oral medications, chemical peels, and advanced laser procedures to manage and prevent breakouts effectively."
	},
	{
		name: "Acne Scar Treatment",
		image: "https://example.com/acne-scar-treatment.jpg",
		description:
			"Our acne scar treatments include microneedling, laser resurfacing, dermal fillers, and subcision to improve skin texture and minimize the appearance of scars."
	},
	{
		name: "Hair Loss Treatment",
		image: "https://example.com/hair-loss-treatment.jpg",
		description:
			"Comprehensive solutions for hair loss, including medications like minoxidil and finasteride, PRP therapy, and hair revitalization procedures tailored to individual needs."
	},
	{
		name: "Hair Transplant",
		image: "https://example.com/hair-transplant.jpg",
		description:
			"We specialize in advanced hair transplant techniques like FUE (Follicular Unit Extraction) and FUT (Follicular Unit Transplantation) to restore natural hair growth."
	},
	{
		name: "PRP Treatment",
		image: "https://example.com/prp-treatment.jpg",
		description:
			"Platelet-rich plasma (PRP) therapy is a regenerative treatment that uses your body's natural growth factors to stimulate hair growth and skin rejuvenation."
	},
	{
		name: "Lasers",
		image: "https://example.com/laser-treatment.jpg",
		description:
			"State-of-the-art laser treatments for skin resurfacing, pigmentation, hair removal, and scar reduction, ensuring safe and effective results."
	},
	{
		name: "Leucoderma and Vitiligo Treatment",
		image: "https://example.com/vitiligo-treatment.jpg",
		description:
			"Comprehensive care for leucoderma and vitiligo, including phototherapy, medications, and camouflage solutions to improve pigmentation."
	},
	{
		name: "Vitiligo Surgery",
		image: "https://example.com/vitiligo-surgery.jpg",
		description:
			"Surgical options like skin grafting and melanocyte transplantation to restore pigmentation in vitiligo-affected areas."
	},
	{
		name: "Wart Treatment",
		image: "https://example.com/wart-treatment.jpg",
		description:
			"Effective wart removal procedures using cryotherapy, laser therapy, or topical solutions, providing quick and safe relief."
	},
	{
		name: "Eczema Treatment",
		image: "https://example.com/eczema-treatment.jpg",
		description:
			"Personalized treatment plans for eczema, including emollients, topical steroids, and lifestyle guidance to manage flare-ups and prevent recurrence."
	},
	{
		name: "Atopic Dermatitis Treatment",
		image: "https://example.com/atopic-dermatitis.jpg",
		description:
			"Comprehensive care for atopic dermatitis with anti-inflammatory therapies, moisturizers, and immune-modulating treatments."
	},
	{
		name: "Psoriasis Treatment",
		image: "https://example.com/psoriasis-treatment.jpg",
		description:
			"Advanced treatments for psoriasis, including topical therapies, systemic medications, and biologics to manage symptoms effectively."
	},
	{
		name: "Skin Allergy Treatment",
		image: "https://example.com/skin-allergy.jpg",
		description:
			"Allergy management includes antihistamines, topical treatments, and diagnostic tests to identify triggers and provide relief."
	},
	{
		name: "Urticaria Treatment",
		image: "https://example.com/urticaria.jpg",
		description:
			"Comprehensive care for hives, including antihistamines and advanced immunotherapy for chronic urticaria."
	},
	{
		name: "Keloid Treatment",
		image: "https://example.com/keloid-treatment.jpg",
		description:
			"Specialized treatments for keloids, such as steroid injections, laser therapy, and surgical removal to reduce size and discomfort."
	},
	{
		name: "Hypertrophic Scar Treatment",
		image: "https://example.com/hypertrophic-scar.jpg",
		description:
			"Treatment options include silicone gels, steroid injections, and laser therapy to improve the appearance of hypertrophic scars."
	},
	{
		name: "Burn Scar Treatment",
		image: "https://example.com/burn-scar-treatment.jpg",
		description:
			"Comprehensive care for burn scars using laser therapy, skin grafting, and rehabilitation to improve skin texture and functionality."
	},
	{
		name: "Nail Disease Treatment",
		image: "https://example.com/nail-disease.jpg",
		description:
			"Expert care for fungal infections, ingrown nails, and other nail disorders, offering medical and procedural solutions."
	},
	{
		name: "Unwanted Hair Treatment",
		image: "https://example.com/unwanted-hair.jpg",
		description:
			"Advanced laser hair removal techniques for permanent reduction of unwanted hair, ensuring smooth and hair-free skin."
	},
	{
		name: "STD Treatment",
		image: "https://example.com/std-treatment.jpg",
		description:
			"Confidential and comprehensive care for sexually transmitted diseases, including diagnosis, treatment, and counseling."
	}
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
					<Card key={service.name} sx={{ width: { xs: "100%", sm: "50%", md: "30%" }, paddingX: '1rem', display: 'flex', flexDirection: 'column' }} >

						<Box sx={{ paddingX: "8px", paddingY: "4px", display: 'flex', flexDirection: "column", justifyContent: "space-between", flexGrow: 1, height: '90%' }}>
							<Box
								// component="img"
								// alt={service.name}
								height="180"
								// src={service.image}
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

							{/* <Button
								variant="contained"
								color="primary"
								size="small"
								sx={{ paddingX: "16px", marginLeft: 'auto', marginRight: "4px" }}
								onClick={() => navigateToService(service.name)}
							>
								Show More
							</Button> */}
						</Box>
					</Card>
				))}
			</Box>
		</Box>
	);
};

export default Services;
