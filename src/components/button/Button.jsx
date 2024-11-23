import React from "react";
import "./button.css";
import { Button as MuiButton } from '@mui/material';
const Button = ({ text, onClick }) => {

	return (
		<MuiButton
			variant="contained"
			color="primary"
			onClick={onClick}
		>
			{text}
		</MuiButton>
	);
};

export default Button;
