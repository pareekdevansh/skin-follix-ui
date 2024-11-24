import React, { useState } from "react";
import { Box, Divider, Typography, Tooltip, IconButton } from "@mui/material";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';

const sidebarItems = [
    { icon: <LocationOnIcon />, label: "Location", details: "123 Main St, City, State" },
    { icon: <AccessTimeIcon />, label: "Work Timings", details: "Mon-Sat: 9 AM - 8 PM" },
    { icon: <LocalHospitalIcon />, label: "Emergency", details: "Call Ambulance Now" },
];

const SideBar = () => {
    const [expanded, setExpanded] = useState(false);
    const [hoveredIcon, setHoveredIcon] = useState(null); // Track hovered icon for scaling

    const handleMouseEnter = (index) => {
        setHoveredIcon(index); // Set the hovered icon index
    };

    const handleMouseLeave = () => {
        setHoveredIcon(null); // Reset the hovered icon when mouse leaves
    };

    return (
        <Box
            sx={{
                width: { lg: '80px', md: '40px' },
                height: 'fit-content',
                backgroundColor: "#1E88E5",
                color: "white",
                position: "fixed",
                top: '50%',
                right: 0,
                transform: "translateY(-50%)",
                padding: '12px',
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-around",
                transition: "width 0.3s ease",
                borderRadius: '12px',
                boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.25)',
                overflow: "hidden",
                zIndex: 10,
                gap: '1rem'
            }}
        >
            {sidebarItems.map((item, index) => (

                <Box
                    key={index}
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "100%",
                        cursor: "pointer",
                        transform: hoveredIcon === index ? "scale(1.10)" : "scale(1)",
                        transition: "transform 0.3s ease",
                        backgroundColor: hoveredIcon === index ? "rgba(255, 255, 255, 0.2)" : "transparent",
                        borderRadius: '12px',
                        padding: '4px',
                    }}
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={handleMouseLeave}
                >

                    <IconButton sx={{ color: "white" }} >
                        {item.icon}
                    </IconButton>
                    <Typography variant="caption" sx={{ fontSize: "14px", textAlign: "center" }}>
                        {item.label}
                    </Typography>
                    <Divider />

                </Box>

            ))}
        </Box>
    );
};

export default SideBar;
