import React, { useState } from "react";
import { TextField, Button, Grid, CircularProgress, FormControlLabel, Checkbox, Link } from "@mui/material";
import { MdEmail } from "react-icons/md";
import { IoMdLock } from "react-icons/io";
const CustomLoginForm = (handleSubmit, handleSubmitForm, control, errors, loading) => {
    return <form onSubmit={handleSubmit(handleSubmitForm)}>
        <Grid container spacing={2}>
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
                        startAdornment: <MdEmail className="icon" style={{ marginRight: 8, color: "#4e627b" }} />,
                    }}
                    variant="outlined"
                    sx={{ backgroundColor: "#f5f5f5" }} />
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
                        startAdornment: <IoMdLock className="icon" style={{ marginRight: 8, color: "#4e627b" }} />,
                    }}
                    variant="outlined"
                    sx={{ backgroundColor: "#f5f5f5" }} />
            </Grid>

            {/* Remember Me Checkbox */}
            <Grid item xs={12}>
                <FormControlLabel
                    control={<Checkbox {...control.register("rememberMe")} />}
                    label="Remember me"
                    sx={{ color: "#555" }} />
            </Grid>

            {/* Submit Button */}
            <Grid item xs={12}>
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    sx={{
                        mt: 2,
                        padding: "10px",
                        fontSize: "16px",
                        borderRadius: "8px",
                        textTransform: "none",
                    }}
                    disabled={loading}
                >
                    {loading ? <CircularProgress size={24} sx={{ color: "#fff" }} /> : "Sign In"}
                </Button>
            </Grid>
        </Grid>
    </form>;
}

export default CustomLoginForm;