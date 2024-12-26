import React, { useState } from "react";
import { Container, Typography, TextField, Button, Grid, Box, CircularProgress, FormControlLabel, Checkbox, Link } from "@mui/material";
import { MdEmail } from "react-icons/md";
import { IoMdLock } from "react-icons/io";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import CustomLoginForm from "./CustomLoginForm";
const validationSchema = yup.object().shape({
	email: yup
		.string()
		.email("Invalid email format")
		.required("Email is required"),
	password: yup
		.string()
		.required("Password is required")
		.min(8, "Password must be at least 8 characters long")
		.matches(/[A-Z]/, "Password must contain at least one uppercase letter")
		.matches(/[a-z]/, "Password must contain at least one lowercase letter"),
});


const Login = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();


	const navigateToHome = () => {
		navigate("/home");
	}
	const navigateToRegister = () => {
		navigate("/register");
	}
	const navigateToResetPassword = () => {
		navigate("/reset-password");
	}

	const { control, handleSubmit, formState: { errors } } = useForm({
		resolver: yupResolver(validationSchema),
	});
	const [loading, setLoading] = useState(false);
	const [errorMessage, setErrorMessage] = useState("");


	const handleSubmitForm = (data) => {
		setLoading(true);
		setErrorMessage("");

		const { email, password } = data;

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
				height: "100%",
				background: "linear-gradient(135deg, #f3f3f3, #f6f6f6)",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				overflowY: "auto",
				paddingY: "3rem",
				paddingX: "5%"
			}}
		>
			<Container maxWidth="xs" sx={{ display: "flex", flexDirection: "column", backgroundColor: "white", padding: "2rem", borderRadius: "8px", boxShadow: "0 4px 16px rgba(0, 0, 0, 0.1)" }}>
				<Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: "bold", color: "#333" }}>
					Welcome Back!
				</Typography>
				<Typography variant="body2" align="center" paragraph sx={{ color: "#555", fontSize: "14px" }}>
					Enter your account details to Login.
				</Typography>

				{errorMessage && (
					<Box sx={{ backgroundColor: "red", padding: "10px", borderRadius: "4px", color: "white", marginBottom: "1rem" }}>
						<Typography variant="body2">{errorMessage}</Typography>
					</Box>
				)}

				{CustomLoginForm(handleSubmit, handleSubmitForm, control, errors, loading)}

				{/* Google Login Button */}
				<Box sx={{ mt: 2 }}>
					<GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_OAUTH2_CLIENT_ID}>
						<GoogleLogin
							onSuccess={handleGoogleSuccess}
							onError={handleGoogleError}
						/>
					</GoogleOAuthProvider>
				</Box>

				{/* Register Link */}
				<Box sx={{ mt: 2, textAlign: "center" }}>
					<Typography variant="body2" sx={{ color: "#555" }}>
						Don't have an account?{" "}
						<Link href="/register" style={{ textDecoration: "none", fontWeight: "bold" }}>
							Register
						</Link>
					</Typography>
				</Box>
			</Container>
		</Box>
	);
};

export default Login;
