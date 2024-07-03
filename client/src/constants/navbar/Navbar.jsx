import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Menu, MenuItem, Box, Avatar, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const NavBar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Box display="flex" flexGrow={1} alignItems="center">
          <img src="https://www.iiitb.ac.in/includefiles/userfiles/images/iiitb_logo.png" alt="Institute Logo" style={{ height: 40, marginRight: 10 }} />

          <Button color="inherit" style={{ marginRight: 20 }} sx={{backgroundColor: 'rgba(255, 255, 255, 0.1)'}}>Courses</Button>
          <Button color="inherit" style={{ marginRight: 20 }}>Grades</Button>
          <Button color="inherit" style={{ marginRight: 20 }}>Profile</Button>
        </Box>
        <IconButton
          edge="end"
          color="inherit"
          aria-label="user-menu"
          aria-controls="user-menu"
          aria-haspopup="true"
          onClick={handleMenuOpen}
        >
          <Avatar alt="User Name" src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" /> {/* Adjust the path to your user image */}
        </IconButton>
        <Menu
          id="user-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
        >
          <MenuItem onClick={handleMenuClose}>Courses</MenuItem>
          <MenuItem onClick={handleMenuClose}>Grades</MenuItem>
          <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
          <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
