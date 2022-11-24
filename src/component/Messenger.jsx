import {AppBar,Toolbar,Box} from '@material-ui/core'
import { makeStyles} from '@material-ui/styles';
 import Login from './account/Login';
 import React ,{useContext}from 'react';
 import { AccountContext } from '../context/AccountProvider';
 import ChatBox from './ChatBox';
 const usestyles=makeStyles({
      component: {
        height: '100vh',
        background: '#DCDCDC'
    },
    header: {
        background: '#128C7E',
        height: 115,
        boxShadow: 'none'
    },
     loginHeader:{
       height:200,
       background : '#00bfa5',
       boxShadow:'none'
     }
 });
const Messenger=()=> {
    const classes=usestyles();
    const {account}=useContext(AccountContext)
 return (
    <Box className={classes.component}>
   <AppBar  className={account ? classes.header : classes.loginHeader}>
     <Toolbar></Toolbar>
     
     </AppBar>
     { account?<ChatBox/>: <Login/>}
     </Box>
     
     )
    }




export default Messenger;