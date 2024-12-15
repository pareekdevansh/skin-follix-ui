import React from 'react';
import { Box, IconButton, Typography, Stack } from '@mui/material';
import { contactData } from './constants';
const ContactItem = ({ icon, label, value, href, trackEventFunc }) => {
    const iconStyle = { color: '#00796b', "&:hover": { transform: "scale(1.1)" } };
    return (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <IconButton sx={iconStyle} href={href} onClick={trackEventFunc}>
                {icon}
            </IconButton>
            <Typography variant="body2"
                sx={{
                    marginX: '8px',
                    lineHeight: 1.5,
                    color: "#555"
                }}>
                {label}: {value}
            </Typography>
        </Box>
    );
};

const ContactItems = () => {
    return (
        <Stack direction="column" spacing={2}>
            {contactData.map((contact, index) => (
                <ContactItem
                    key={index}
                    icon={contact.icon}
                    label={contact.label}
                    value={contact.value}
                    href={contact.href}
                    trackEventFunc={contact.trackEventFunc}
                />
            ))}
        </Stack>

    )

}

export default ContactItems