import React, {useState} from 'react';
import Box from '@mui/material/Box';
import Header from '../navbar/Header';
import Navbar from '../navbar/Navbar';
import { DrawerHeader } from './style';
import RouterAfterLogin from '../../routes/RoutesWithLogin/Router';

export const MenuLayout = () => {
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <Header open={open} handleDrawerOpen={handleDrawerOpen} handleDrawerClose={handleDrawerClose} />
      <Navbar open={open} />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <RouterAfterLogin />
      </Box>
    </Box>
  );
}