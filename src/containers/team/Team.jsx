import React from "react";
import { Box, Typography, Card, CardContent, Grid, CardMedia } from "@mui/material";

const doctorsList = [
  {
    id: 1,
    name: "Dr. Vipul Pareek",
    gender: "male",
    specialty: "Dermatologist",
    degrees: "MBBS, MD (Cardiology)",
    experience: 6,
    imageUrl:
      "/assets/dr_vipul.jpg",
  }];

function Team() {
  return (
    <Box sx={{ padding: "2rem", backgroundColor: "#f5f5f5" }}>
      <Typography variant="h4" gutterBottom align="left">
        Meet Our Team
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {doctorsList.map((doctor) => (
          <Grid item xs={12} sm={6} md={4} key={doctor.id}>
            <Card elevation={3}>
              <CardMedia
                component="img"
                image={doctor.imageUrl}
                alt={doctor.name}
                sx={{
                  height: 200, // Set height for the image container
                  objectFit: "contain", // Ensures the image fits within the box without cropping
                  borderRadius: "8px",
                }}
              />
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {doctor.name}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {doctor.specialty}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {doctor.degrees}
                </Typography>
                <Typography variant="body2" color="textPrimary">
                  {doctor.experience} years experience
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Team;
