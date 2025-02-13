import React from 'react'
import {Divider, ListItem, ListItemButton, ListItemIcon, ListItemText, List} from '@mui/material';

import { routeData } from '../../routes/RoutesWithLogin/constant';
import { DrawerHeader, Drawer } from '../menu/style';
import { navbarStyles } from './style';
import { Link } from 'react-router-dom';

const Navbar = (props) => {
  const {open, handleDrawerClose} = props
  const classes = navbarStyles();
  return (
    <Drawer variant="permanent" open={open}>
        <DrawerHeader />
        <Divider />
        <div className={classes.mainDiv}>
          {/* Top Part */}
          <List>
            {routeData.map((data) => (
              data.top === true ?
              <Link to={data.url} className={classes.linkButton} onClick={handleDrawerClose}>
                <ListItem key={data.id} disablePadding sx={{ display: 'block' }}>
                  <ListItemButton
                    sx={[{minHeight: 48, px: 2.5}, open ? {justifyContent: 'initial'} : { justifyContent: 'center'}]}
                  >
                    <ListItemIcon
                      sx={[{minWidth: 0, justifyContent: 'center'}, open ? {mr: 3} : {mr: 'auto'}]}
                    >
                      {data.icon}
                    </ListItemIcon>
                    <ListItemText
                      primary={data.navName}
                      sx={[open ? {opacity: 1} : {opacity: 0}]}
                    />
                  </ListItemButton>
                </ListItem>
              </Link> : null
            ))}
          </List>
          {/* Bottom Part  */}
          <List>
            {routeData.map((data) => (
              !data.top ? 
              <Link to={data.url} className={classes.linkButton} onClick={handleDrawerClose}>
                <ListItem key={data.id} disablePadding sx={{ display: 'block' }}>
                  <ListItemButton
                    sx={[{ minHeight: 48, px: 2.5 }, open ? { justifyContent: 'initial'} : { justifyContent: 'center' }]}
                  >
                    <ListItemIcon
                      sx={[{ minWidth: 0, justifyContent: 'center' }, open ? { mr: 3 } : { mr: 'auto' } ]}
                    >
                      {data.icon}
                    </ListItemIcon>
                    <ListItemText
                      primary={data.navName}
                      sx={[open ? { opacity: 1} : { opacity: 0 }]}
                    />
                  </ListItemButton>
                </ListItem>
              </Link> : null
            ))}
          </List>
        </div>
      </Drawer>
  )
}

export default Navbar
