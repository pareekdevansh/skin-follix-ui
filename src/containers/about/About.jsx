import React from "react";
import { Box, Typography, Paper, Button, List, ListItem, ListItemText, Stack, Card, CardContent, CardActions } from "@mui/material";
import { APP_NAME } from "../../constants/app-info"; // Ensure APP_NAME is imported

export default function AboutUsPage() {
  return (
    <Box sx={{ padding: "32px", backgroundColor: "#f9f9f9" }}>
      {/* Page Title */}
      <Typography variant="h3" sx={{ fontWeight: "bold", textAlign: "center", marginBottom: "16px", transition: "color 0.3s" }}>
        About Us
      </Typography>

      <Typography variant="h5" sx={{ textAlign: "center", marginBottom: "32px" }}>
        Welcome to {APP_NAME} - Your Trusted Partner in Dermatology
      </Typography>

      {/* About Us Overview Section */}
      <Box sx={{ marginBottom: "32px" }}>
        <Typography variant="body1" sx={{ lineHeight: 1.8, marginBottom: "16px", transition: "color 0.3s" }}>
          At {APP_NAME}, we take immense pride in being a leading dermatology hospital
          dedicated to delivering exceptional healthcare services in India. Our Motto is "We Cure because We Care".
          Our commitment is rooted in the core belief that every individual deserves the highest quality of care for their skin health.
        </Typography>
        <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
          We promise to provide:
        </Typography>
      </Box>

      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={3}
        sx={{ marginBottom: "32px", transition: "all 0.3s" }}
      >
        <Card
          sx={{
            maxWidth: 345,
            margin: "auto",
            boxShadow: 3,
            transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
            "&:hover": {
              transform: "translateY(-10px)",
              boxShadow: 6,
            },
          }}
        >
          <CardContent>
            <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: "12px" }}>
              Expert Dermatologists
            </Typography>
            <Typography variant="body2">
              Our team consists of highly skilled and experienced dermatologists who are committed to providing personalized and effective treatments.
            </Typography>
          </CardContent>
        </Card>

        <Card
          sx={{
            maxWidth: 345,
            margin: "auto",
            boxShadow: 3,
            transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
            "&:hover": {
              transform: "translateY(-10px)",
              boxShadow: 6,
            },
          }}
        >
          <CardContent>
            <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: "12px" }}>
              State-of-the-Art Facilities
            </Typography>
            <Typography variant="body2">
              Equipped with the latest technology and medical equipment to deliver services on par with global standards.
            </Typography>
          </CardContent>
        </Card>

        <Card
          sx={{
            maxWidth: 345,
            margin: "auto",
            boxShadow: 3,
            transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
            "&:hover": {
              transform: "translateY(-10px)",
              boxShadow: 6,
            },
          }}
        >
          <CardContent>
            <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: "12px" }}>
              Patient-Centric Approach
            </Typography>
            <Typography variant="body2">
              Your health and well-being are our top priorities. Our team ensures comfort and satisfaction at every step.
            </Typography>
          </CardContent>
        </Card>
      </Stack>

      <Box sx={{ marginTop: "32px", marginBottom: "32px" }}>
        <Typography variant="h5" sx={{ fontWeight: "bold", marginBottom: "16px" }}>
          Our Promise to You:
        </Typography>
        <List>
          <ListItem>
            <ListItemText
              primary="Expert Dermatologists"
              secondary="Our team stays updated with the latest advancements in dermatology to offer you the best care."
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="State-of-the-Art Facilities"
              secondary="We use the latest medical equipment to deliver services at global standards."
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Patient-Centric Approach"
              secondary="Your health and satisfaction are our priorities. We make sure your healthcare journey is positive."
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Comprehensive Services"
              secondary="From general dermatology consultations to specialized treatments, we cater to all your skin health needs."
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Focus on Education"
              secondary="We provide educational resources to help you make informed decisions about your skin health."
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Ethical Practices"
              secondary="We uphold the highest standards of integrity and ethical conduct in our practice."
            />
          </ListItem>
        </List>
      </Box>

     
    </Box>
  );
}
