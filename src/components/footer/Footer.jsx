import React from "react";
import "./footer.css";
import { APP_NAME } from "../../constants/app-info";
function Footer() {
	return (
		<div className="footer-section">
			<div className="footer-main-section">
				<div className="footer-about-container">
					<p id="footer-heading">About Us</p>
					<p>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum
						architecto laboriosam delectus quasi dicta tempora tempore cum,
						sequi quis magnam excepturi harum nostrum accusamus nobis vero ex
						magni fuga molestiae, facilis nesciunt qui. Atque, autem!
					</p>
				</div>
				<div className="footer-quick-links-container">
					<p id="footer-heading">Quick Links</p>

					<p>
						<a href="/services">Services</a>
					</p>

					<p>
						<a href="/team">Team</a>
					</p>
					<p>
						<a href="/testimonials">Testimonials</a>
					</p>
					<p>
						<a href="/book-an-appointment">Book An Appointment</a>
					</p>
				</div>
				<div className="footer-contact-us-container">
					<p id="footer-heading">Contact Us</p>
					<p>address : Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
					<p>telephone : 12345</p>
					<p>address link</p>
				</div>
			</div>

			<div className="copyright-section">
				Copyright © 2024. {APP_NAME}. All Rights Reserved.
			</div>
		</div>
	);
}

export default Footer;
