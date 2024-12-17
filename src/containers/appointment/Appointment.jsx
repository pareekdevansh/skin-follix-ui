import React, { useState, useEffect } from 'react';
import {
	Container, Typography, TextField, Button, MenuItem, Select, InputLabel, FormControl, Card, CardContent, CircularProgress,
	Dialog, DialogActions, DialogContent, DialogTitle, Grid, Box
} from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { useForm, Controller } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3';

// Validation schema using Yup
const validationSchema = yup.object().shape({
	fullName: yup.string().required('Full name is required'),
	email: yup.string().email('Invalid email format').required('Email is required'),
	phone: yup.string().required('Phone number is required'),
	appointmentDate: yup.date().required('Date is required'),
	appointmentTime: yup.string().required('Time is required'),
});

const AppointmentBookingForm = () => {
	const { control, handleSubmit, watch, setValue, formState: { errors }, reset } = useForm({
		resolver: yupResolver(validationSchema),
	});

	const [loading, setLoading] = useState(false);
	const [timeSlotModalOpen, setTimeSlotModalOpen] = useState(false);
	const [selectedTimeSlot, setSelectedTimeSlot] = useState("");
	const [successDialogOpen, setSuccessDialogOpen] = useState(false);

	const treatments = ["Acne Treatment", "Hair Transplant", "PRP Therapy", "Skin Rejuvenation", "Laser Hair Removal"];
	const timeSlots = [
		"11:00 AM", "11:15 AM", "11:30 AM", "11:45 AM",
		"12:00 PM", "12:15 PM", "12:30 PM", "12:45 PM",
		"01:00 PM", "01:15 PM", "01:30 PM", "01:45 PM"
	];

	const availabilityColors = {
		available: "green",
		limited: "orange",
		busy: "red",
		blocked: "gray",
		selected: "blue",
	};

	const openTimeSlotModal = () => setTimeSlotModalOpen(true);
	const closeTimeSlotModal = () => setTimeSlotModalOpen(false);

	const handleTimeSlotSelection = (slot) => {
		setSelectedTimeSlot(slot);
		setValue("appointmentTime", slot);
		closeTimeSlotModal();
	};

	const handleSubmitForm = (data) => {
		setLoading(true);
		// Simulate form submission
		setTimeout(() => {
			setLoading(false);
			setSuccessDialogOpen(true); // Show success dialog after booking
			reset(); // Reset the form after submission
		}, 2000);
	};

	useEffect(() => {
		// Example: Set default values if needed
		setValue('appointmentDate', new Date());
		setValue('appointmentTime', timeSlots[0]); // Set default time slot
	}, [setValue]);

	return (
		<Container maxWidth="sm" sx={{ minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "flex-start", marginTop: "2rem" }}>
			<Typography variant="h4" align="center" gutterBottom>
				Book Your Appointment
			</Typography>

			<Card>
				<CardContent>
					<form onSubmit={handleSubmit(handleSubmitForm)}>
						<Grid container spacing={2}>
							<Grid item xs={12}>
								<TextField
									label="Full Name"
									fullWidth
									margin="normal"
									{...control.register('fullName')}
									error={!!errors.fullName}
									helperText={errors.fullName?.message}
								/>
							</Grid>

							<Grid item xs={12}>
								<TextField
									label="Email"
									fullWidth
									margin="normal"
									type="email"
									{...control.register('email')}
									error={!!errors.email}
									helperText={errors.email?.message}
								/>
							</Grid>

							<Grid item xs={12}>
								<TextField
									label="Phone Number"
									fullWidth
									margin="normal"
									type="tel"
									{...control.register('phone')}
									error={!!errors.phone}
									helperText={errors.phone?.message}
								/>
							</Grid>

							<Grid item xs={12}>
								<FormControl fullWidth margin="normal" error={!!errors.treatment}>
									<InputLabel>Choose Treatment</InputLabel>
									<Select {...control.register('treatment')} required>
										{treatments.map((treatment, index) => (
											<MenuItem key={index} value={treatment}>{treatment}</MenuItem>
										))}
									</Select>
									{errors.treatment && <p>{errors.treatment?.message}</p>}
								</FormControl>
							</Grid>

							<Grid item xs={12}>
								<LocalizationProvider dateAdapter={AdapterDateFns}>
									<Controller
										name="appointmentDate"
										control={control}
										render={({ field }) => (
											<DatePicker
												label="Preferred Appointment Date"
												{...field}
												renderInput={(params) => <TextField {...params} fullWidth />}
											/>
										)}
									/>
								</LocalizationProvider>
							</Grid>

							<Grid item xs={12}>
								<FormControl fullWidth margin="normal">
									<TextField
										label="Preferred Appointment Time"
										value={selectedTimeSlot || watch('appointmentTime')}
										onClick={openTimeSlotModal}
										readOnly
									/>
								</FormControl>
							</Grid>

							<Grid item xs={12}>
								<Button
									type="submit"
									fullWidth
									variant="contained"
									color="primary"
									sx={{ mt: 2 }}
									disabled={loading}
								>
									{loading ? <CircularProgress size={24} /> : 'Book Appointment'}
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
							const availability = index % 5 === 0 ? "busy" : index % 3 === 0 ? "limited" : "available"; // Example logic
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
