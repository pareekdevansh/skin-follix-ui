import React from "react";
import { Box, Card, Typography, Button, Link, CardContent } from "@mui/material";
import { APP_NAME } from "../../../constants/app-info"; // Make sure APP_NAME is imported if used

export default function AboutSection() {
    return (
        <Box sx={{ padding: "32px",  paddingX: "5%" }}>
            <Card
                sx={{
                    padding: "24px",
                    backgroundColor: "#ffffff",
                    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                    borderRadius: "8px",
                }}
            >
                <Link
                    href="/about"
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
                    About {APP_NAME}
                </Link>
                <CardContent sx={{ paddingX: "5%" }}>
                    <Typography variant="body1" sx={{ marginBottom: "24px", lineHeight: 1.8 }}>
                        At {APP_NAME}, we are committed to providing personalized skincare treatments that help you achieve healthy, glowing skin. Our team of expert dermatologists and skincare professionals use advanced technology to deliver the best results for acne, hair loss, and other skin conditions.
                    </Typography>
                </CardContent>
            </Card>
        </Box>
    );
}
