import React, { useState } from "react";
import { Box, Typography, Tooltip, IconButton } from "@mui/material";
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
                width: { lg: '90px', md: '50px' },
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
                overflow: "hidden",
                zIndex: 10,
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
                        paddingY: "2px",
                        cursor: "pointer",
                        transform: hoveredIcon === index ? "scale(1.15)" : "scale(1)", 
                        transition: "transform 0.3s ease", 
                        margin : '2px',
                    }}
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={handleMouseLeave}
                >
                    
                    <IconButton sx={{ color: "white" }}>
                        {item.icon}
                    </IconButton>
                    <Typography variant="caption" sx={{ marginTop: "8px", fontSize: "12px", textAlign: "center", padding: "8px" }}>
                        {item.label}
                    </Typography>
                </Box>
            ))}
        </Box>
    );
};

export default SideBar;
