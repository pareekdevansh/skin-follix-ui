import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition, SizeProp } from '@fortawesome/fontawesome-svg-core';
import { Box } from '@mui/material';

// Define the IconWrapper component
interface IconWrapperProps {
  icon: IconDefinition; // FontAwesome icon
  onClick?: () => void;
  iconSize?: SizeProp;
  backgroundColor?: string; // Background color on hover
  hoverEffect?: boolean;
  hoverAnimation?: string;
  disabled?: boolean;
}

const IconWrapper: React.FC<IconWrapperProps> = ({
  icon,
  onClick,
  iconSize = 'sm',
  backgroundColor = '',
  hoverEffect = true,
  hoverAnimation = 'scale(1.1)',
  disabled = false,
}) => {
  return (
    <Box
      onClick={onClick}
      sx={{
        paddingY: '2px',
        paddingX: '6px',
        display: 'inline-block',
        borderRadius: '100%',
        backgroundColor: disabled ? '#e0e0e0' : '',
        cursor: disabled ? 'not-allowed' : 'pointer',
        transition: 'background-color 0.3s ease, transform 0.3s ease',
        '&:hover': hoverEffect && !disabled ? {
          backgroundColor: backgroundColor,
          transform: 'scale(1.1)',
        } : {},
      }}
    >
      <FontAwesomeIcon
        icon={icon}
        size={iconSize}
        style={{
          color: '#fff',
        }}
      />
    </Box>
  );
};

export default IconWrapper;
