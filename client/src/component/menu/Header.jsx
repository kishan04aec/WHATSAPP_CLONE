import { Box, makeStyles } from '@material-ui/core';
import { useContext, useState } from 'react';
import { Chat as MessageIcon } from '@material-ui/icons';
import {AccountContext} from '../../context/AccountProvider'
import HeaderMenu from './HeaderMenu';
import Drawer from '../drawer/InfoDrawer'

const useStyles = makeStyles({
    header: {
        height: 35,
        background: '#ededed',
        display: 'flex',
        padding: '10px 16px',
        alignItems: 'center'
    },
    chatIcons: {
        marginLeft: 'auto',
        '& > *': {
            marginLeft: 2,
            padding: 8,
            color: '#919191'
        },
        '& :first-child': {
            fontSize: 22,
            marginRight: 8,
            marginTop: 3
        }
    },
    avatar: {
        height: 37,
        width: 37,
        borderRadius: '50%'
    }
})


const Header = () => {
    const classes = useStyles();
     const [open, setOpen] = useState(false);
    const { account } = useContext(AccountContext);
    const toggleDrawer =()=>{
         setOpen(true);
    }

     return (
        <>
            <Box className={classes.header}>
                <img src={account.imageUrl} onClick={()=>toggleDrawer()} className={classes.avatar} alt='' />
                <Box className={classes.chatIcons}>
                    <MessageIcon />
                    <HeaderMenu/>
                </Box>
            </Box>
            <Drawer open={open} setOpen={setOpen}  />
        </>
    )

    }

export default Header;