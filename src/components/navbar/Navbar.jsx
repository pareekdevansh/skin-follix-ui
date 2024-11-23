import React from "react";
import "./navbar.css";
import { useState } from "react";
import { RiCloseLine, RiMenu3Line } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { APP_NAME } from "../../constants/app-info";
const Menu = () => {
	return (
		<>
			<p>
				<a href="/about">About</a>
			</p>
			<p>
				<a href="/contact-us">Contact</a>
			</p>
			<p>
				<a href="/services">Services</a>
			</p>
			<p>
				<a href="/book-an-appointment">Book An Appointment</a>
			</p>
			<p>
				<a href="/team">Team</a>
			</p>
			<p>
				<a href="/testimonials">Testimonials</a>
			</p>
		</>
	);
};
const UserProfileMenu = () => {
	return (
		<>
			<p>
				<a href="/profile/:userId">Profile</a>
			</p>
			<p>
				<a href="/appointments/:userId">Recent Appointments</a>
			</p>
			<button type="button">Log Out</button>
		</>
	);
};
function Navbar() {
	const [activeMenu, setActiveMenu] = useState(false);
	const [activeUserProfileMenu, setActiveUserProfileMenu] = useState(false);
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	return (
		<div className="navbar navbar-gradient_bg">
			<div className="navbar-links">
				<div className="navbar-links-logo">
					<p>
						<a href="/">{APP_NAME}</a>
					</p>
				</div>
				<div className="navbar-links-container">
					<Menu />
				</div>
			</div>
			{/* <div className="navbar-user">
				{isLoggedIn ? (
					<div className="navbar-user-profile-menu">
						{activeUserProfileMenu ? (
							<RiCloseLine
								color="#fff"
								size={27}
								onClick={() => setActiveUserProfileMenu(false)}
							/>
						) : (
							<CgProfile
								color="#fff"
								size={27}
								onClick={() => setActiveUserProfileMenu(true)}
							/>
						)}
						{activeUserProfileMenu ? (
							<div className="navbar-user-profile-menu-container">
								<UserProfileMenu />
							</div>
						) : null}
					</div>
				) : (
					<div className="navbar-user-guest">
						<p
							onClick={() => {
								window.location.replace("/login");
							}}
						>
							Sign in
						</p>
						<button
							type="button"
							onClick={() => {
								window.location.replace("/register");
							}}
						>
							Sign up
						</button>
					</div>
				)}
			</div> */}

			<div className="navbar-menu">
				{activeMenu ? (
					<RiCloseLine
						color="#fff"
						size={27}
						onClick={() => setActiveMenu(false)}
					/>
				) : (
					<RiMenu3Line
						color="#fff"
						size={27}
						onClick={() => setActiveMenu(true)}
					/>
				)}
				{activeMenu && (
					<div className="navbar-menu-container scale-up-center">
						<div className="navbar-menu-container-links">
							<Menu />
							{/* {!isLoggedIn && (
								<div className="navbar-menu-container-links-sign">
									<p
										onClick={() => {
											window.location.replace("/login");
										}}
									>
										Sign in
									</p>
									<button
										type="button"
										onClick={() => {
											window.location.replace("/register");
										}}
									>
										Sign up
									</button>
								</div>
							)} */}
						</div>
					</div>
				)}
			</div>
		</div>
	);
}

export default Navbar;
