import React, { memo } from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";
import { useMediaQuery, useTheme } from "@mui/material";

interface CustomCardProps {
  title: string;
  content: string;
  imageUrl?: string;
  imageAlt?: string;
  imageWidth?: string;
  imageHeight?: string;
  flexDirection?: "row" | "column" | "row-reverse" | "column-reverse"; // For responsive layout
  textAlign?: "left" | "center";
  padding?: string;
  backgroundColor?: string;
  boxShadow?: string;
}

const CustomCard: React.FC<CustomCardProps> = ({
  title,
  content,
  imageUrl,
  imageAlt,
  imageWidth = "400px", // Default value
  imageHeight = "auto",
  textAlign = "left", // Ensures title is always left aligned
  padding = "0px",
  backgroundColor = "#ffffff",
  boxShadow = "0px 4px 6px rgba(0, 0, 0, 0.1)",
  flexDirection = "row", // Default to "row"
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md")); // Detect mobile view

  const imageStyles = {
    width: isMobile ? "100%" : imageWidth, // 100% on mobile
    height: imageHeight || "auto",
    borderRadius: "8px",
    objectFit: "conver",
    objectPosition: "top center",
    // boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
  };

  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: isMobile
          ? (imageUrl ? "column-reverse" : "column")
          : flexDirection,
        alignItems: isMobile ? "center" : "flex-start",
        padding,
        backgroundColor,
        boxShadow,
        borderRadius: "8px",
        gap: "16px",
        height: "100%",
        width: "100%",
        "&:hover": {
          transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
          "&:hover": { transform: "translateY(-4px)", boxShadow: 4 },
        },
      }}
    >
      {imageUrl && (
        <Box
          component="img"
          src={imageUrl}
          alt={imageAlt}
          sx={{
            ...imageStyles,
            width: isMobile ? "100%" : "50%",
            maxHeight: "500px",
            borderRadius: isMobile ? "0px 0px 8px 8px" : (flexDirection === "row" ? "8px 0 0 8px" : "0 8px 8px 0"),
          }}
        />
      )}

      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
          width: isMobile ? "100%" : (imageUrl ? "50%" : "100%"),
          textAlign: isMobile ? "center" : textAlign, 
          padding: "24px",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontWeight: "bold",
            marginBottom: "16px",
            fontSize: "1.25rem",
            marginRight: "auto", 
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="body1"
          sx={{ lineHeight: 1.8, fontSize: "1rem" }}
        >
          {content}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default memo(CustomCard);
