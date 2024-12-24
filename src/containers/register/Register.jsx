import React, { useState } from "react";
import { Container, Typography, Box, CircularProgress } from "@mui/material";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import CustomRegistrationForm from "./CustomRegistrationForm";
import OAuth2Service from "../../api/oauth2Service";

const validationSchema = yup.object().shape({
	firstName: yup.string().min(3, "First name must be at least 2 characters long").required("First name is required"),
	lastName: yup.string().required("Last name is required"),
	email: yup.string().email("Invalid email format").required("Email is required"),
	phoneNumber: yup.string().length(10, "Phone number must be of 10 digits").required("Phone number is required"),
	dob: yup.date().required("Date of birth is required"),
	gender: yup.string().required("Gender is required"),
	password: yup.string().required("Password is required"),
	confirmPassword: yup
		.string()
		.oneOf([yup.ref("password"), null], "Passwords must match")
		.required("Confirm password is required"),
});

const Register = () => {
	const { control, handleSubmit, formState: { errors } } = useForm({
		resolver: yupResolver(validationSchema),
	});

	const [loading, setLoading] = useState(false);
	const [errorMessage, setErrorMessage] = useState("");
	const clientId = process.env.REACT_APP_GOOGLE_OAUTH2_CLIENT_ID;
	const clientSecret = process.env.REACT_APP_GOOGLE_OAUTH2_CLIENT_SECRET;
	const oauth2Service = new OAuth2Service(
		clientId,
		clientSecret, // Replace with your client secret
		"https://accounts.google.com/o/oauth2/v2/auth", // Google auth base URL
		"https://oauth2.googleapis.com/token", // Google token endpoint
		"http://localhost:3000/auth/callback" // Your redirect URI
	);

	const handleSubmitForm = (data) => {
		setLoading(true);
		setErrorMessage("");

		console.log("Form data submitted:", data);

		setTimeout(() => {
			setLoading(false);
		}, 2000);
	};

	const handleGoogleSuccess = async (credentialResponse) => {
		try {
			console.log("Google login response:", credentialResponse);

			// Send the credential to the backend via OAuth2Service
			// const tokenResponse = await oauth2Service.exchangeAuthCodeForToken(credentialResponse.credential);

			// console.log("Token response from OAuth2Service:", tokenResponse);

			// Handle the backend response as needed
			alert("Google login successful!");
		} catch (error) {
			console.error("OAuth2Service error:", error);
			setErrorMessage("Failed to authenticate with Google.");
		}
	};

	const handleGoogleError = (error) => {
		console.error("Google Login Error:", error);
		setErrorMessage("Google login failed. Please try again.");
	};

	return (
		<Box
			sx={{
				minHeight: "100vh",
				background: "linear-gradient(135deg, #f3f3f3, #f6f6f6)",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				paddingY: "2rem",
				paddingX: "5%",
			}}
		>
			<Container
				maxWidth="xs"
				sx={{
					backgroundColor: "white",
					padding: "2rem",
					borderRadius: "8px",
					boxShadow: "0 4px 16px rgba(0, 0, 0, 0.1)",
					width: "100%",
					boxSizing: "border-box",
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

				{CustomRegistrationForm(handleSubmit, handleSubmitForm, control, errors, loading)}

				<Box sx={{ display: "flex", justifyContent: "center", marginTop: "1rem" }}>
					<GoogleOAuthProvider clientId={clientId}>
						<GoogleLogin onSuccess={handleGoogleSuccess} onError={handleGoogleError} />
					</GoogleOAuthProvider>
				</Box>
			</Container>
		</Box>
	);
};

export default Register;
