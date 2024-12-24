import React, { useState } from 'react';
import { Avatar, Box, Menu, MenuItem, IconButton, Tooltip } from '@mui/material';

interface UserProfileProps {
    user: { isAuthenticated: boolean; name: string; avatarUrl: string };
}

const UserProfile: React.FC<UserProfileProps> = ({ user }) => {
    const [profileMenuOpen, setProfileMenuOpen] = useState<null | HTMLElement>(null);

    const handleOpenProfileMenu = (event: React.MouseEvent<HTMLElement>) => {
        setProfileMenuOpen(event.currentTarget);
    };

    const handleCloseProfileMenu = () => {
        setProfileMenuOpen(null);
    };

    const handleProfileAction = (action: string) => {
        if (action === 'logout') {
            console.log('User logged out');
        } else if (action === 'profile') {
            window.location.href = '/profile';
        }
        setProfileMenuOpen(null);
    };

    return (
        <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
                <IconButton onClick={handleOpenProfileMenu} sx={{ p: 0 }}>
                    <Avatar alt={user.name} src={user.avatarUrl} />
                </IconButton>
            </Tooltip>
            <Menu
                id="menu-appbar-profile"
                anchorEl={profileMenuOpen}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={Boolean(profileMenuOpen)}
                onClose={handleCloseProfileMenu}
            >
                <MenuItem onClick={() => handleProfileAction('profile')}>Profile</MenuItem>
                <MenuItem onClick={() => handleProfileAction('logout')}>Logout</MenuItem>
            </Menu>
        </Box>
    );
};

export default UserProfile;
