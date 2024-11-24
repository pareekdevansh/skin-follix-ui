import React from "react";
import { Box, Typography, Grid, Link, Divider } from "@mui/material";
import { styled } from "@mui/system";
import { APP_NAME } from "../../constants/app-info";

const FooterContainer = styled(Box)(({ theme }) => ({
	background: `linear-gradient(180deg, ${theme?.palette?.grey?.[800] || "#333333"} 0%, ${
	  theme?.palette?.grey?.[900] || "#1a1a1a"
	} 100%)`, // Gradient from dark gray to blackish gray
	color: theme?.palette?.grey?.[300] || "#e0e0e0", // Light gray text for readability
	padding: "40px 5%",
	display: "flex",
	flexDirection: "column",
  }));
  
  
const FooterHeading = styled(Typography)(({ theme }) => ({
  fontWeight: theme?.typography?.fontWeightMedium || 600, // Slightly lighter than bold
  marginBottom: theme?.spacing?.(2) || "16px",
  fontSize: theme?.typography?.pxToRem?.(16) || "16px", // Slightly smaller
  color: theme?.palette?.primary?.main || "#2196f3", // Fallback to soft blue
}));

const FooterLink = styled(Link)(({ theme }) => ({
  display: "block",
  marginBottom: theme?.spacing?.(1) || "8px",
  textDecoration: "none",
  color: theme?.palette?.grey?.[300] || "#e0e0e0", // Lighter gray for links
  "&:hover": {
    color: theme?.palette?.primary?.light || "#64b5f6", // Softer hover effect
  },
}));

function getCurrentYear() {
  return new Date().getFullYear();
}

function Footer() {
  return (
    <FooterContainer>
      <Grid container spacing={3} justifyContent="space-between">
        {/* About Us Section */}
        <Grid item xs={12} sm={4} md={3}>
          <FooterHeading variant="h6">About Us</FooterHeading>
          <Typography variant="body2" lineHeight={1.6}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto
            laboriosam delectus quasi dicta tempora tempore cum sequi quis magnam
            excepturi harum nostrum accusamus nobis vero ex magni fuga molestiae.
          </Typography>
        </Grid>

        {/* Quick Links Section */}
        <Grid item xs={12} sm={4} md={3}>
          <FooterHeading variant="h6">Quick Links</FooterHeading>
          <Typography component="nav">
            <FooterLink href="/services">Services</FooterLink>
            <FooterLink href="/team">Team</FooterLink>
            <FooterLink href="/testimonials">Testimonials</FooterLink>
            <FooterLink href="/book-an-appointment">Book an Appointment</FooterLink>
          </Typography>
        </Grid>

        {/* Contact Us Section */}
        <Grid item xs={12} sm={4} md={3}>
          <FooterHeading variant="h6">Contact Us</FooterHeading>
          <Typography variant="body2" lineHeight={1.6}>
            <strong>Address:</strong> Lorem ipsum dolor sit amet, consectetur.
          </Typography>
          <Typography variant="body2" lineHeight={1.6}>
            <strong>Telephone:</strong> 12345
          </Typography>
          <FooterLink href="https://maps.google.com?q=Your+Address">
            Find us on Google Maps
          </FooterLink>
        </Grid>
      </Grid>

      <Divider sx={{ my: 3, backgroundColor: "rgba(255, 255, 255, 0.1)" }} />

      {/* Copyright Section */}
      <Box textAlign="center">
        <Typography variant="body2">
          Copyright © {getCurrentYear()}. {APP_NAME}. All Rights Reserved.
        </Typography>
      </Box>
    </FooterContainer>
  );
}

export default Footer;
