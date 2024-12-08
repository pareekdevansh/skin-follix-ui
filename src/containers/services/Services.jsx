import React, { useEffect, useState, useRef } from "react";
import { Box, TextField, Chip, Button, Card, Typography, IconButton } from '@mui/material';
import { Clear as ClearIcon } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
const services = [
	{ name: "Acne (Pimples) Treatment", category: "Skin", description: "Personalized acne treatments, including topical therapies, oral medications, chemical peels, and advanced laser procedures to manage and prevent breakouts effectively." },
	{ name: "Acne Scar Treatment", category: "Skin", description: "Microneedling, laser resurfacing, dermal fillers, and subcision to improve skin texture and minimize the appearance of scars." },
	{ name: "Hair Loss Treatment", category: "Hair", description: "Comprehensive solutions for hair loss, including medications like minoxidil and finasteride, PRP therapy, and hair revitalization procedures tailored to individual needs." },
	{ name: "Hair Transplant", category: "Hair", description: "We specialize in advanced hair transplant techniques like FUE (Follicular Unit Extraction) and FUT (Follicular Unit Transplantation) to restore natural hair growth." },
	{ name: "PRP Treatment", category: "Anti-Aging", description: "Platelet-rich plasma (PRP) therapy is a regenerative treatment that uses your body's natural growth factors to stimulate hair growth and skin rejuvenation." },
	{ name: "Lasers", category: "Anti-Aging", description: "State-of-the-art laser treatments for skin resurfacing, pigmentation, hair removal, and scar reduction, ensuring safe and effective results." },
	{ name: "Leucoderma and Vitiligo Treatment", category: "Skin", description: "Comprehensive care for leucoderma and vitiligo, including phototherapy, medications, and camouflage solutions to improve pigmentation." },
	{ name: "Vitiligo Surgery", category: "Skin", description: "Surgical options like skin grafting and melanocyte transplantation to restore pigmentation in vitiligo-affected areas." },
	{ name: "Wart Treatment", category: "Skin", description: "Effective wart removal procedures using cryotherapy, laser therapy, or topical solutions, providing quick and safe relief." },
	{ name: "Eczema Treatment", category: "Anti-Aging", description: "Personalized treatment plans for eczema, including emollients, topical steroids, and lifestyle guidance to manage flare-ups and improve skin texture." },
	{ name: "Atopic Dermatitis Treatment", category: "Skin", description: "Comprehensive care for atopic dermatitis with anti-inflammatory therapies, moisturizers, and immune-modulating treatments." },
	{ name: "Psoriasis Treatment", category: "Anti-Aging", description: "Advanced treatments for psoriasis, including topical therapies, systemic medications, and biologics to manage symptoms and improve skin appearance." },
	{ name: "Skin Allergy Treatment", category: "Anti-Aging", description: "Allergy management includes antihistamines, topical treatments, and diagnostic tests to identify triggers and provide relief while maintaining healthy skin." },
	{ name: "Urticaria Treatment", category: "Anti-Aging", description: "Comprehensive care for hives, including antihistamines and advanced immunotherapy for chronic urticaria." },
	{ name: "Keloid Treatment", category: "Skin", description: "Specialized treatments for keloids, such as steroid injections, laser therapy, and surgical removal to reduce size and discomfort." },
	{ name: "Hypertrophic Scar Treatment", category: "Skin", description: "Treatment options include silicone gels, steroid injections, and laser therapy to improve the appearance of hypertrophic scars." },
	{ name: "Burn Scar Treatment", category: "Skin", description: "Comprehensive care for burn scars using laser therapy, skin grafting, and rehabilitation to improve skin texture and functionality." },
	{ name: "Nail Disease Treatment", category: "Skin", description: "Expert care for fungal infections, ingrown nails, and other nail disorders, offering medical and procedural solutions." },
	{ name: "Unwanted Hair Treatment", category: "Hair", description: "Advanced laser hair removal techniques for permanent reduction of unwanted hair, ensuring smooth and hair-free skin." },
	{ name: "STD Treatment", category: "Skin", description: "Confidential and comprehensive care for sexually transmitted diseases, including diagnosis, treatment, and counseling." }
];

const Services = () => {
	const [selectedCategory, setSelectedCategory] = useState("");
	const [searchQuery, setSearchQuery] = useState("");
	const [filteredServices, setFilteredServices] = useState(services);
	const navigate = useNavigate();
	const searchTimeout = useRef(null); // Reference to store the timeout for debounce

	const navigateToService = (serviceName) => {
		navigate(`/service/${serviceName}`);
	};

	const handleFilterChange = (category) => {
		setSelectedCategory(category === selectedCategory ? "" : category); 
	};

	const handleClearFilter = () => {
		setSelectedCategory(""); 
	};

	const handleSearchChange = (event) => {
		const query = event.target.value;
		setSearchQuery(query); 
	};

	const handleClearSearch = () => {
		setSearchQuery(""); 
	};

	useEffect(() => {
		if (searchTimeout.current) {
			clearTimeout(searchTimeout.current);
		}

		searchTimeout.current = setTimeout(() => {
			setFilteredServices(
				services.filter((service) => {
					const matchesCategory = selectedCategory ? service.category === selectedCategory : true;
					const matchesSearch =
						service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
						service.description.toLowerCase().includes(searchQuery.toLowerCase());
					return matchesCategory && matchesSearch;
				})
			);
		}, 500); 

		return () => {
			if (searchTimeout.current) {
				clearTimeout(searchTimeout.current);
			}
		};
	}, [searchQuery, selectedCategory]); 

	return (
		<Box sx={{ padding: "32px", backgroundColor: "#f9f9f9", minHeight: "80vh", overflow: "auto" }}>
			{/* Search Bar */}
			<Box sx={{ marginBottom: "24px", display: "flex", justifyContent: "center" }}>
				<TextField
					label="Search Treatments"
					variant="outlined"
					fullWidth
					value={searchQuery}
					onChange={handleSearchChange}
					sx={{
						maxWidth: "600px",
						borderRadius: "8px",
						backgroundColor: "white",
						"& .MuiOutlinedInput-root": {
							borderRadius: "8px",
						},
					}}
					InputProps={{
						endAdornment: (
							<IconButton onClick={handleClearSearch} sx={{ padding: "8px" }}>
								<ClearIcon />
							</IconButton>
						),
					}}
				/>
			</Box>

			{/* Filter Chips */}
			<Box sx={{ marginBottom: "24px", display: "flex", gap: "16px", justifyContent: "center" }}>
				<Chip
					label="Hair"
					color={selectedCategory === "Hair" ? "primary" : "default"}
					onClick={() => handleFilterChange("Hair")}
				/>
				<Chip
					label="Skin"
					color={selectedCategory === "Skin" ? "primary" : "default"}
					onClick={() => handleFilterChange("Skin")}
				/>
				<Chip
					label="Anti-Aging"
					color={selectedCategory === "Anti-Aging" ? "primary" : "default"}
					onClick={() => handleFilterChange("Anti-Aging")}
				/>
				<Button
					variant="contained"
					onClick={handleClearFilter}
					sx={{
						alignSelf: "center",
						backgroundColor: "#1976d2",
						"&:hover": { backgroundColor: "#1565c0" },
					}}
				>
					Clear Filters
				</Button>
			</Box>

			{/* Services Cards */}
			<Box sx={{ display: "flex", flexWrap: "wrap", gap: "2rem", justifyContent: "center" }}>
				{filteredServices.length > 0 ? (
					filteredServices.map((service) => (
						<Card
							key={service.name}
							sx={{
								width: { xs: "100%", sm: "50%", md: "30%" },
								paddingX: "1rem",
								display: "flex",
								flexDirection: "column",
								boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
								borderRadius: "8px",
								transition: "transform 0.3s",
								"&:hover": {
									transform: "scale(1.05)",
									boxShadow: "0 8px 24px rgba(0, 0, 0, 0.1)",
								},
							}}
						>
							<Box sx={{ paddingX: "8px", paddingY: "4px", display: 'flex', flexDirection: "column", justifyContent: "space-between", flexGrow: 1, height: '90%' }}>
								{/* Service Image */}
								<Box
									height="180"
									sx={{
										objectFit: "cover",
										borderTopLeftRadius: "8px",
										borderTopRightRadius: "8px",
									}}
								/>
								{/* Service Title and Description */}
								<Box sx={{ display: 'flex', flexDirection: 'column' }}>
									<Typography variant="h6" component="h3" sx={{ fontWeight: "bold", color: "text.primary" }}>
										{service.name}
									</Typography>
									<Typography variant="body2" sx={{ marginTop: "8px", marginBottom: "16px", color: "text.secondary" }}>
										{service.description}
									</Typography>
								</Box>
							</Box>
						</Card>
					))
				) : (
					<Typography variant="h6" sx={{ color: "text.secondary", textAlign: "center", width: "100%" }}>
						No services found.
					</Typography>
				)}
			</Box>
		</Box>
	);
};

export default Services;
