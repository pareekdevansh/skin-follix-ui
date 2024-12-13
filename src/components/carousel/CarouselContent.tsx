import React from "react";
import { Box } from "@mui/material";

interface CarouselContentProps {
    item: { type: string; src: string; alt?: string };
}

const CarouselContent: React.FC<CarouselContentProps> = ({ item }) => {
    return (
        <Box
            sx={{
                backgroundColor: "#f5f5f5",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                height: "100%",
                overflow: "hidden",
            }}
        >
            {item.type === "image" ? (
                <img
                    src={item.src}
                    alt={item.alt || "Carousel Slide"}
                    style={{
                        display: "block",
                        width: "100%",
                        height: "auto",
                        objectFit: "cover",
                        margin: "0 auto",
                        padding: "0",
                        boxSizing: "border-box"
                    }}
                />
            ) : item.type === "video" ? (
                <video
                    src={item.src}
                    controls
                    style={{
                        display: "block",
                        width: "100%",
                        height: "auto",
                        objectFit: "cover",
                        margin: "0 auto",
                        padding: "0",
                        boxSizing: "border-box"
                    }}
                />
            ) : null}
        </Box>
    );
};

export default CarouselContent;
