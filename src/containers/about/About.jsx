import React from "react";
import { Box, Typography, Card, CardContent, Stack, List, ListItem, ListItemText, Divider } from "@mui/material";
import { APP_NAME } from "../../constants/app-info"; // Ensure APP_NAME is imported correctly

export default function AboutUsPage() {
  return (
    <Box sx={{
      padding: "2rem", paddingBottom: "4rem", paddingX: '5%', backgroundColor: "#f5f5f5",
      display: "flex", flexDirection: "column", margin: "auto", maxWidth: "100%",
      boxShadow: 4, transition: "box-shadow 0.3s ease-in-out", "&:hover": { boxShadow: 6 },
      gap: "16px"
    }}>
      <Typography variant="h4" sx={{ fontWeight: "bold", textAlign: "left", marginBottom: "16px" }}>
        About Us
      </Typography>

      <Card sx={{ paddingX: "5%", paddingY: '16px', backgroundColor: "#ffffff", boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)" }}>
        <Typography variant="h6" sx={{ textAlign: "left", marginBottom: "32px", fontWeight: 400 }}>
          Welcome to {APP_NAME} - Your Trusted Partner in Dermatology
        </Typography>

        <Typography variant="body1" sx={{ lineHeight: 1.8, marginBottom: "16px" }}>
          At {APP_NAME}, we take pride in being a leading dermatology hospital committed to providing top-tier healthcare services. Our motto, "We Cure because We Care," underscores our dedication to delivering personalized treatments with a patient-first approach.
        </Typography>

        <Typography variant="h6" sx={{ textAlign: "left", marginBottom: "32px", fontWeight: 400 }}>
          What You Can Expect from Us:
        </Typography>

        <Stack direction={{ sm: "column", md: "row" }} spacing={3} sx={{ marginBottom: "32px", gap: "16px", display: "flex", justifyContent: "center", alignItems: "center" }}>
          <Card sx={{ maxWidth: 300, margin: "auto", boxShadow: 3, transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out", "&:hover": { transform: "translateY(-8px)", boxShadow: 6 } }}>
            <CardContent>
              <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: "12px" }}>
                Expertise in Dermatology
              </Typography>
              <Typography variant="body2">
                Our highly skilled dermatologists are continuously trained to offer you the most up-to-date and effective treatments for your skin health.
              </Typography>
            </CardContent>
          </Card>

          <Card sx={{ maxWidth: 300, margin: "auto", boxShadow: 3, transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out", "&:hover": { transform: "translateY(-8px)", boxShadow: 6 } }}>
            <CardContent>
              <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: "12px" }}>
                Cutting-Edge Facilities
              </Typography>
              <Typography variant="body2">
                Equipped with the latest medical technologies, we ensure that all our treatments are at the forefront of global standards.
              </Typography>
            </CardContent>
          </Card>

          <Card sx={{ maxWidth: 300, margin: "auto", boxShadow: 3, transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out", "&:hover": { transform: "translateY(-8px)", boxShadow: 6 } }}>
            <CardContent>
              <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: "12px" }}>
                Patient-Focused Care
              </Typography>
              <Typography variant="body2">
                Your well-being is at the center of everything we do. We are committed to ensuring a comfortable and supportive experience throughout your journey with us.
              </Typography>
            </CardContent>
          </Card>
        </Stack>
      </Card>

      <Card sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, alignItems: "center", padding: "24px", backgroundColor: "#ffffff", boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", marginBottom: "24px", gap: "16px" }}>
        <Box component="img" src="assets/dr_vipul.jpg" alt="Founder" sx={{ width: { xs: "100%", md: "200px" }, height: "auto", borderRadius: "8px", objectFit: "cover" }} />
        <CardContent sx={{ textAlign: { xs: "center", md: "left" }, flex: 1 }}>
          <Typography variant="h5" sx={{ fontWeight: "bold", marginBottom: "16px", textAlign: { xs: "center", md: "left" } }}>
            Founder’s Message
          </Typography>
          <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
            At SkinFollics, we are dedicated to offering the best dermatology care for skin, hair, and anti-aging. With advanced treatments and a patient-first approach, we focus on bringing you visible results and renewed confidence. Our promise is simple: the highest quality care, unparalleled expertise, and a journey toward healthier, radiant skin and hair you deserve.
          </Typography>
        </CardContent>
      </Card>

      <Box sx={{ border: "1px solid #e0e0e0", borderRadius: "8px", padding: "16px", backgroundColor: "#ffffff", paddingX: "5%", boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)" }}>
        <Typography variant="h5" sx={{ fontWeight: "bold", marginBottom: "16px" }}>
          Our Commitment to You:
        </Typography>
        <List sx={{ paddingLeft: 0 }}>
          <ListItem sx={{ paddingLeft: 0 }}>
            <ListItemText
              primary="Expert Dermatologists"
              secondary="Our team of dermatologists stays at the forefront of medical advancements to offer you exceptional care."
            />
          </ListItem>
          <Divider />
          <ListItem sx={{ paddingLeft: 0 }}>
            <ListItemText
              primary="State-of-the-Art Technology"
              secondary="We use the latest tools and techniques to deliver safe and effective treatments."
            />
          </ListItem>
          <Divider />
          <ListItem sx={{ paddingLeft: 0 }}>
            <ListItemText
              primary="Personalized Care"
              secondary="We understand that every patient is unique, so we tailor our treatments to meet your specific needs."
            />
          </ListItem>
          <Divider />
          <ListItem sx={{ paddingLeft: 0 }}>
            <ListItemText
              primary="Comprehensive Services"
              secondary="Whether you need general dermatology or specialized treatments, we offer a full spectrum of services."
            />
          </ListItem>
          <Divider />
          <ListItem sx={{ paddingLeft: 0 }}>
            <ListItemText
              primary="Ethical Standards"
              secondary="We adhere to the highest ethical standards, ensuring that your trust is never compromised."
            />
          </ListItem>
        </List>
      </Box>
    </Box>
  );
}
