import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';

export default function Action(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event,) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = ( row, item) => {  
    setAnchorEl(null);
    if(item.onClick !== undefined){  
        let params = [];
        if(item.params !== undefined){
            params = item.params.map((param)=>row[param]);
        }
        item.onClick(params,row);
    }
  };
  const {row, data, actionName = 'Action', actionColor=null} = props;
  return (
    <div>
      <Button
        id="fade-button"
        aria-controls={open ? 'fade-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <span style={{color: actionColor}}>{actionName}</span>
      </Button>
      <Menu
        id="fade-menu"
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        {data.map((item, index)=>{
            return (
                <MenuItem key={index} onClick={()=>handleClose(row, item)}>{item.name}</MenuItem>
            )
        })}
      </Menu>
    </div>
  );
}