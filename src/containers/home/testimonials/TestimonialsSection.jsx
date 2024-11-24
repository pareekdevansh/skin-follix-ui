import React from "react";
import { Box, Card, CardContent, Typography, Button, IconButton, CardMedia } from "@mui/material";
import { ArrowForward as ArrowForwardIcon } from "@mui/icons-material"; // Import the icon

const testimonials = [
    {
        quote: "This clinic has transformed my skin! Highly recommend.",
        testimonialUrl: "/assets/ic_acne.png",
    },
    {
        quote: "Amazing service! The treatments are truly effective.",
        testimonialUrl: "/assets/ic_acne.png",
    },
    {
        quote: "A life-changing experience! Great staff and environment.",
        testimonialUrl: "/assets/ic_acne.png",
    }
];

export default function TestimonialsSection() {
    return (
        <Box sx={{ marginBottom: "32px", paddingX: "5%" }}>
            {/* Flex container for Title and Button */}
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
                <Typography
                    variant="h5"
                    sx={{
                        fontWeight: "bold",
                        textAlign: "start",
                    }}
                >
                    What Our Patients Say:
                </Typography>
                <IconButton
                    onClick={() => {
                        window.location.href = "/testimonials"; // Redirect to full testimonials page
                    }}
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        padding: "8px",
                        fontWeight: "bold",
                        color: "primary.main",
                    }}
                >
                    <Typography variant="body2" sx={{ marginRight: "8px" }}>
                        Visit Page
                    </Typography>
                    <ArrowForwardIcon />
                </IconButton>
            </Box>

            {/* Testimonials Cards */}
            <Box
                sx={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", // Responsive grid
                    gap: "32px",
                    paddingY: "1rem",
                    paddingX: "10%",
                }}
            >
                {testimonials.map((testimonial, index) => (
                    <Card
                        key={index}
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "space-between",
                            padding: "16px",
                            backgroundColor: "#ffffff",
                            borderRadius: "12px",
                            boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
                            transition: "transform 0.3s ease, background-color 0.3s ease",
                            cursor: "pointer",
                            minWidth: "250px", // To ensure all cards have a consistent width
                            "&:hover": {
                                transform: "scale(1.05)",
                                backgroundColor: "rgba(0, 0, 0, 0.05)",
                            },
                        }}
                    >
                        <CardMedia
                            component="img"
                            image={testimonial.testimonialUrl}
                            alt={testimonial.quote}
                            sx={{
                                height: "200px",
                                width: "200px",
                                borderRadius: "8px",
                                marginBottom: "16px",
                                objectFit: "cover",
                            }}
                        />
                        <CardContent sx={{ textAlign: "center" }}>
                            <Typography variant="body2" color="textSecondary" sx={{ marginBottom: "16px" }}>
                                "{testimonial.quote}"
                            </Typography>
                            <Button
                                variant="text"
                                color="primary"
                                onClick={() => {
                                    window.location.href = `/testimonials/${testimonial.testimonialUrl}`;
                                }}
                                sx={{ fontWeight: "bold" }}
                            >
                                Read More →
                            </Button>
                        </CardContent>
                    </Card>
                ))}
            </Box>
        </Box>
    );
}
