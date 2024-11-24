import React from "react";
import { Box, Typography, Card, CardContent, Grid, CardMedia } from "@mui/material";

const doctorsList = [
  {
    id: 1,
    name: "Dr. Ananya Sharma",
    gender: "female",
    specialty: "Cardiologist",
    degrees: "MBBS, MD (Cardiology)",
    experience: 12,
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlDpt8CWare1NXGcK3PORQXjQh0oGSeLP5PU6M6uA0fWywkg-b2woITDiTYIc3uBXcIVI&usqp=CAU",
  },
  {
    id: 2,
    name: "Dr. Rajesh Kapoor",
    gender: "male",
    specialty: "Orthopedic Surgeon",
    degrees: "MBBS, MS (Ortho)",
    experience: 15,
    imageUrl:
      "https://images.assetsdelivery.com/compings_v2/indomercy/indomercy1501/indomercy150100019.jpg",
  },
  {
    id: 3,
    name: "Dr. Priya Singh",
    gender: "female",
    specialty: "Pediatrician",
    degrees: "MBBS, MD (Pediatrics)",
    experience: 10,
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlDpt8CWare1NXGcK3PORQXjQh0oGSeLP5PU6M6uA0fWywkg-b2woITDiTYIc3uBXcIVI&usqp=CAU",
  },
  // Other doctor entries...
];

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
