import React from 'react'

import {Typography, Toolbar} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import IconButton from '@mui/material/IconButton';

import { AppBar } from '../menu/style';

const Header = (props) => {
  const {open, handleDrawerOpen, handleDrawerClose} = props;
  return (
    <AppBar position="fixed" >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={open ? handleDrawerClose : handleDrawerOpen}
            edge="start"
            sx={[{marginRight: 5}]}
          >
            {open ? <MenuOpenIcon /> : <MenuIcon />}
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Prodyt
          </Typography>
        </Toolbar>
      </AppBar>
  )
}

export default Header
