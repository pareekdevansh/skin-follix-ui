import React from "react";
import { Box, Card, CardContent, CardMedia, Typography, Button } from "@mui/material";

const treatments = [
    {
        name: "Acne Treatment",
        image: "/assets/ic_acne.png",
        shortDescription: "Effective treatments for clear and healthy skin.",
        treatmentUrl: "acne-treatment",
    },
    {
        name: "Hair Loss Treatment",
        image: "/images/hair-loss-treatment.jpg",
        shortDescription: "Comprehensive solutions to restore your hair.",
        treatmentUrl: "hair-loss-treatment",
    },
    {
        name: "Laser Treatments",
        image: "/images/laser-treatments.jpg",
        shortDescription: "Advanced laser treatments for flawless skin.",
        treatmentUrl: "laser-treatments",
    },
    // Add more treatments here...
];export default function TreatmentsList() {
    return (
        <Box sx={{ marginBottom: "32px" }}>
            <Typography
                variant="h5"
                sx={{
                    fontWeight: "bold",
                    textAlign: "center",
                    marginBottom: "16px",
                    textAlign: "start",
                }}
            >
                Explore All Treatments:
            </Typography>
            <Box
                sx={{
                    display: "flex",
                    flexWrap: "nowrap", // Prevent wrapping of the items
                    overflowX: "auto", // Enable horizontal scrolling
                    gap: "32px",
                    paddingY: '1rem',
                    paddingX: '10%',
                    "&::-webkit-scrollbar": { // Optional, for customizing scrollbar
                        height: "8px",
                    },
                    "&::-webkit-scrollbar-thumb": {
                        backgroundColor: "rgba(0, 0, 0, 0.2)",
                        borderRadius: "4px",
                    }
                }}
            >
                {treatments.map((treatment, index) => (
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
                                "& .read-more-button": {
                                    display: "block"
                                },
                            }
                        }}
                    >
                        <CardMedia
                            component="img"
                            image="/assets/ic_acne.png"
                            alt={treatment.name}
                            sx={{
                                height: "200px",
                                width: "200px",
                                borderRadius: "8px",
                                marginBottom: "16px",
                                objectFit: "cover",
                            }}
                        />
                        <CardContent sx={{ textAlign: "center" }}>
                            <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: "8px" }}>
                                {treatment.name}
                            </Typography>
                            <Typography variant="body2" color="textSecondary">
                                {treatment.shortDescription}
                            </Typography>
                        </CardContent>
                        <Button
                            className="read-more-button"
                            variant="text"
                            sx={{
                                alignSelf: "center",
                                marginTop: "16px",
                                display: "none",
                                color: "primary.main",
                                fontWeight: "bold",
                            }}
                            onClick={() => {
                                window.location.href = `/treatments/${treatment.treatmentUrl}`;
                            }}
                        >
                            Read More →
                        </Button>
                    </Card>
                ))}
            </Box>
        </Box>
    );
}
