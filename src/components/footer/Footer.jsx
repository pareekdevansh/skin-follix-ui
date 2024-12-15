import React from "react";
import { Box, Typography, Grid, Link, Divider } from "@mui/material";
import { styled } from "@mui/system";
import { APP_NAME } from "../../constants/app-info";
import { FULL_ADDRESS, LOCATION_LINK } from "../../constants/address";
import { CONTACT_PHONE_NUMBER } from "../../constants/contact-info";
import { footerLinkItems } from "./constants";
import { trackCallEvent, trackLocationClick } from "../../analytics";

const FooterContainer = styled(Box)(({ theme }) => ({
  background: `linear-gradient(180deg, ${theme?.palette?.grey?.[800] || "#333333"} 0%, ${theme?.palette?.grey?.[900] || "#1a1a1a"
    } 100%)`,
  color: theme?.palette?.grey?.[300] || "#e0e0e0",
  padding: "40px 5%",
  display: "flex",
  flexDirection: "column",
}));


const FooterHeading = styled(Typography)(({ theme }) => ({
  fontWeight: theme?.typography?.fontWeightMedium || 600,
  marginBottom: theme?.spacing?.(2) || "16px",
  fontSize: theme?.typography?.pxToRem?.(16) || "16px",
  color: theme?.palette?.primary?.main || "#2196f3",
}));

const FooterLink = styled(Link)(({ theme }) => ({
  display: "block",
  marginBottom: theme?.spacing?.(1) || "8px",
  textDecoration: "none",
  color: theme?.palette?.grey?.[300] || "#e0e0e0",
  "&:hover": {
    color: theme?.palette?.primary?.light || "#64b5f6",
  },
}));

function getCurrentYear() {
  return new Date().getFullYear();
}

function Footer() {
  // const navigation = useNavigate();

  return (
    <FooterContainer>
      <Grid key={"footer-grid"} container spacing={3} justifyContent="space-between">

        <Grid key={"footer-about-us"} item xs={12} sm={4} md={3}>
          <FooterHeading variant="h6">About Us</FooterHeading>
          <Typography variant="body2" lineHeight={1.6}>
            At {APP_NAME}, we take immense pride in being a leading dermatology hospital dedicated to delivering exceptional healthcare services.
            Our Motto is "We Cure because We Care".</Typography>
        </Grid>

        <Grid key={"footer-quick-links"} item xs={12} sm={4} md={3}>
          <FooterHeading variant="h6">Quick Links</FooterHeading>
          <Typography component="nav">
            {footerLinkItems.map((item) => (
              <FooterLink key={item.title} href={item.link}>
                {item.title}
              </FooterLink>
            ))}
          </Typography>
        </Grid>

        <Grid key={"footer-contact-us"} item xs={12} sm={4} md={3}>
          <FooterHeading variant="h6">Contact Us</FooterHeading>
          <Typography variant="body2" lineHeight={1.6}>
            <strong>Address:</strong> {FULL_ADDRESS}
          </Typography>
          <Typography variant="body2" lineHeight={1.6}>
            <strong>Contact:</strong> <FooterLink style={{ display: "inline" }} href={`tel:+91${CONTACT_PHONE_NUMBER}`} onClick={trackCallEvent}>+91-{CONTACT_PHONE_NUMBER}</FooterLink>
          </Typography>
          <FooterLink href={LOCATION_LINK} onClick={trackLocationClick}>
            Find us on Google Maps
          </FooterLink>
        </Grid>
      </Grid>

      <Divider sx={{ my: 3, backgroundColor: "var(--divider-color)" }} />

      <Box key={"footer-copyright"} textAlign="center">
        <Typography variant="body2">
          Copyright © {getCurrentYear()}. {APP_NAME}. All Rights Reserved.
        </Typography>
      </Box>
    </FooterContainer>
  );
}

export default Footer;
