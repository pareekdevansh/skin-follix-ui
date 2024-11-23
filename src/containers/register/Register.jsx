import React from "react";
import "./register.css";
import { FaUser } from "react-icons/fa";
import { MdCall } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { IoMdLock } from "react-icons/io";
import { Button } from "../../components/";

function Register() {
	return (
		<div className="register">
			<form className="register-container card">
				<h1>Sign Up</h1>
				<h5>Enter Following Details to Register</h5>
				<div className="register-input-box">
					<input
						type="text"
						placeholder="Name"
						required
					/>
					<FaUser className="register-icons" />
				</div>
				<div className="register-input-box">
					<input
						type="tel"
						placeholder="Mobile Number"
						required
					/>
					<MdCall className="register-icons" />
				</div>
				<div className="register-input-box">
					<input
						type="email"
						placeholder="Email"
						required
					/>
					<MdEmail className="register-icons" />
				</div>
				<div className="register-input-box">
					<input
						type="password"
						placeholder="Password"
						required
					/>
					<IoMdLock className="register-icons" />
				</div>
				<div className="register-input-box">
					<input
						type="password"
						placeholder="Confirm Password"
						required
					/>
					<IoMdLock className="register-icons" />
				</div>
				<Button
					text={"Sign Up"}
					onClick={() => {}}
				/>
				<p>
					Already have an Account?{" "}
					<a
						className="nav-link"
						href="/login"
					>
						SignIn
					</a>
				</p>
			</form>
		</div>
	);
}

export default Register;
