import { MoreVert } from '@material-ui/icons';
import { Menu, MenuItem, makeStyles } from '@material-ui/core';
import { useState, useContext } from 'react';
import { GoogleLogout } from 'react-google-login';
import { clientId } from '../../constants/data';
import { AccountContext } from '../../context/AccountProvider';
import Drawer from '../../component/drawer/InfoDrawer';
const useStyle = makeStyles({
    menuItem: {
        fontSize: 14,
        padding: '15px 60px 5px 24px',
        color: '#4A4A4A'
    },
    logout: {
        border:'none!important', 
        boxShadow: 'none!important',
        '& > *': {
            padding: '0px!important'
        }
    }
})
const HeaderMenu = () => {
     const classes = useStyle();
     
     const [open, setOpen] = useState(false);
     const [openDrawer, setOpenDrawer] = useState(false);
     
    // const [openDrawer, setOpenDrawer] = useState(false);
    
    const { setAccount,setShowloginButton, showlogoutButton, setShowlogoutButton } = useContext(AccountContext);
    // const { setPerson } = useContext(UserContext);

     const handleClick = (event) => {
        setOpen(event.currentTarget);
    };
     
     const handleClose = () => {
        setOpen(null);
    };
      const onSignoutSuccess = () => {
        alert("You have been logged out successfully");
        console.clear();
        // setShowlogoutButton(false);
        // setShowloginButton(true);
        setAccount('');
        // setPerson({});
    };
     const toggleDrawer =()=>{
         setOpenDrawer(true);
    }

     return (
       <>
            <MoreVert  onClick={handleClick}/>
            <Menu
                anchorEl={open}
                keepMounted
                open={open}
                onClose={handleClose}
                getContentAnchorEl={null}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
            >
                <MenuItem className={classes.menuItem} onClick={() => { handleClose();toggleDrawer()}}>Profile</MenuItem>
               
                
                <MenuItem className={classes.menuItem} onClick={() => { handleClose(); }}>
            
                    <GoogleLogout
                        clientId={clientId}
                        buttonText="Logout"
                        onLogoutSuccess={onSignoutSuccess}
                        className={classes.logout}
                    >
                    </GoogleLogout> 
            
                </MenuItem>
            </Menu>
            <Drawer open={openDrawer} setOpen={setOpenDrawer}  />
        </>
           )
}

export default HeaderMenu;