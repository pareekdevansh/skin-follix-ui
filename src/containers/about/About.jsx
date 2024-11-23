import React from "react";
import "./about.css";
import { APP_NAME } from "../../constants/app-info";
function About() {
	return (
		<div className="about">
			<h1 className="text-center">About Us</h1>
			<h2 className="text-center">
				Welcome to {APP_NAME} - Your Trusted Partner in Dermatology
			</h2>
			<p>
				At {APP_NAME}, we take immense pride in being a leading dermatology hospital
				dedicated to delivering exceptional healthcare services in India. Our
				Motto is "We Cure because We Care". Our commitment is rooted in the core
				belief that every individual deserves the highest quality of care for
				their skin health. Our Promise:
			</p>
			<ol>
				<li>
					Expert Dermatologists: Our team consists of highly skilled and
					experienced dermatologists who are committed to providing personalized
					and effective treatments. They stay updated with the latest
					advancements in dermatology to offer you the best care possible.
				</li>
				<li>
					State-of-the-Art Facilities: {APP_NAME} is equipped with state-of-the-art
					facilities and advanced technology to ensure accurate diagnostics and
					effective treatments. We invest in the latest medical equipment to
					deliver services at par with global standards.
				</li>
				<li>
					Patient-Centric Approach: Your health and well-being are our top
					priorities. We follow a patient-centric approach, where your comfort
					and satisfaction are of utmost importance. Our friendly and caring
					staff is dedicated to making your healthcare journey smooth and
					positive.
				</li>
				<li>
					Comprehensive Services: From general dermatology consultations to
					specialized treatments, {APP_NAME} offers a comprehensive range of
					services. Whether you're dealing with common skin issues or require
					advanced procedures, we are here to address all your dermatological
					needs.
				</li>
				<li>
					Focus on Education: We believe that informed patients make healthier
					decisions. As part of our commitment to transparency, we provide
					educational resources to help you understand your skin health better.
					Our dermatologists will guide you through your treatment options,
					ensuring you are well-informed every step of the way.
				</li>
				<li>
					Ethical Practices: Integrity and ethics form the foundation of our
					medical practice. We uphold the highest standards of professionalism
					and ethical conduct. You can trust {APP_NAME} for transparent and honest
					healthcare services. Your Health, Our Priority At {APP_NAME}, we
					understand the significance of skin health in your overall well-being.
					Our mission is to deliver quality dermatological care that goes beyond
					expectations. Your journey to healthier skin begins with us. Come,
					experience the excellence of dermatological care at {APP_NAME}. Your
					health is our promise!
				</li>
			</ol>
		</div>
	);
}

export default About;
