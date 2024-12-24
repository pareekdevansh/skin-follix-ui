import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import { Menu } from '@mui/material';
import { navItems } from './constants.js';

function NavBar() {
    const [navMenuOpen, setNavMenuOpen] = useState<null | HTMLElement>(null);
    const [profileMenuOpen, setProfileMenuOpen] = useState<null | HTMLElement>(null);

    const user = {
        isAuthenticated: true,
        name: 'John Doe',
        avatarUrl: '/assets/user_avatar.png',
    };

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setNavMenuOpen(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setNavMenuOpen(null);
    };

    const handleOpenProfileMenu = (event: React.MouseEvent<HTMLElement>) => {
        setProfileMenuOpen(event.currentTarget);
    };

    const handleCloseProfileMenu = () => {
        setProfileMenuOpen(null);
    };

    const handleNavigation = (url: string = '/home') => {
        window.location.href = url;
        setNavMenuOpen(null); // Close menu after navigation
    };

    const handleProfileAction = (action: string) => {
        if (action === 'logout') {
            // Add logout logic here
            console.log('User logged out');
        } else if (action === 'profile') {
            handleNavigation('/profile');
        }
        setProfileMenuOpen(null); // Close profile menu
    };

    return (
        <AppBar
            position="static"
            className="navbar"
            sx={{
                background: 'var(--navbar-color)',
                color: 'black',
                boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.25)',
                padding: 0,
                paddingX: '5%',
            }}
        >
            <Container maxWidth="xl" sx={{ padding: 0 }}>
                <Toolbar disableGutters>
                    {/* Desktop Logo */}
                    <Box
                        sx={{
                            height: '100%',
                            display: { xs: 'none', md: 'flex' },
                            alignItems: 'center',
                            cursor: 'pointer',
                            marginRight: '4rem',
                            transition: 'transform 0.3s ease, opacity 0.3s ease',
                            '&:hover': {
                                transform: 'scale(1.1)',
                                opacity: 0.8,
                            },
                        }}
                        onClick={() => handleNavigation('/home')}
                    >
                        <img
                            src="/assets/app_logo.png"
                            alt="App Logo"
                            style={{
                                maxWidth: '120px',
                                maxHeight: '60px',
                                transition: 'transform 0.3s ease',
                            }}
                        />
                    </Box>

                    {/* Mobile Menu */}
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="menu"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={navMenuOpen}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(navMenuOpen)}
                            onClose={handleCloseNavMenu}
                            sx={{ display: { xs: 'block', md: 'none' } }}
                        >
                            {navItems.map((navItem) => (
                                <MenuItem
                                    key={navItem.url}
                                    onClick={() => handleNavigation(navItem.url)}
                                >
                                    <Typography sx={{ textAlign: 'center' }} color="black">
                                        {navItem.title}
                                    </Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>

                    {/* Desktop Navigation */}
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, gap: '2rem' }}>
                        {navItems.map((navItem) => (
                            <Button
                                key={navItem.url}
                                onClick={() => handleNavigation(navItem.url)}
                                sx={{
                                    my: 2,
                                    color: 'black',
                                    display: 'block',
                                    transition: 'transform 0.3s ease, color 0.3s ease',
                                    '&:hover': {
                                        transform: 'scale(1.1)',
                                        color: '#0066CC',
                                    },
                                }}
                            >
                                {navItem.title}
                            </Button>
                        ))}
                    </Box>

                    {/* User Profile Avatar */}
                    {user.isAuthenticated && (
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
                                <MenuItem onClick={() => handleProfileAction('profile')}>
                                    Profile
                                </MenuItem>
                                <MenuItem onClick={() => handleProfileAction('logout')}>
                                    Logout
                                </MenuItem>
                            </Menu>
                        </Box>
                    )}
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default NavBar;
