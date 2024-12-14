import React from "react";
import { CircularProgress, Typography, Box } from "@mui/material";

interface LoadingProps {
    size?: number; // Size of the CircularProgress
    thickness?: number; // Thickness of the CircularProgress
    color?: string; // Color of the CircularProgress and text
    message?: string; // Custom loading message
    backgroundColor?: string; // Background color of the loading screen
}

const Loading: React.FC<LoadingProps> = ({
    size = 60,
    thickness = 4.5,
    color = "rgb(0, 0, 0, 0.7)",
    message = "Loading...",
    backgroundColor = "#f5f5f5",
}) => {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                height: "100vh",
                backgroundColor: backgroundColor,
            }}
        >
            <CircularProgress size={size} thickness={thickness} sx={{ color }} />
            <Typography
                variant="h6"
                sx={{ mt: 2, color, fontWeight: "bold" }}
            >
                {message}
            </Typography>
        </Box>
    );
};

export default Loading;
