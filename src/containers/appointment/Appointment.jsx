import React, { useState, useEffect } from "react";
import {
	Container, Typography, TextField, Button, MenuItem, Select, InputLabel, FormControl, Card, CardContent, CircularProgress,
	Dialog, DialogActions, DialogContent, DialogTitle, Grid
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFnsV3";

const AppointmentBookingForm = () => {
	const [formData, setFormData] = useState({
		fullName: "",
		email: "",
		phone: "",
		treatment: "",
		appointmentDate: new Date(),
		appointmentTime: "",
	});

	const [errors, setErrors] = useState({});
	const [loading, setLoading] = useState(false);
	const [timeSlotModalOpen, setTimeSlotModalOpen] = useState(false);
	const [successDialogOpen, setSuccessDialogOpen] = useState(false);

	const treatments = ["Acne Treatment", "Hair Transplant", "PRP Therapy", "Skin Rejuvenation", "Laser Hair Removal"];
	const timeSlots = [
		"11:00 AM", "11:15 AM", "11:30 AM", "11:45 AM",
		"12:00 PM", "12:15 PM", "12:30 PM", "12:45 PM",
		"01:00 PM", "01:15 PM", "01:30 PM", "01:45 PM",
	];

	const availabilityColors = {
		available: "green",
		limited: "orange",
		busy: "red",
		blocked: "gray",
		selected: "blue",
	};

	const validateForm = () => {
		const newErrors = {};
		if (!formData.fullName) newErrors.fullName = "Full name is required.";
		if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "Invalid email format.";
		if (!formData.phone || formData.phone.length !== 10) newErrors.phone = "Phone number must be 10 digits.";
		if (!formData.treatment) newErrors.treatment = "Please select a treatment.";
		if (!formData.appointmentDate) newErrors.appointmentDate = "Date is required.";
		if (!formData.appointmentTime) newErrors.appointmentTime = "Time is required.";
		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	};

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (validateForm()) {
			setLoading(true);
			setTimeout(() => {
				setLoading(false);
				setSuccessDialogOpen(true);
				setFormData({
					fullName: "",
					email: "",
					phone: "",
					treatment: "",
					appointmentDate: new Date(),
					appointmentTime: "",
				});
				setErrors({});
			}, 2000);
		}
	};

	const openTimeSlotModal = () => setTimeSlotModalOpen(true);
	const closeTimeSlotModal = () => setTimeSlotModalOpen(false);

	const handleTimeSlotSelection = (slot) => {
		setFormData((prev) => ({ ...prev, appointmentTime: slot }));
		closeTimeSlotModal();
	};

	return (
		<Container maxWidth="sm" sx={{ mt: 4, p: 2 }}>
			<Typography variant="h4" align="center" gutterBottom>
				Book Your Appointment
			</Typography>

			<Card>
				<CardContent>
					<form onSubmit={handleSubmit}>
						<Grid container spacing={2}>
							{/* Full Name */}
							<Grid item xs={12}>
								<TextField
									label="Full Name"
									name="fullName"
									value={formData.fullName}
									onChange={handleInputChange}
									error={!!errors.fullName}
									helperText={errors.fullName}
									fullWidth
								/>
							</Grid>

							{/* Email */}
							<Grid item xs={12}>
								<TextField
									label="Email"
									name="email"
									type="email"
									value={formData.email}
									onChange={handleInputChange}
									error={!!errors.email}
									helperText={errors.email}
									fullWidth
								/>
							</Grid>

							{/* Phone */}
							<Grid item xs={12}>
								<TextField
									label="Phone Number"
									name="phone"
									type="tel"
									value={formData.phone}
									onChange={(e) => {
										if (/^\d*$/.test(e.target.value)) handleInputChange(e); // Allow only numbers
									}}
									error={!!errors.phone}
									helperText={errors.phone}
									fullWidth
								/>
							</Grid>

							{/* Treatment */}
							<Grid item xs={12}>
								<FormControl fullWidth>
									<InputLabel>Choose Treatment</InputLabel>
									<Select
										name="treatment"
										value={formData.treatment}
										onChange={handleInputChange}
										error={!!errors.treatment}
									>
										{treatments.map((treatment, index) => (
											<MenuItem key={index} value={treatment}>
												{treatment}
											</MenuItem>
										))}
									</Select>
								</FormControl>
								{errors.treatment && <Typography color="error">{errors.treatment}</Typography>}
							</Grid>

							{/* Date */}
							<Grid item xs={12}>
								<LocalizationProvider dateAdapter={AdapterDateFns}>
									<DatePicker
										label="Preferred Appointment Date"
										value={formData.appointmentDate}
										onChange={(newValue) => setFormData((prev) => ({ ...prev, appointmentDate: newValue }))}
										renderInput={(params) => (
											<TextField {...params} fullWidth error={!!errors.appointmentDate} helperText={errors.appointmentDate} />
										)}
									/>
								</LocalizationProvider>
							</Grid>

							{/* Appointment Time */}
							<Grid item xs={12}>
								<TextField
									label="Preferred Appointment Time"
									value={formData.appointmentTime}
									onClick={openTimeSlotModal}
									readOnly
									fullWidth
								/>
								{errors.appointmentTime && <Typography color="error">{errors.appointmentTime}</Typography>}
							</Grid>

							{/* Submit */}
							<Grid item xs={12}>
								<Button type="submit" fullWidth variant="contained" disabled={loading}>
									{loading ? <CircularProgress size={24} /> : "Book Appointment"}
								</Button>
							</Grid>
						</Grid>
					</form>
				</CardContent>
			</Card>

			{/* Time Slot Modal */}
			<Dialog open={timeSlotModalOpen} onClose={closeTimeSlotModal}>
				<DialogTitle>Select Appointment Time</DialogTitle>
				<DialogContent>
					<Grid container spacing={2}>
						{timeSlots.map((slot, index) => {
							const availability = index % 5 === 0 ? "busy" : index % 3 === 0 ? "limited" : "available";
							return (
								<Grid item xs={3} key={index}>
									<Button
										fullWidth
										style={{ backgroundColor: availabilityColors[availability], color: "#fff" }}
										onClick={() => handleTimeSlotSelection(slot)}
									>
										{slot}
									</Button>
								</Grid>
							);
						})}
					</Grid>
				</DialogContent>
				<DialogActions>
					<Button onClick={closeTimeSlotModal} color="secondary">
						Cancel
					</Button>
				</DialogActions>
			</Dialog>

			{/* Success Dialog */}
			<Dialog open={successDialogOpen}>
				<DialogTitle>Appointment Booked</DialogTitle>
				<DialogContent>Your appointment has been booked successfully!</DialogContent>
				<DialogActions>
					<Button onClick={() => setSuccessDialogOpen(false)} color="primary">
						OK
					</Button>
				</DialogActions>
			</Dialog>
		</Container>
	);
};

export default AppointmentBookingForm;
