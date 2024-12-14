import React, { useState, useCallback, useEffect } from "react";
import { Box } from "@mui/material";
import CustomStepper from "./CustomStepper";
import CarouselContent from "./CarouselContent";
import NavigationButtons from "./CarouselNavigation";

interface CarouselItem {
    type: "image" | "video";
    src: string;
    alt?: string;
}

interface CarouselProps {
    carouselItems: CarouselItem[];
    autoplay?: boolean;
    autoplayInterval?: number; 
}

const Carousel: React.FC<CarouselProps> = ({ carouselItems, autoplay = true, autoplayInterval = 5000 }) => {
    const [activeStep, setActiveStep] = useState(0);

    const handleNext = useCallback(() => {
        setActiveStep((prevStep) => (prevStep + 1) % carouselItems.length);
    }, [carouselItems.length]);

    const handlePrev = useCallback(() => {
        setActiveStep((prevStep) => (prevStep - 1 + carouselItems.length) % carouselItems.length);
    }, [carouselItems.length]);

    const handleDotClick = (step: number) => {
        setActiveStep(step);
    };

    useEffect(() => {
        if (autoplay) {
            const interval = setInterval(handleNext, autoplayInterval);
            return () => clearInterval(interval);
        }
    }, [handleNext, autoplay, autoplayInterval]);

    return (
        <Box
            sx={{
                position: "relative",
                width: "100%",
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                minWidth: "100%",
                height: "100%",
                overflow: "hidden",
            }}
        >
            {/* Carousel Content */}
            <CarouselContent item={carouselItems[activeStep]} />

            {/* Navigation Buttons */}
            {carouselItems.length > 1 && <NavigationButtons handleNext={handleNext} handlePrev={handlePrev} />}

            {/* Stepper Dots */}
            {
                carouselItems.length > 1 &&
                <CustomStepper
                    steps={carouselItems.length}
                    activeStep={activeStep}
                />}
        </Box>
    );
};

export default Carousel;
