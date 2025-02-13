import React, {useContext} from 'react'

import {Typography, Toolbar, Box} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import IconButton from '@mui/material/IconButton';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

import { AppBar } from '../menu/style';
import { ThemeContextHandler } from '../../App';

const Header = (props) => {
  const {open, handleDrawerOpen, handleDrawerClose} = props;
  const { handleThemeChange, theme } = useContext(ThemeContextHandler);

  const themeChangeHandler = () => {
    if(theme === 'dark') {
      handleThemeChange('light');
    } else{
      handleThemeChange('dark');
    }
  }
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
          <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
            <Typography variant="h6" noWrap component="div" sx={{marginTop: '3px'}}>Prodyt</Typography>
            <IconButton onClick={themeChangeHandler}>
              {theme === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
  )
}

export default Header
