import React from "react";
import { Button } from "@mui/material";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";

interface NavigationButtonsProps {
    handleNext: () => void;
    handlePrev: () => void;
}

const NavigationButtons: React.FC<NavigationButtonsProps> = ({
    handleNext,
    handlePrev,
}) => {
    return (
        <>
            <Button
                onClick={handleNext}
                sx={{
                    position: "absolute",
                    top: "50%",
                    right: 16,
                    transform: "translateY(-50%)",
                    zIndex: 1,
                }}
            >
                <KeyboardArrowRight />
            </Button>

            <Button
                onClick={handlePrev}
                sx={{
                    position: "absolute",
                    top: "50%",
                    left: 16,
                    transform: "translateY(-50%)",
                    zIndex: 1,
                }}
            >
                <KeyboardArrowLeft />
            </Button>
        </>
    );
};

export default NavigationButtons;
