import React from "react";
import { Box, Card, Typography, IconButton, Stack, Link, CardContent } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import { ADDRESS_LINE1, ADDRESS_LINE2, ADDRESS_LINE3 } from "../../constants/address";
import { CONTACT_PHONE_NUMBER } from "../../constants/contact-info";

export default function ContactUs() {
	return (
		<Box sx={{ padding: "32px", backgroundColor: "#f4f4f4" }}>

			<Box
				sx={{
					display: "flex",
					flexDirection: { xs: "column", md: "row" },
					justifyContent: "space-between",
					gap: 4,
					height: "100%", // Responsive height
					padding: { xs: "16px", md: "32px" },
				}}
			>

				<Box
					sx={{
						flex: 1,
						backgroundColor: "#ffffff",
						borderRadius: "8px",
						boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
						padding: "24px",
					}}

				>
					<Typography variant="h6"
						sx={{
							fontWeight: "bold",
							fontSize: "1.5rem",
							marginBottom: "16px",
							color: "#333",
						}}>
						Find Us on the Map
					</Typography>
					<Box
						sx={{
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							width: "100%",
							maxWidth: "1200px", // Optional: Limit max width for better design
							height: "50vh", // Responsive height
							padding: "16px", // Add padding for smaller screens
							borderRadius: "8px",
							overflow: "hidden",
							position: "relative",
							borderRadius: "8px",
							boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
						}}
					>

						<iframe
							title="Map Location"
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14020.648141307789!2d77.1994299470883!3d28.534848962754758!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce21e7d306d03%3A0x94b8ccb323d7648!2sMalviya%20Nagar%2C%20New%20Delhi%2C%20Delhi%20110017!5e0!3m2!1sen!2sin!4v1732464868683!5m2!1sen!2sin"
							frameBorder="0"
							allowFullScreen=""
							aria-hidden="false"
							tabIndex="0"
							style={{
								position: "absolute", // To ensure the iframe covers its parent
								top: 0,
								left: 0,
								width: "100%",
								height: "100%",
								borderRadius: "8px",
							}}
						></iframe>

					</Box>


				</Box>

				<Box
					sx={{
						flex: 1,
						backgroundColor: "#ffffff",
						borderRadius: "8px",
						boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
						padding: "24px",
					}}
				>
					<Typography
						sx={{
							fontWeight: "bold",
							fontSize: "1.5rem",
							marginBottom: "16px",
							color: "#333",
						}}
					>
						Contact Us
					</Typography>

					<CardContent>
						<Typography variant="body1" sx={{ marginBottom: "16px", lineHeight: 1.8, color: "#555" }}>
							We are here to assist you with any inquiries, feedback, or requests you may have.
							Please feel free to reach out to us using the contact details below.
						</Typography>

						<Stack direction="column" spacing={3}>
							<Stack direction="row" spacing={2} alignItems="center">
								<IconButton sx={{ color: "#00796b" }}>
									<LocationOnIcon />
								</IconButton>
								<Typography variant="body2" sx={{ color: "#555" }}>
									<b>Address:</b> <br />
									{ADDRESS_LINE1} <br />
									{ADDRESS_LINE2} <br />
									{ADDRESS_LINE3}
								</Typography>
							</Stack>
							<Stack direction="row" spacing={2} alignItems="center">
								<IconButton sx={{ color: "#00796b" }}>
									<PhoneIcon />
								</IconButton>
								<Typography variant="body2" sx={{ color: "#555" }}>
									<b>Call Us:</b> {CONTACT_PHONE_NUMBER}
								</Typography>
							</Stack>
							<Stack direction="row" spacing={2} alignItems="center">
								<IconButton sx={{ color: "#00796b" }}>
									<EmailIcon />
								</IconButton>
								<Typography variant="body2" sx={{ color: "#555" }}>
									<b>Email:</b> <Link href="mailto:loremepsum@gmail.com">loremepsum@gmail.com</Link>
								</Typography>
							</Stack>
							<Stack direction="row" spacing={2} alignItems="center">
								<Typography variant="body2" sx={{ color: "#555" }}>
									<b>Hospital Timings:</b>
									<br />
									Monday to Sunday: 11:00 AM - 7:00 PM
									<br />
									<i>Closed on Wednesdays</i>
								</Typography>

							</Stack>
						</Stack>
					</CardContent>
				</Box>
			</Box>
		</Box>
	);
}
