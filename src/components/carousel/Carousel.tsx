import React, { useState, useCallback, useEffect, useRef } from "react";
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

    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    const handleNext = useCallback(() => {
        setActiveStep((prevStep) => (prevStep + 1) % carouselItems.length);
    }, [carouselItems.length]);

    const handlePrev = useCallback(() => {
        setActiveStep((prevStep) => (prevStep - 1 + carouselItems.length) % carouselItems.length);
    }, [carouselItems.length]);

    useEffect(() => {
        intervalRef.current && clearInterval(intervalRef.current);
        intervalRef.current = setInterval(handleNext, autoplayInterval);
    }, [activeStep])

    useEffect(() => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }
        if (autoplay) {
            intervalRef.current = setInterval(handleNext, autoplayInterval);
            return () => {
                if (intervalRef.current) {
                    clearInterval(intervalRef.current);
                }
            };
        }
        return () => { };
    }, [autoplay, autoplayInterval]);

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
