import React, { useState } from "react";
import {
	Box,
	Card,
	CardContent,
	Typography,
	Button,
	Rating,
	TextField,
	IconButton,
	FormControl,
	InputLabel,
	Select,
	MenuItem,
} from "@mui/material";
import { Clear as ClearIcon } from "@mui/icons-material";
import BeforeAfterSlider from "react-before-after-slider-component";
import "react-before-after-slider-component/dist/build.css";
import { testimonialsList } from "./constants";

const Testimonials = () => {
	const [searchQuery, setSearchQuery] = useState("");
	const [category, setCategory] = useState("");
	const [filteredTestimonials, setFilteredTestimonials] = useState(testimonialsList);

	const [sliderPositions, setSliderPositions] = useState({});

	const handleSliderChange = (index, percent) => {
		setSliderPositions((prevPositions) => ({
			...prevPositions,
			[index]: percent,
		}));
	};

	const filterTestimonials = (query, selectedCategory) => {
		const lowerCaseQuery = query.toLowerCase();
		const filtered = testimonialsList.filter((testimonial) => {
			return (
				(!selectedCategory || testimonial.category.toLowerCase() === selectedCategory.toLowerCase()) &&
				testimonial.disease.toLowerCase().includes(lowerCaseQuery)
			);
		});
		setFilteredTestimonials(filtered);
	};

	return (
		<Box sx={{ padding: "2rem", backgroundColor: "#f5f5f5", minHeight: "100vh" }}>
			<Typography variant="h4" gutterBottom align="center" sx={{ marginBottom: "2rem" }}>
				Before and After: Success Stories
			</Typography>

			{/* Filters */}
			<Box sx={{ display: "flex", gap: "1rem", marginBottom: "2rem", justifyContent: "center" }}>
				<FormControl sx={{ minWidth: "200px" }}>
					<InputLabel>Category</InputLabel>
					<Select value={category} onChange={(e) => setCategory(e.target.value)}>
						<MenuItem value="">All Categories</MenuItem>
						<MenuItem value="Acne">Acne</MenuItem>
						<MenuItem value="Hair Transplant">Hair Transplant</MenuItem>
						<MenuItem value="Skin Care">Skin Care</MenuItem>
					</Select>
				</FormControl>
				<TextField
					label="Search by Disease"
					variant="outlined"
					value={searchQuery}
					onChange={(e) => setSearchQuery(e.target.value)}
					InputProps={{
						endAdornment: (
							<IconButton onClick={() => setSearchQuery("")}>
								<ClearIcon />
							</IconButton>
						),
					}}
				/>
			</Box>

			{/* Testimonials */}
			<Box
				sx={{
					display: "flex",
					flexWrap: "wrap",
					gap: "2rem",
					justifyContent: "center",
				}}
			>
				{filteredTestimonials.map((testimonial, index) => (
					<Card
						key={index}
						sx={{
							width: { xs: "100%", sm: "100%", md: "48%" },
							boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
							borderRadius: "8px",
							overflow: "hidden",
							padding: "1rem"
						}}
					>
						<Typography variant="h6" align="center" sx={{ marginBottom: "1rem" }}>
							{testimonial.treatmentName}
						</Typography>
						{/* Before-After Slider */}

						<Box sx={{position: 'relative'}}>

							<BeforeAfterSlider
								firstImage={{ imageUrl: testimonial.testimonialSampleUrls[1] }}
								secondImage={{ imageUrl: testimonial.testimonialSampleUrls[0] }}
								className="custom-slider"
								withResizeFeel
								currentPercentPosition={sliderPositions[index] || 50}
								onChangePercentPosition={(percent) => handleSliderChange(index, percent)}
								delimiterIconStyles={{
									color: "#f9f9f9",
									background: "#f9f9f9",
									border: "1.5px solid #1976d2",
									borderRadius: "50%",
								}}
								delimiterColor="#1976d2"
							/>
							<Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", position: "absolute", top: "0px", width: "100%", paddingX: '4px', color: '#f9f9f9' }}>
								<Typography>Before</Typography>
								<Typography>After</Typography>
							</Box>
						</Box>

						<CardContent>
							<Typography variant="body2" color="textSecondary">
								{testimonial.patientFeedback}
							</Typography>
						</CardContent>
					</Card>
				))}
			</Box>

			{/* Additional Section: Call-to-Action */}
			<Box sx={{ textAlign: "center", marginTop: "2rem" }}>
				<Typography variant="h5" gutterBottom>
					Share Your Experience
				</Typography>
				<Button
					variant="contained"
					color="primary"
					href="https://g.page/your-google-business-page/review"
				>
					Write a Review
				</Button>
			</Box>
		</Box >
	);
};

export default Testimonials;
