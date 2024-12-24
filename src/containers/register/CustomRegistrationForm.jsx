import React, { useState } from "react";
import { Typography, TextField, Button, Grid, Box, CircularProgress, MenuItem, Select, FormControl, InputLabel, Link } from "@mui/material";
import { MdEmail } from "react-icons/md";
import { IoMdLock } from "react-icons/io";
import { FaUserAlt, FaPhoneAlt, FaRegCalendarAlt } from "react-icons/fa";

const CustomRegistrationForm = (handleSubmit, handleSubmitForm, control, errors, loading) => {
    return <form onSubmit={handleSubmit(handleSubmitForm)}>
        <Grid container spacing={2}>
            {/* First Name */}
            <Grid item xs={12}>
                <TextField
                    label="First Name"
                    fullWidth
                    margin="normal"
                    {...control.register("firstName")}
                    error={!!errors.firstName}
                    helperText={errors.firstName?.message}
                    InputProps={{
                        startAdornment: <FaUserAlt style={{ marginRight: 8, color: "#4e627b" }} />,
                    }}
                    variant="outlined"
                    sx={{ backgroundColor: "#f9f9f9" }} />
            </Grid>

            {/* Last Name */}
            <Grid item xs={12}>
                <TextField
                    label="Last Name"
                    fullWidth
                    margin="normal"
                    {...control.register("lastName")}
                    error={!!errors.lastName}
                    helperText={errors.lastName?.message}
                    InputProps={{
                        startAdornment: <FaUserAlt style={{ marginRight: 8, color: "#4e627b" }} />,
                    }}
                    variant="outlined"
                    sx={{ backgroundColor: "#f9f9f9" }} />
            </Grid>

            {/* Email Field */}
            <Grid item xs={12}>
                <TextField
                    label="Email"
                    fullWidth
                    margin="normal"
                    type="email"
                    {...control.register("email")}
                    error={!!errors.email}
                    helperText={errors.email?.message}
                    InputProps={{
                        startAdornment: <MdEmail style={{ marginRight: 8, color: "#4e627b" }} />,
                    }}
                    variant="outlined"
                    sx={{ backgroundColor: "#f9f9f9" }} />
            </Grid>

            {/* Phone Number */}
            <Grid item xs={12}>
                <TextField
                    label="Phone Number"
                    fullWidth
                    margin="normal"
                    {...control.register("phoneNumber")}
                    error={!!errors.phoneNumber}
                    helperText={errors.phoneNumber?.message}
                    InputProps={{
                        startAdornment: <FaPhoneAlt style={{ marginRight: 8, color: "#4e627b" }} />,
                    }}
                    variant="outlined"
                    sx={{ backgroundColor: "#f9f9f9" }} />
            </Grid>

            {/* Date of Birth */}
            <Grid item xs={12}>
                <TextField
                    label="Date of Birth"
                    fullWidth
                    margin="normal"
                    type="date"
                    {...control.register("dob")}
                    error={!!errors.dob}
                    helperText={errors.dob?.message}
                    variant="outlined"
                    sx={{ backgroundColor: "#f9f9f9" }}
                    InputLabelProps={{
                        shrink: true,
                    }} />
            </Grid>

            {/* Gender */}
            <Grid item xs={12}>
                <FormControl fullWidth margin="normal" error={!!errors.gender}>
                    <InputLabel>Gender</InputLabel>
                    <Select
                        {...control.register("gender")}
                        label="Gender"
                        variant="outlined"
                        sx={{ backgroundColor: "#f9f9f9" }}
                    >
                        <MenuItem value="male">Male</MenuItem>
                        <MenuItem value="female">Female</MenuItem>
                        <MenuItem value="other">Other</MenuItem>
                    </Select>
                    {errors.gender && <Typography variant="body2" color="error">{errors.gender?.message}</Typography>}
                </FormControl>
            </Grid>

            {/* Password Field */}
            <Grid item xs={12}>
                <TextField
                    label="Password"
                    fullWidth
                    margin="normal"
                    type="password"
                    {...control.register("password")}
                    error={!!errors.password}
                    helperText={errors.password?.message}
                    InputProps={{
                        startAdornment: <IoMdLock style={{ marginRight: 8, color: "#4e627b" }} />,
                    }}
                    variant="outlined"
                    sx={{ backgroundColor: "#f9f9f9" }} />
            </Grid>

            {/* Confirm Password Field */}
            <Grid item xs={12}>
                <TextField
                    label="Confirm Password"
                    fullWidth
                    margin="normal"
                    type="password"
                    {...control.register("confirmPassword")}
                    error={!!errors.confirmPassword}
                    helperText={errors.confirmPassword?.message}
                    InputProps={{
                        startAdornment: <IoMdLock style={{ marginRight: 8, color: "#4e627b" }} />,
                    }}
                    variant="outlined"
                    sx={{ backgroundColor: "#f9f9f9" }} />
            </Grid>

            {/* Submit Button */}
            <Grid item xs={12}>
                <Button
                    fullWidth
                    type="submit"
                    variant="contained"
                    sx={{
                        backgroundColor: "#0066cc",
                        color: "#fff",
                        padding: "12px",
                        borderRadius: "4px",
                        textTransform: "none",
                    }}
                    disabled={loading}
                >
                    {loading ? <CircularProgress size={24} /> : "Sign Up"}
                </Button>
            </Grid>

            {/* Login Link */}
            <Grid item xs={12} textAlign="center" sx={{ marginTop: "1rem" }}>
                <Typography variant="body2">
                    Already have an account?{" "}
                    <Link href="/login" variant="body2" sx={{ color: "#0066cc", textDecoration: "none" }}>
                        Login
                    </Link>
                </Typography>
            </Grid>
        </Grid>
    </form>;
}

export default CustomRegistrationForm