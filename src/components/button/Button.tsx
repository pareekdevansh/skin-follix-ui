import React from "react";
import { Button as MuiButton, CircularProgress } from '@mui/material';

interface ButtonProps {
	text: string;
	onClick: () => void;
	variant?: "contained" | "outlined" | "text";
	color?: "primary" | "secondary" | "success" | "error" | "info" | "warning";
	size?: "small" | "medium" | "large";
	startIcon?: React.ReactNode;
	endIcon?: React.ReactNode;
	disabled?: boolean;
	isLoading?: boolean;
	ariaLabel?: string;
	className?: string;
}

const Button: React.FC<ButtonProps> = ({
	text,
	onClick,
	variant = "contained",
	color = "primary",
	size = "medium",
	startIcon,
	endIcon,
	disabled = false,
	isLoading = false,
	ariaLabel,
	className = "",
}) => {
	return (
		<MuiButton
			variant={variant}
			color={color}
			size={size}
			startIcon={isLoading ? null : startIcon}
			endIcon={isLoading ? null : endIcon}
			onClick={onClick}
			disabled={disabled || isLoading}
			aria-label={ariaLabel || text}
			className={`base-button ${className}`}
		>
			{isLoading ? <CircularProgress size={20} /> : text}
		</MuiButton>
	);
};

export default Button;
