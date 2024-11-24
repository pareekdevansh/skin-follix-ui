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
      background: 'linear-gradient(90deg, #1E88E5, #6A92FF)', 
      color: 'white',
      boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.25)' 
    }}>
      <Container maxWidth="xl" sx={{
        paddingX: {
          lg: '10%',
          lg: '5%',
        },
        paddingY: { md: '4px' }
      }}>
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/home"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'Arial',
              fontWeight: 700,
              letterSpacing: '.15rem',
              color: 'inherit',
              textDecoration: 'none',
              marginRight: '2rem'
            }}
          >
            {APP_NAME}
          </Typography>

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
                  <Typography sx={{ textAlign: 'center' }}>{navItem.title}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/home"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            {APP_NAME}
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, gap: '2rem' }}>
            {navItems.map((navItem) => (
              <Button
                key={navItem.url}
                onClick={() => { handleNavigation(navItem.url) }}
                sx={{
                  my: 2, 
                  color: 'white', 
                  display: 'block', 
                  transition: 'transform 0.3s ease, color 0.3s ease',
                  '&:hover': {
                    transform: 'scale(1.1)', // Scale the button on hover
                    color: '#FFEB3B', // Change color to a yellowish shade
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
