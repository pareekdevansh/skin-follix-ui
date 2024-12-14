import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import { navItems } from './constants.js';

function NavBar() {
    const [navMenuOpen, setNavMenuOpen] = React.useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setNavMenuOpen(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setNavMenuOpen(null);
    };

    const handleNavigation = (url: string = '/') => {
        window.location.href = url;
        setNavMenuOpen(null); // Close menu after navigation
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
                    {/* Desktop Logo and Title */}
                    <Box
                        sx={{
                            height: '100%',
                            display: { xs: 'none', md: 'flex' },
                            alignItems: 'center',
                            cursor: 'pointer',
                            marginRight: '4rem',
                        }}
                        onClick={() => handleNavigation('/')}
                    >
                        <img
                            src="/assets/app_logo.png"
                            alt="App Title"
                            style={{ maxWidth: '120px', maxHeight: '60px' }}
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

                    {/* Mobile Logo and Title */}
                    <Box
                        sx={{
                            display: { xs: 'flex', md: 'none' },
                            alignItems: 'center',
                            flexGrow: 1,
                            cursor: 'pointer',
                            marginRight: '4rem',
                        }}
                        onClick={() => handleNavigation('/')}
                    >
                        <img
                            src="/assets/app_logo.png"
                            alt="App Title"
                            style={{ maxWidth: '100px', maxHeight: '50px' }}
                        />
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
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default NavBar;
