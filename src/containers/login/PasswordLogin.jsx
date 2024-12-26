import React, { useState } from "react";
import { Box, TextField, Button, CircularProgress } from "@mui/material";
import { FaEye, FaEyeSlash, FaPhoneAlt } from "react-icons/fa";
import { IoMdLock } from "react-icons/io";

const PasswordLogin = ({ passwordLoginForm, handleFormSubmit }) => {
    const { phone: _phone, password: _password } = passwordLoginForm;
    const [phone, setPhone] = useState(_phone);
    const [password, setPassword] = useState(_password);
    const [togglePasswordVisibility, setTogglePasswordVisibility] = useState(false);
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform validation if needed
        if (phone.length === 10 && password.length > 0) {
            handleFormSubmit({ phone, password });
        } else {
            // Set errors if validation fails (optional)
            setErrors({
                phoneNumber: phone.length !== 10 ? "Please enter a valid phone number" : "",
                password: password.length === 0 ? "Password cannot be empty" : "",
            });
        }
    };

    const handlePasswordVisibilityToggle = () => {
        setTogglePasswordVisibility((prev) => !prev);
    };

    return (
        <form onSubmit={handleSubmit}>
            <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", maxWidth: 400 }} gap={2}>
                <TextField
                    label="Phone Number"
                    fullWidth
                    margin="normal"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    error={!!errors.phoneNumber}
                    helperText={errors.phoneNumber}
                    type="tel"
                    InputProps={{
                        startAdornment: <FaPhoneAlt style={{ marginRight: 8, color: "#4e627b" }} />,
                    }}
                    variant="outlined"
                    sx={{ backgroundColor: "#fff" }}
                    inputProps={{
                        pattern: "[0-9]*", // Allow only numbers on mobile devices (for iOS)
                        inputMode: "numeric", // Hint to browsers for numeric keypad (especially for mobile)
                    }}
                    onInput={(e) => {
                        e.target.value = e.target.value.replace(/[^0-9]/g, "");
                    }}
                />

                {phone.length === 10 && (
                    <TextField
                        label="Password"
                        fullWidth
                        margin="normal"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        error={!!errors.password}
                        helperText={errors.password}
                        type={togglePasswordVisibility ? "text" : "password"}
                        InputProps={{
                            startAdornment: <IoMdLock style={{ marginRight: 8, color: "#4e627b" }} />,
                            endAdornment: togglePasswordVisibility ? (
                                <FaEyeSlash style={{ marginRight: 8, color: "#4e627b" }} onClick={handlePasswordVisibilityToggle} />
                            ) : (
                                <FaEye style={{ marginRight: 8, color: "#4e627b" }} onClick={handlePasswordVisibilityToggle} />
                            ),
                        }}
                        variant="outlined"
                        sx={{ backgroundColor: "#fff" }}
                    />
                )}

                {phone.length === 10 && password.length > 0 && (
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{
                            backgroundColor: "#0066cc",
                            color: "#fff",
                            padding: "8px",
                            borderRadius: "4px",
                        }}
                        disabled={loading}
                    >
                        {loading ? <CircularProgress size={24} /> : "Login"}
                    </Button>
                )}
            </Box>
        </form>
    );
};

export default PasswordLogin;
