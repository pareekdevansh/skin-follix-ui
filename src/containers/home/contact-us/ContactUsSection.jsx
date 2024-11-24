import React from "react";
import { Box, Card, Typography, Button, IconButton, Stack, Link, CardContent } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import { APP_NAME } from "../../../constants/app-info";
import { ADDRESS_LINE1, ADDRESS_LINE2, ADDRESS_LINE3 } from "../../../constants/address";
import { CONTACT_PHONE_NUMBER } from "../../../constants/contact-info";

export default function ContactUsSection() {
    return (
        <Box sx={{ padding: "32px", backgroundColor: "#f9f9f9", paddingX: '5%' }}>
            <Card
                sx={{
                    padding: "24px",
                    backgroundColor: "#ffffff",
                    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                    borderRadius: "8px",
                }}
            >
                {/* Contact Us Link */}
                <Link
                    href="/contact-us"
                    underline="hover"
                    sx={{
                        display: "inline-block",
                        cursor: "pointer",
                        fontWeight: "bold",
                        fontSize: "1.25rem",
                        marginBottom: "16px",
                        transition: "color 0.3s ease",
                        "&:hover": {
                            color: "#00796b",
                            transform: "scale(1.05)",
                        },
                    }}
                >
                    Contact Us
                </Link>

                {/* Card Content */}
                <CardContent sx={{ paddingX: "5%" }}>
                    <Typography variant="body1" sx={{ marginBottom: "24px", lineHeight: 1.8 }}>
                        We are here to assist you with any inquiries, feedback, or requests you may have.
                        Please feel free to reach out to us using the contact details below.
                    </Typography>

                    {/* Contact Details */}
                    <Stack direction="column" spacing={2}>
                        {/* Location Address */}
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                            <IconButton sx={{ color: "#00796b" }}>
                                <LocationOnIcon />
                            </IconButton>
                            <Typography variant="body2" sx={{ marginX: "8px" }}>
                                    {ADDRESS_LINE1} <br />
                                    {ADDRESS_LINE2} <br />
                                    {ADDRESS_LINE3}
                            </Typography>

                        </Box>

                        <Box sx={{ display: "flex", alignItems: "center" }}>
                            <IconButton sx={{ color: "#00796b" }}>
                                <PhoneIcon />
                            </IconButton>
                            <Typography variant="body2" sx={{ marginX: "8px" }}>
                                Call Us: {CONTACT_PHONE_NUMBER}
                            </Typography>
                        </Box>
                    </Stack>
                </CardContent>
            </Card>
        </Box>
    );
}
