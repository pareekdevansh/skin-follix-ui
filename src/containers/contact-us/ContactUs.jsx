import React from "react";
import "./contact-us.css";
function ContactUs() {
	return (
		<div className="contact-us">
			<div className="contact-us-card card">
				<div className="map-location">
					<img
						src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLferrM7dJlm37D4mfqLTVzdvwtoKFPh0hQkF2NcJKyA&s"
						alt="google map location"
					/>
				</div>
				<div className="contact-descreption">
					<p>
						<b>Address: </b>Lorem, ipsum dolor sit amet consectetur adipisicing
						elit. Illum ipsa est vel fuga in quae error provident cupiditate
						odio deserunt et, deleniti nihil maiores soluta exercitationem enim
						distinctio obcaecati nesciunt.
					</p>
					<p>
						<b>email address: </b>{" "}
						<a href="mailto:loremepsum@gmail.com">loremepsum@gmail.com</a>
					</p>
					<p>
						<b>Tel : </b>123456
						<p>
							<b>Hospital Timings :</b>
							<br />
							10:00-17:00 in Winters
							<br />
							09:00-16:00 in Summer
						</p>
						<p>
							<b></b>
						</p>
						<p>
							<b></b>
						</p>
						<p>
							<b></b>
						</p>
					</p>
				</div>
			</div>
		</div>
	);
}

export default ContactUs;
