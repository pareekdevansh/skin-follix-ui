import React, { useState } from "react";
import { Container, Typography, TextField, Button, Grid, Box, CircularProgress, MenuItem, Select, FormControl, InputLabel, Link } from "@mui/material";
import { MdEmail } from "react-icons/md";
import { IoMdLock } from "react-icons/io";
import { FaUserAlt, FaPhoneAlt, FaRegCalendarAlt } from "react-icons/fa";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { CognitoUserPool, CognitoUser } from "amazon-cognito-identity-js";
import { GoogleLogin } from "@react-oauth/google";

const validationSchema = yup.object().shape({
	firstName: yup.string().min(3, "First name must be at least 2 characters long").required("First name is required"),
	lastName: yup.string().required("Last name is required"),
	email: yup.string().email("Invalid email format").required("Email is required"),
	phoneNumber: yup.string().length(10, "Phone number must be of 10 digits").required("Phone number is required"),
	dob: yup.date().required("Date of birth is required"),
	gender: yup.string().required("Gender is required"),
	password: yup.string().required("Password is required"),
	confirmPassword: yup.string().oneOf([yup.ref('password'), null], "Passwords must match").required("Confirm password is required"),
});

const poolData = {
	UserPoolId: process.env.AWS_COGNITO_USER_POOL_ID || "YOUR_USER_POOL_ID",
	ClientId: process.env.AWS_COGNITO_CLIENT_ID || "YOUR_CLIENT_ID"
};

const userPool = new CognitoUserPool(poolData);

const Register = () => {
	const { control, handleSubmit, formState: { errors }, setValue, watch } = useForm({
		resolver: yupResolver(validationSchema),
	});

	const [loading, setLoading] = useState(false);
	const [errorMessage, setErrorMessage] = useState("");

	const handleSubmitForm = (data) => {
		setLoading(true);
		setErrorMessage(""); 

		// Create CognitoUser attributes
		const { firstName, lastName, email, phoneNumber, dob, gender, password } = data;

		const attributes = [
			{ Name: "given_name", Value: firstName },
			{ Name: "family_name", Value: lastName },
			{ Name: "email", Value: email },
			{ Name: "phone_number", Value: phoneNumber },
			{ Name: "birthdate", Value: dob },
			{ Name: "gender", Value: gender },
		];

		const signUpAsync = () => {
			userPool.signUp(email, password, attributes, null, (err, result) => {
				setLoading(false);
				if (err) {
					setErrorMessage(err.message || JSON.stringify(err));
					return;
				}
				console.log("User successfully signed up:", result);
				// Here you can add logic to redirect to verify email, etc.
			});
		};

		signUpAsync();
	};

	const responseGoogle = (response) => {
		console.log(response); // Handle Google login response (if integrating with Cognito's social logins)

		// After successful Google login, send the token to AWS Cognito or your backend for further processing
		const { credential } = response;
		// Call your backend or directly integrate with Cognito if you are handling social logins
	};

	return (
		<Box
			sx={{
				minHeight: "100vh", // Ensure full viewport height
				background: "linear-gradient(135deg, #f3f3f3, #f6f6f6)",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				paddingY: "2rem", // Add some padding for responsiveness
				paddingX: "5%"
			}}
		>
			<Container
				maxWidth="xs"
				sx={{
					backgroundColor: "white",
					padding: "2rem",
					borderRadius: "8px",
					boxShadow: "0 4px 16px rgba(0, 0, 0, 0.1)",
					width: "100%", // Ensure the container takes up full width
					boxSizing: "border-box", // Ensure padding doesn't overflow
				}}
			>
				<Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: "bold", color: "#333" }}>
					Create an Account
				</Typography>
				<Typography variant="body2" align="center" paragraph sx={{ color: "#555", fontSize: "14px" }}>
					Enter your details to sign up and start your journey with us.
				</Typography>

				{errorMessage && (
					<Box sx={{ backgroundColor: "red", padding: "10px", borderRadius: "4px", color: "white", marginBottom: "1rem" }}>
						<Typography variant="body2">{errorMessage}</Typography>
					</Box>
				)}

				<form onSubmit={handleSubmit(handleSubmitForm)}>
					<Grid container spacing={2}>
						{/* First Name */}
						<Grid item xs={12}>
							<TextField
								label="First Name"
								fullWidth
								margin="normal"
								{...control.register("firstName")}
								error={!!errors.firstName}
								helperText={errors.firstName?.message}
								InputProps={{
									startAdornment: <FaUserAlt style={{ marginRight: 8, color: "#4e627b" }} />,
								}}
								variant="outlined"
								sx={{ backgroundColor: "#f9f9f9" }}
							/>
						</Grid>

						{/* Last Name */}
						<Grid item xs={12}>
							<TextField
								label="Last Name"
								fullWidth
								margin="normal"
								{...control.register("lastName")}
								error={!!errors.lastName}
								helperText={errors.lastName?.message}
								InputProps={{
									startAdornment: <FaUserAlt style={{ marginRight: 8, color: "#4e627b" }} />,
								}}
								variant="outlined"
								sx={{ backgroundColor: "#f9f9f9" }}
							/>
						</Grid>

						{/* Email Field */}
						<Grid item xs={12}>
							<TextField
								label="Email"
								fullWidth
								margin="normal"
								type="email"
								{...control.register("email")}
								error={!!errors.email}
								helperText={errors.email?.message}
								InputProps={{
									startAdornment: <MdEmail style={{ marginRight: 8, color: "#4e627b" }} />,
								}}
								variant="outlined"
								sx={{ backgroundColor: "#f9f9f9" }}
							/>
						</Grid>

						{/* Phone Number */}
						<Grid item xs={12}>
							<TextField
								label="Phone Number"
								fullWidth
								margin="normal"
								{...control.register("phoneNumber")}
								error={!!errors.phoneNumber}
								helperText={errors.phoneNumber?.message}
								InputProps={{
									startAdornment: <FaPhoneAlt style={{ marginRight: 8, color: "#4e627b" }} />,
								}}
								variant="outlined"
								sx={{ backgroundColor: "#f9f9f9" }}
							/>
						</Grid>

						{/* Date of Birth */}
						<Grid item xs={12}>
							<TextField
								label="Date of Birth"
								fullWidth
								margin="normal"
								type="date"
								{...control.register("dob")}
								error={!!errors.dob}
								helperText={errors.dob?.message}
								variant="outlined"
								sx={{ backgroundColor: "#f9f9f9" }}
								InputLabelProps={{
									shrink: true,
								}}
							/>
						</Grid>

						{/* Gender */}
						<Grid item xs={12}>
							<FormControl fullWidth margin="normal" error={!!errors.gender}>
								<InputLabel>Gender</InputLabel>
								<Select
									{...control.register("gender")}
									label="Gender"
									variant="outlined"
									sx={{ backgroundColor: "#f9f9f9" }}
								>
									<MenuItem value="male">Male</MenuItem>
									<MenuItem value="female">Female</MenuItem>
									<MenuItem value="other">Other</MenuItem>
								</Select>
								{errors.gender && <Typography variant="body2" color="error">{errors.gender?.message}</Typography>}
							</FormControl>
						</Grid>

						{/* Password Field */}
						<Grid item xs={12}>
							<TextField
								label="Password"
								fullWidth
								margin="normal"
								type="password"
								{...control.register("password")}
								error={!!errors.password}
								helperText={errors.password?.message}
								InputProps={{
									startAdornment: <IoMdLock style={{ marginRight: 8, color: "#4e627b" }} />,
								}}
								variant="outlined"
								sx={{ backgroundColor: "#f9f9f9" }}
							/>
						</Grid>

						{/* Confirm Password Field */}
						<Grid item xs={12}>
							<TextField
								label="Confirm Password"
								fullWidth
								margin="normal"
								type="password"
								{...control.register("confirmPassword")}
								error={!!errors.confirmPassword}
								helperText={errors.confirmPassword?.message}
								InputProps={{
									startAdornment: <IoMdLock style={{ marginRight: 8, color: "#4e627b" }} />,
								}}
								variant="outlined"
								sx={{ backgroundColor: "#f9f9f9" }}
							/>
						</Grid>

						{/* Submit Button */}
						<Grid item xs={12}>
							<Button
								fullWidth
								type="submit"
								variant="contained"
								sx={{
									backgroundColor: "#0066cc",
									color: "#fff",
									padding: "12px",
									borderRadius: "4px",
									textTransform: "none",
								}}
								disabled={loading}
							>
								{loading ? <CircularProgress size={24} /> : "Sign Up"}
							</Button>
						</Grid>

						{/* Login Link */}
						<Grid item xs={12} textAlign="center" sx={{ marginTop: "1rem" }}>
							<Typography variant="body2">
								Already have an account?{" "}
								<Link href="/login" variant="body2" sx={{ color: "#0066cc", textDecoration: "none" }}>
									Login
								</Link>
							</Typography>
						</Grid>
					</Grid>
				</form>

				{/* Google OAuth */}
				<Box sx={{ display: "flex", justifyContent: "center", marginTop: "1rem" }}>
					<GoogleLogin onSuccess={responseGoogle} onError={(error) => console.error("Google Login Error", error)} />
				</Box>
			</Container>
		</Box>
	);
};

export default Register;
