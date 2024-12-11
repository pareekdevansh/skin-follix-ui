import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import { DotLottieReact, DotLottieReactProps } from "@lottiefiles/dotlottie-react";

interface DotLottieWrapperProps extends DotLottieReactProps {
    src: string; // Path to the local .lottie file
    autoplay?: boolean; // Controls autoplay behavior
    loop?: boolean; // Loop the animation
    speed?: number; // Speed of the animation (default: 1)
    playOnHover?: boolean; // Play the animation on hover
    style?: React.CSSProperties; // Custom styling (e.g., size)
}

const LottieWrapper: React.FC<DotLottieWrapperProps> = ({
    src,
    autoplay = true,
    loop = true,
    speed = 1,
    playOnHover = false,
    ...props
}) => {

    return (
        <Box
            sx={{ width: '64px', height: '64px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <DotLottieReact
                {...props}
                src={src}
                autoplay={autoplay}
                loop={loop}
                speed={speed}
                playOnHover={playOnHover}
            />
        </Box>
    );
};

export default LottieWrapper;
