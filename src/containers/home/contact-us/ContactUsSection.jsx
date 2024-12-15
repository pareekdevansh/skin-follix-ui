import React from "react";
import { Box, Card, Typography, IconButton, Stack, Link, CardContent } from "@mui/material";
import ContactItems from "../../contact-us/ContactItems";


const ContactUsSection = () => {
    return (
        <Box sx={{ padding: "32px", paddingX: '5%' }}>
            <Card
                sx={{
                    padding: "24px",
                    backgroundColor: "#ffffff",
                    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                    borderRadius: "8px",
                }}
            >

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

                <CardContent sx={{ paddingX: "5%" }}>
                    <Typography variant="body1" sx={{ marginBottom: "24px", lineHeight: 1.8 }}>
                        We are here to assist you with any inquiries, feedback, or requests you may have.
                        Please feel free to reach out to us using the contact details below.
                    </Typography>

                    <Stack direction="column" spacing={2}>
                        <ContactItems />
                    </Stack>
                </CardContent>
            </Card>
        </Box>
    );
}
export default ContactUsSection