import React from "react";
import "./forgot-password.css";
import { MdEmail } from "react-icons/md";
import { Button } from "../../components";
function ForgotPassword() {
	return (
		<div className="forgot">
			<form className="forgot-container card">
				<h1>Forgot Password</h1>
				<h5>Enter Following Details to Reset Your Password</h5>
				<div className="forgot-input-box">
					<input
						type="email"
						placeholder="Email Address"
						required
					/>
					<MdEmail className="forgot-icons" />
				</div>
				<Button
					text={"Generate Reset Link"}
					onClick={() => {}}
				/>
			</form>
		</div>
	);
}

export default ForgotPassword;
