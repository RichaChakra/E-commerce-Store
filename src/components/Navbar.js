import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          E-commerce Store
        </Typography>
        <Button color="inherit" component={Link} to="/">Home</Button>
        <Button color="inherit" component={Link} to="/products">Products</Button>
        <Button color="inherit" component={Link} to="/cart">Cart</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
