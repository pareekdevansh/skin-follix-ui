import React from "react";
import { Card, Typography, Button, Box } from "@mui/material";

export default function AboutSection() {
    return (
                
        <Box sx={{ marginBottom: "32px",paddingX: "5%" }}>

        <Card
            sx={{
                padding: "2rem",
                backgroundColor: "#ffffff",
                boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
                borderRadius: "12px",
            }}
        >
            <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: "8px" }}>
                About SkinFollix
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: "16px" }}>
                At SkinFollix, we are committed to providing personalized skincare treatments that help you achieve healthy, glowing skin. Our team of expert dermatologists and skincare professionals use advanced technology to deliver the best results for acne, hair loss, and other skin conditions.
            </Typography>
            <Typography variant="body1">
                Learn more about our mission, values, and treatments on our{" "}
                <Button
                    variant="text"
                    color="primary"
                    onClick={() => (window.location.href = "/about")}
                >
                    About
                </Button>
                page.
            </Typography>
        </Card>
        </Box>
        )
}