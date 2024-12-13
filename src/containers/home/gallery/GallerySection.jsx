import React from "react";
import { Box, Typography, IconButton, Card, CardContent, CardMedia } from "@mui/material";
import { ArrowForward as ArrowForwardIcon } from "@mui/icons-material"; // Import the icon
import Carousel from "../../../components/carousel/Carousel";

const galleryPics = [
    {
        type: "image",
        src: "assets/gallery/clinic_front.jpeg",
        alt: "Clinic Front View with Parking",
    },
    {
        type: "image",
        src: "assets/gallery/skin_follics_clinic.jpeg",
        alt: "Clinic Entrance and Waiting Area",
    },
    {
        type: "image",
        src: "assets/gallery/opd1.jpeg",
        alt: "OPD Consultation Room",
    },
    {
        type: "image",
        src: "assets/gallery/doctor_treatment_light.jpeg",
        alt: "Doctor Treating Patient with Light Therapy",
    },
];

const descriptionText = `
Welcome to our Skin Follix Clinic, where modern skincare meets comfort. Our state-of-the-art facilities provide a welcoming environment, 
from our beautifully designed waiting areas to cutting-edge treatment rooms. With advanced technologies and expert professionals, 
we offer personalized care tailored to your needs. Explore our gallery to see the ambiance, equipment, and our commitment to your skincare journey. 
Discover how we combine luxury and technology to provide the best care for your skin.
`;

export default function GallerySection() {
    return (
        <Box sx={{ marginBottom: "32px", paddingX: '5%', }}>

            <Card sx={{ boxShadow: 3, borderRadius: 2, overflow: "hidden" }}>
                <CardContent>
                    {/* Flex container for Title and Button */}
                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
                        <Typography
                            variant="h5"
                            sx={{
                                fontWeight: "bold",
                                textAlign: "start",
                                paddingBottom: "16px",
                            }}
                        >
                            Explore Our Clinic Gallery:
                        </Typography>
                        <IconButton
                            onClick={() => {
                                window.location.href = "/gallery"; // Redirect to full gallery page
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
                                Visit Gallery
                            </Typography>
                            <ArrowForwardIcon />
                        </IconButton>
                    </Box>

                    {/* Gallery Content with Carousel and Description */}
                    <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, gap: "24px" }}>
                        {/* Carousel Component for Gallery Images */}
                        <Box sx={{ width: { xs: "100%", md: "50%" }, paddingBottom: { xs: "24px", md: "0" } }}>
                            <Carousel carouselItems={galleryPics} />
                        </Box>

                        {/* Description Text */}
                        <Box
                            sx={{
                                width: { xs: "100%", md: "50%" },
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                alignItems: "flex-start",
                                padding: { xs: "16px", md: "24px" },
                                borderRadius: "12px",
                            }}
                        >
                            <Typography
                                variant="body1"
                                sx={{
                                    fontSize: "1rem",
                                    lineHeight: 1.8,
                                    color: "text.primary",
                                    fontWeight: "400",
                                }}
                            >
                                {descriptionText}
                            </Typography>
                        </Box>
                    </Box>
                </CardContent>
            </Card>
        </Box>

    );
}
