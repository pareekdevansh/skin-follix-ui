import React from "react";
import { Box, Typography, Grid, Card, CardContent, Divider, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { keyframes } from "@emotion/react";

const galleryPics = [
    {
        imgSrc: "/assets/gallery/clinic_front.jpg",
        imgAlt: "Clinic Front View with Parking",
        title: "Convenient Parking and Easy Access",
        description:
            "The clinic entrance is complemented by ample parking space, ensuring easy access for all patients. Designed to accommodate a variety of vehicles, the parking area provides a hassle-free experience, allowing you to focus on your visit. From the moment you arrive, convenience is prioritized to make your journey smooth and stress-free.",
    },
    {
        imgSrc: "/assets/gallery/skin_follics_clinic.jpg",
        imgAlt: "Clinic Entrance and Waiting Area",
        title: "Comfortable Waiting Area with Caring Staff",
        description:
            "Our waiting area is thoughtfully arranged to provide a calming environment for patients. With modern seating and a welcoming ambiance, it offers a space to relax before your appointment. Our courteous staff ensures that every visit is pleasant, reflecting our commitment to professional and attentive care.",
    },
    {
        imgSrc: "/assets/gallery/opd1.jpg",
        imgAlt: "OPD Consultation Room",
        title: "Modern OPD for Comprehensive Skin Care",
        description:
            "The OPD is equipped with advanced tools to facilitate accurate diagnosis and effective treatment plans. Designed with patient comfort and functionality in mind, the space ensures a seamless consultation experience. Every detail supports our aim to deliver high-quality dermatological care in a professional setting.",
    },
    {
        imgSrc: "/assets/gallery/doctor_treatment_light.jpg",
        imgAlt: "Doctor Treating Patient with Light Therapy",
        title: "Advanced Treatment Delivered with Expertise",
        description:
            "Our clinic specializes in treatments related to skin and hair transplant, performed by experienced dermatologists. These advanced procedure are tailored to each patient’s needs, addressing concerns such as acne and pigmentation. With precision and care, we aim to provide effective outcomes in a professional and comfortable environment.",
    },
];



// Animation keyframes
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const slideInLeft = keyframes`
  from { opacity: 0; transform: translateX(-50px); }
  to { opacity: 1; transform: translateX(0); }
`;

const slideInRight = keyframes`
  from { opacity: 0; transform: translateX(50px); }
  to { opacity: 1; transform: translateX(0); }
`;

// Component
const Gallery = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    return (
        <Box
            sx={{
                padding: "2rem",
                paddingBottom: "4rem",
                paddingX: "5%",
                backgroundColor: "#f5f5f5",
                display: "flex",
                flexDirection: "column",
                margin: "auto",
                maxWidth: "100%",
                animation: `${fadeIn} 1.5s ease-in-out`,
            }}
        >
            <Typography
                variant="h4"
                sx={{
                    fontWeight: "bold",
                    textAlign: "left",
                    marginBottom: "32px",
                    color: "#333",
                }}
            >
                Explore Our Clinic's Gallery
            </Typography>

            <Grid container spacing={4} sx={{ marginBottom: "32px" }}>
                {galleryPics.map((pic, index) => (
                    <Grid item xs={12} key={index}>
                        <Card
                            sx={{
                                display: "flex",
                                flexDirection: isMobile
                                    ? "column"
                                    : index % 2 === 0
                                        ? "row"
                                        : "row-reverse",
                                alignItems: "center",
                                boxShadow: 3,
                                width: "100%",
                                animation: `${index % 2 === 0 ? slideInLeft : slideInRight} 1s ease-in-out`,
                            }}
                        >
                            <Box
                                component="img"
                                src={pic.imgSrc}
                                alt={pic.imgAlt}
                                sx={{
                                    width: isMobile ? "100%" : "45%",
                                    maxHeight: "500px",
                                    borderRadius: isMobile ? "8px 8px 0 0" : "8px 0 0 8px",
                                    objectFit: "cover",
                                    objectPosition: "top center",
                                    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                                }}
                            />
                            <CardContent
                                sx={{
                                    width: isMobile ? "100%" : "55%",
                                    textAlign: "left",
                                    padding: "24px",
                                }}
                            >
                                <Typography
                                    variant="h6"
                                    sx={{
                                        fontWeight: "bold",
                                        marginBottom: "16px",
                                        fontSize: "1.25rem",
                                    }}
                                >
                                    {pic.title}
                                </Typography>
                                <Typography
                                    variant="body1"
                                    sx={{ lineHeight: 1.8, fontSize: "1rem" }}
                                >
                                    {pic.description}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>

            <Divider sx={{ marginBottom: "32px" }} />

            <Typography
                variant="h5"
                sx={{
                    fontWeight: "bold",
                    textAlign: "center",
                    marginBottom: "16px",
                    color: "#333",
                }}
            >
                Experience the Difference at SkinFollics
            </Typography>
            <Typography
                variant="body1"
                sx={{
                    textAlign: "center",
                    lineHeight: 1.8,
                    fontSize: "1rem",
                }}
            >
                At SkinFollics, we are committed to providing the highest standard of
                dermatological care. From advanced treatments like light therapy and acne
                scar removal to comprehensive skin consultations, our experienced dermatologists
                ensure that every patient receives the best care possible.
            </Typography>
        </Box>
    );
};

export default Gallery;
