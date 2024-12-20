import React, { useState } from "react";
import { Container, Typography, TextField, Button, Grid, Box, CircularProgress, Link } from "@mui/material";
import { IoMdLock } from "react-icons/io";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { CognitoUserPool } from "amazon-cognito-identity-js";

// Validation schema using Yup
const validationSchema = yup.object().shape({
	email: yup.string().email("Invalid email format").required("Email is required"),
	newPassword: yup.string().required("New password is required"),
	confirmPassword: yup.string().oneOf([yup.ref('newPassword'), null], "Passwords must match").required("Confirm password is required"),
});

// AWS Cognito User Pool Configuration
const poolData = {
	UserPoolId: "YOUR_USER_POOL_ID", // Your User Pool ID
	ClientId: "YOUR_CLIENT_ID", // Your Client ID
};

const userPool = new CognitoUserPool(poolData);

const ResetPassword = () => {
	const { control, handleSubmit, formState: { errors } } = useForm({
		resolver: yupResolver(validationSchema),
	});

	const [loading, setLoading] = useState(false);
	const [errorMessage, setErrorMessage] = useState("");

	const handleSubmitForm = (data) => {
		setLoading(true);
		setErrorMessage(""); // Reset error message on form submit

		const { email, newPassword } = data;

		// Assuming you already have a verification code sent to the user
		const resetPasswordAsync = () => {
			const cognitoUser = userPool.getCurrentUser();
			if (cognitoUser) {
				cognitoUser.confirmPassword(email, newPassword, {
					onSuccess: () => {
						setLoading(false);
						console.log("Password reset successful!");
						// Redirect or show success message
					},
					onFailure: (err) => {
						setLoading(false);
						setErrorMessage(err.message || JSON.stringify(err));
					}
				});
			}
		};

		resetPasswordAsync();
	};

	return (
		<Box
			sx={{
				minHeight: "100vh", // Ensure full viewport height
				background: "linear-gradient(135deg, #f3f3f3, #f6f6f6)",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				padding: "1rem", // Add some padding for responsiveness
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
					Reset Your Password
				</Typography>
				<Typography variant="body2" align="center" paragraph sx={{ color: "#555", fontSize: "14px" }}>
					Enter your email and new password to reset your password.
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
								variant="outlined"
								sx={{ backgroundColor: "#f9f9f9" }}
							/>
						</Grid>

						{/* New Password Field */}
						<Grid item xs={12}>
							<TextField
								label="New Password"
								fullWidth
								margin="normal"
								type="password"
								{...control.register("newPassword")}
								error={!!errors.newPassword}
								helperText={errors.newPassword?.message}
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
								{loading ? <CircularProgress size={24} /> : "Reset Password"}
							</Button>
						</Grid>

						{/* Login Link */}
						<Grid item xs={12} textAlign="center" sx={{ marginTop: "1rem" }}>
							<Typography variant="body2">
								Remember your password?{" "}
								<Link href="/login" variant="body2" sx={{ color: "#0066cc", textDecoration: "none" }}>
									Login
								</Link>
							</Typography>
						</Grid>
					</Grid>
				</form>
			</Container>
		</Box>
	);
};

export default ResetPassword;
