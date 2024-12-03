import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import AdbIcon from '@mui/icons-material/Adb';
import Menu from '@mui/material/Menu';
import { APP_NAME } from '../../constants/app-info';
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
      background: 'linear-gradient(45deg, #fcfcfc 15%, #A3C8FF 85%)',
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
          <Box className="navbar-logo"
            noWrap
            onClick={() => { handleNavigation('/home') }}
            sx={{
              display: { xs: 'none', md: 'flex' },
              marginRight: '4rem',
              cursor: 'pointer'
            }}
          > <img src="/assets/app_logo.png" alt="App Logo" style={{ maxWidth: '120px', maxHeight: '60px' }} /> </Box>


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
                  <Typography sx={{ textAlign: 'center' }} color='black'>{navItem.title}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box className="navbar-logo"
            noWrap
            onClick={() => { handleNavigation('/home') }}
            sx={{
              display: { xs: 'flex', md: 'none' },
              marginRight: '4rem',
              flexGrow: 1,
              cursor: 'pointer'
            }}
          > <img src="/assets/app_logo.png" alt="App Logo" style={{ maxWidth: '120px', maxHeight: '60px' }} /> </Box>


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
