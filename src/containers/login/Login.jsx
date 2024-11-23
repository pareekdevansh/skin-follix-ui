import React from "react";
import "./login.css";
import { MdEmail } from "react-icons/md";
import { IoMdLock } from "react-icons/io";
import { Button } from "../../components";
function Login() {
	return (
		<div className="login">
			<form
				action=""
				className="login-container card"
			>
				<h1>Sign In</h1>
				<h5>Enter Your Account Details Here</h5>
				<div className="input-box">
					<input
						type="text"
						placeholder="Email"
						required
					/>
					<MdEmail className="icon" />
				</div>
				<div className="input-box">
					<input
						type="password"
						placeholder="Password"
						required
					/>
					<IoMdLock className="icon" />
				</div>
				<div className="remember-forget">
					<label>
						<input type="checkbox" /> Remember me
					</label>
					<a
						className="nav-link"
						href="/forgot-password"
					>
						Forget Password
					</a>
				</div>
				<Button
					text={"Sign In"}
					onClick={() => {}}
				/>
				<p>
					Don't have an Account?{" "}
					<a
						className="nav-link"
						href="/register"
					>
						Register
					</a>
				</p>
			</form>
			{/* </div> */}
		</div>
	);
}

export default Login;
