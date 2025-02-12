import React from 'react'

import {Typography, Toolbar} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';

import { AppBar } from '../menu/style';

const Header = (props) => {
  const {open, handleDrawerOpen} = props;
  return (
    <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={[{marginRight: 5}, open && { display: 'none' }]}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Prodyt
          </Typography>
        </Toolbar>
      </AppBar>
  )
}

export default Header
