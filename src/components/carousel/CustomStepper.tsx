import React from "react";
import { MobileStepper, Box } from "@mui/material";

interface CustomStepperProps {
    steps: number;
    activeStep: number;
}

const CustomStepper: React.FC<CustomStepperProps> = ({
    steps,
    activeStep,
}) => {
    return (
        <Box sx={{
            display: "flex", justifyContent: "center",
            position: "absolute", bottom: 0,
            // backgroundColor: "rgba(0, 0, 0, 0.5)",
        }}>
            <MobileStepper
                variant="dots"
                steps={steps}
                position="static"
                activeStep={activeStep}
                
                sx={{
                    maxWidth: 400,
                    flexGrow: 1,
                    justifyContent: "center",
                    backgroundColor: "transparent", 
                    "& .MuiMobileStepper-dot": {
                        mx: 1.5, // Increased spacing between dots
                        cursor: "pointer",
                    },
                    "& .MuiMobileStepper-dotActive": {
                        backgroundColor: "primary.main",
                    },
                }}
                nextButton={null}
                backButton={null}
            />
        </Box>
    );
};

export default CustomStepper;
