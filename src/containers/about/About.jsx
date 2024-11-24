import React from "react";
import { Box, Typography, Card, CardContent, Stack, List, ListItem, ListItemText, Divider } from "@mui/material";
import { APP_NAME } from "../../constants/app-info"; // Ensure APP_NAME is imported correctly

export default function AboutUsPage() {
  return (
    <Box sx={{
      padding: "2rem",  paddingBottom : "4rem", paddingX: '5%', backgroundColor: "#f5f5f5",
      display: "flex",
      flexDirection: "column",
      margin: "auto",
      maxWidth: "100%",
      boxShadow: 4,
      transition: "box-shadow 0.3s ease-in-out",
      "&:hover": {
        boxShadow: 6,
      },
      gap: "16px"
    }}
    >
      <Typography variant="h4" sx={{ fontWeight: "bold", textAlign: "left", marginBottom: "16px" }}>
        About Us
      </Typography>

      <Card sx={{ paddingX: "5%", paddingY: '16px', backgroundColor: "#ffffff", boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)" }}>

        <Typography variant="h6" sx={{ textAlign: "left", marginBottom: "32px", fontWeight: 400 }}>
          Welcome to {APP_NAME} - Your Trusted Partner in Dermatology
        </Typography>

        <Box sx={{ marginBottom: "32px" }}>
          <Typography variant="body1" sx={{ lineHeight: 1.8, marginBottom: "16px" }}>
            At {APP_NAME}, we take immense pride in being a leading dermatology hospital
            dedicated to delivering exceptional healthcare services. Our Motto is "We Cure because We Care".
          </Typography>
          <Typography variant="h6" sx={{ textAlign: "left", marginBottom: "32px", fontWeight: 400 }}>
            We promise to provide:
          </Typography>
        </Box>

        <Stack direction={{ sm: "column", md: "row" }} spacing={3} sx={{ marginBottom: "32px", gap: "16px", display: "flex", justifyContent: "center" , alignItems: "center"}}>
          <Card
            sx={{
              maxWidth: 300,
              margin: "auto",
              boxShadow: 3,
              transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
              "&:hover": {
                transform: "translateY(-8px)",
                boxShadow: 6,
              },
            }}
          >
            <CardContent>
              <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: "12px" }}>
                Expert Dermatologists
              </Typography>
              <Typography variant="body2">
                Our team consists of highly skilled dermatologists dedicated to providing personalized treatments.
              </Typography>
            </CardContent>
          </Card>

          <Card
            sx={{
              maxWidth: 300,
              margin: "auto",
              boxShadow: 3,
              transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
              "&:hover": {
                transform: "translateY(-8px)",
                boxShadow: 6,
              },
            }}
          >
            <CardContent>
              <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: "12px" }}>
                State-of-the-Art Facilities
              </Typography>
              <Typography variant="body2">
                Equipped with the latest technology and equipment to provide services at global standards.
              </Typography>
            </CardContent>
          </Card>

          <Card
            sx={{
              maxWidth: 300,
              margin: "auto",
              boxShadow: 3,
              transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
              "&:hover": {
                transform: "translateY(-8px)",
                boxShadow: 6,
              },
            }}
          >
            <CardContent>
              <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: "12px" }}>
                Patient-Centric Approach
              </Typography>
              <Typography variant="body2">
                Your comfort and satisfaction are our top priorities throughout your healthcare journey.
              </Typography>
            </CardContent>
          </Card>


        </Stack>
      </Card>

      <Box sx={{
        border: "1px solid #e0e0e0", borderRadius: "8px", padding: "16px", backgroundColor: "#ffffff",
        paddingX: "5%", backgroundColor: "#ffffff", boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)"
      }}>
        <Typography variant="h5" sx={{ fontWeight: "bold", marginBottom: "16px" }}>
          Our Promise to You:
        </Typography>

        <List sx={{ paddingLeft: 0 }}>
          <ListItem sx={{ paddingLeft: 0 }}>
            <ListItemText
              primary="Expert Dermatologists"
              secondary="Our team stays updated with the latest advancements in dermatology to offer you the best care."
            />
          </ListItem>
          <Divider />
          <ListItem sx={{ paddingLeft: 0 }}>
            <ListItemText
              primary="State-of-the-Art Facilities"
              secondary="We use the latest medical equipment to deliver services at global standards."
            />
          </ListItem>
          <Divider />
          <ListItem sx={{ paddingLeft: 0 }}>
            <ListItemText
              primary="Patient-Centric Approach"
              secondary="Your health and satisfaction are our priorities. We make sure your healthcare journey is positive."
            />
          </ListItem>
          <Divider />
          <ListItem sx={{ paddingLeft: 0 }}>
            <ListItemText
              primary="Comprehensive Services"
              secondary="From general dermatology consultations to specialized treatments, we cater to all your skin health needs."
            />
          </ListItem>
          <Divider />
          <ListItem sx={{ paddingLeft: 0 }}>
            <ListItemText
              primary="Focus on Education"
              secondary="We provide educational resources to help you make informed decisions about your skin health."
            />
          </ListItem>
          <Divider />
          <ListItem sx={{ paddingLeft: 0 }}>
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
