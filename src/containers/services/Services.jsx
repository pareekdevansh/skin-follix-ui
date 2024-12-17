import React, { useEffect, useState, useRef } from "react";
import { Box, TextField, Chip, Button, Card, Typography, IconButton } from '@mui/material';
import { Clear as ClearIcon } from '@mui/icons-material';
import ClearAllIcon from '@mui/icons-material/ClearAll';
import { useNavigate } from 'react-router-dom';
import { trackFilterEvent, trackSearchEvent } from "../../analytics";
import { services } from "./constants";

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
		if (category.length > 0) {
			trackFilterEvent(category.toLowerCase().trim());
		}
		setSelectedCategory(category === selectedCategory ? "" : category);
	};

	const handleClearFilter = () => {
		setSelectedCategory("");
	};

	const handleSearchChange = (event) => {
		const query = event.target.value;
		if (query.length > 0) {
			trackSearchEvent(query.toLowerCase().trim());
		}
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
				<IconButton

					variant="contained"
					onClick={handleClearFilter}
				>
					<ClearAllIcon />
				</IconButton>
			</Box>

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
