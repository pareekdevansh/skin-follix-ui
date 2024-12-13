import React from "react";
import { Box } from "@mui/material";

interface CarouselContentProps {
    item: { type: string; src: string; alt?: string };
}

const CarouselContent: React.FC<CarouselContentProps> = ({ item }) => {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                height: "100%",
                maxHeight: "600px", // You can adjust this as per your needs
                overflow: "hidden",
                margin: "0 auto",
            }}
        >
            {item.type === "image" ? (
                <img
                    src={item.src}
                    alt={item.alt || "Carousel Slide"}
                    style={{
                        width: "100%",
                        height: "auto", // Ensures images scale proportionally
                        maxHeight: "100%", // Prevents images from exceeding container size
                        objectFit: "contain", // Ensures content is fully visible, no cropping
                        objectPosition: "center", // Centers the content
                    }}
                />
            ) : item.type === "video" ? (
                <video
                    src={item.src}
                    controls
                    style={{
                        width: "100%",
                        height: "auto", // Ensures the video scales proportionally
                        objectFit: "contain", // Ensures no cropping while maintaining proportions
                    }}
                />
            ) : null}
        </Box>
    );
};

export default CarouselContent;
