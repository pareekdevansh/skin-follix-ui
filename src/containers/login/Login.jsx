import React, { useState } from "react";
import { Container, Typography, TextField, Button, Grid, Box, CircularProgress, FormControlLabel, Checkbox, Link } from "@mui/material";
import { MdEmail } from "react-icons/md";
import { IoMdLock } from "react-icons/io";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { GoogleLogin } from "@react-oauth/google"; // Google OAuth component
import { CognitoUserPool, CognitoUser, AuthenticationDetails } from "amazon-cognito-identity-js";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

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

	// AWS Cognito User Pool Configuration
	const poolData = {
		UserPoolId: process.env.AWS_COGNITO_USER_POOL_ID || "YOUR_USER_POOL_ID",
		ClientId: process.env.AWS_COGNITO_CLIENT_ID || "YOUR_CLIENT_ID",
	};
	const userPool = new CognitoUserPool(poolData);

	const handleSubmitForm = (data) => {
		setLoading(true);
		setErrorMessage("");

		const { email, password } = data;

		// Set up CognitoUser and AuthenticationDetails
		const user = new CognitoUser({ Username: email, Pool: userPool });
		const authenticationDetails = new AuthenticationDetails({
			Username: email,
			Password: password,
		});

		// Authenticate the user with AWS Cognito
		user.authenticateUser(authenticationDetails, {
			onSuccess: (result) => {
				setLoading(false);
				console.log("Login successful:", result);
				// Handle successful login (store session, redirect, etc.)
				// dispatch({ type: "SET_USER", payload: result });
				// navigate("/home");

			},
			onFailure: (err) => {
				setLoading(false);
				setErrorMessage(err.message || JSON.stringify(err));
				console.error("Login failed:", err);

			},
		});
	};

	const handleGoogleLogin = (response) => {
		const { credential } = response;
		if (credential) {
			// Exchange the Google token for a Cognito authentication token
			const user = new CognitoUser({ Username: credential, Pool: userPool });
			const authenticationDetails = new AuthenticationDetails({
				Username: credential,
				Password: "", // Use an empty password as we're logging in via Google
			});

			user.authenticateUser(authenticationDetails, {
				onSuccess: (result) => {
					console.log("Google login successful:", result);
					// Handle successful Google login (store session, redirect, etc.)
				},
				onFailure: (err) => {
					console.error("Google login failed:", err);
				},
			});
		}
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
			<Container maxWidth="xs" sx={{display: "flex", flexDirection: "column", backgroundColor: "white", padding: "2rem", borderRadius: "8px", boxShadow: "0 4px 16px rgba(0, 0, 0, 0.1)" }}>
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

				<form onSubmit={handleSubmit(handleSubmitForm)}>
					<Grid container spacing={2}>
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
									startAdornment: <MdEmail className="icon" style={{ marginRight: 8, color: "#4e627b" }} />,
								}}
								variant="outlined"
								sx={{ backgroundColor: "#f5f5f5" }}
							/>
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
									startAdornment: <IoMdLock className="icon" style={{ marginRight: 8, color: "#4e627b" }} />,
								}}
								variant="outlined"
								sx={{ backgroundColor: "#f5f5f5" }}
							/>
						</Grid>

						{/* Remember Me Checkbox */}
						<Grid item xs={12} >
							<FormControlLabel
								control={<Checkbox {...control.register("rememberMe")} />}
								label="Remember me"
								sx={{ color: "#555" }}
							/>
						</Grid>

						{/* Submit Button */}
						<Grid item xs={12}>
							<Button
								type="submit"
								fullWidth
								variant="contained"
								color="primary"
								sx={{
									mt: 2,
									padding: "10px",
									fontSize: "16px",
									borderRadius: "8px",
									textTransform: "none",
								}}
								disabled={loading}
							>
								{loading ? <CircularProgress size={24} sx={{ color: "#fff" }} /> : "Sign In"}
							</Button>
						</Grid>
					</Grid>
				</form>

				{/* Google Login Button */}
				<Box sx={{ mt: 2 }}>
					<GoogleLogin
						onSuccess={handleGoogleLogin}
						onError={(error) => {
							console.error("Google login error:", error);
						}}
					/>
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
