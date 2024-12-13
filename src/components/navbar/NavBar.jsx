import * as React from 'react';
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
  const [navMenuOpen, setNavMenuOpen] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setNavMenuOpen(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setNavMenuOpen(null);
  };

  function handleNavigation(url = '/') {
    window.location.href = url;
  }

  return (
    <AppBar position="static" className="navbar" sx={{
      background: 'var(--navbar-color)',
      color: 'black',
      boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.25)'
    }}>
      <Container maxWidth="xl" sx={{
        paddingX: {
          lg: '7%',
          md: '5%',
        },
        paddingY: { md: '4px' }
      }}>
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
            onClick={() => { handleNavigation('/') }}
          >
            {/* Logo */}
            {/* <img
              src="/assets/icons/ic_skinfollics.jpg"
              alt="SkinFollics Logo"

              style={{ width: '48px', height: '48px', marginRight: '10px' }}
            /> */}
            {/* Title Image */}
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
              aria-label="account of current user"
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
                <MenuItem key={navItem.url} onClick={() => { handleNavigation(navItem.url) }}>
                  <Typography sx={{ textAlign: 'center' }} color="black">{navItem.title}</Typography>
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
            onClick={() => { handleNavigation('/') }}
          >
            {/* Logo */}
            {/* <img
              src="/assets/skinfollics_logo_transparent.png"
              alt="SkinFollics Logo"
              style={{ maxWidth: '48px', maxHeight: '48px', marginRight: '8px' }}
            /> */}
            {/* Title Image */}
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
                onClick={() => { handleNavigation(navItem.url) }}
                sx={{
                  my: 2,
                  color: 'black',
                  display: 'block',
                  transition: 'transform 0.3s ease, color 0.3s ease',
                  '&:hover': {
                    transform: 'scale(1.1)', // Scale the button on hover
                    color: '#0066CC', // Change color to a yellowish shade
                  }
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
