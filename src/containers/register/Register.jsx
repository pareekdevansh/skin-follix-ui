import React, { useState } from "react";
import { Container, Typography, Box, CircularProgress, Button } from "@mui/material";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { GoogleLogin, GoogleOAuthProvider, useGoogleLogin, useGoogleOAuth } from "@react-oauth/google";
import CustomRegistrationForm from "./CustomRegistrationForm";
import OAuth2Service from "../../services/api/oauth2Service";
import Cookies from "js-cookie";

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
		clientSecret
	);

	const handleSubmitForm = (data) => {
		setLoading(true);
		setErrorMessage("");

		console.log("Form data submitted:", data);

		setTimeout(() => {
			setLoading(false);
		}, 2000);
	};
	const login = useGoogleLogin({
		onSuccess: async (oAuthToken) => {
			try {
				const googleApiAccessToken = oAuthToken.access_token;
				const requestBody = {
					access_token : googleApiAccessToken,
					request_type : 'REGISTER'
				}
				const tokenResponse = await oauth2Service.exchangeAuthCodeForToken("/auth/oauth2/google", requestBody);
				const {accessToken, refreshToken} = tokenResponse;
				Cookies.set('accessToken', accessToken, {
					secure: true,         
					sameSite: 'Strict',   
					expires: 1 / 24       
				});
				Cookies.set('refreshToken', refreshToken, {
					secure: true,         
					sameSite: 'Strict',   
					expires: 1            
				});
				alert("Google login successful!");
			} catch (error) {
				console.error('Login Failed:', error);
				setErrorMessage('Google login failed. Please try again.');
			}
		},
		onError: (error) => {
			console.error('Login Failed:', error);
		},
		scope: 'openid https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/user.birthday.read https://www.googleapis.com/auth/user.gender.read https://www.googleapis.com/auth/user.phonenumbers.read',
	});


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
					<Button onClick={login}>Google</Button>
				</Box>
			</Container>
		</Box>
	);
};

export default Register;
