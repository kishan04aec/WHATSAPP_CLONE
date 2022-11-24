import {Dialog,withStyles,Box,Typography,makeStyles,List,ListItem} from '@material-ui/core';
import { GoogleLogin} from 'react-google-login';  
import { useContext } from 'react';
import { AccountContext } from '../../context/AccountProvider';
import { clientId } from '../../constants/data';
import { addUser } from '../../service/api';
const usestyles=makeStyles({
       component:{
        display:'flex',
       },
       leftComponent:{
         padding: '56px 0 56px 56px',
       },
       qr:{
          padding: '50px 0 0 50px',  
        height: 264,
        width: 264
       },
        title: {
        fontSize: 26,
        marginBottom: 25,
        color: '#525252',
        fontFamily: 'Segoe UI,Helvetica Neue,Helvetica,Lucida Grande,Arial,Ubuntu,Cantarell,Fira Sans,sans-serif',
        fontWeight: 300   
    },
     list: {
        '&  > *': {
            padding: 0,
            marginTop: 15,
            fontSize: 18,
            lineHeight: '28px',
            color: '#4a4a4a'
        }
    }
  })
const style= {
    dialogPaper:{
        height:'95%',
        width:'60%',
        marginTop:'12%',
        boxShadow:'none',
        borderRadius:'0',
         maxWidth: '100%',
        maxHeight: '100%',
        overflow: 'hidden'
    }
}
const Login =({classes})=>{
    const classname=usestyles();
    
     const {account,setAccount}= useContext(AccountContext);
     const onLoginSuccess = async (res) => {
        console.log('Login Success:', res.profileObj);
        setAccount(res.profileObj);
        // setShowloginButton(false);
        // setShowlogoutButton(true);
         await addUser(res.profileObj);
    };

    const onLoginFailure = (res) => {
        console.log('Login Failed:', res.profileObj);
    };
    return(
       <Dialog
       open={true}
       classes={{paper:classes.dialogPaper}}
       BackdropProps={{style:{backgroundColor:'unset'}}}
       >
           <Box className={classname.component}>
           <Box className={classname.leftComponent}>
               <Typography className={classname.title}>To use WhatsApp on your computer:</Typography>
               <List className={classname.list}>
                   <ListItem>
                       1.Open WhatsApp on your Phone.
                   </ListItem>
                   <ListItem>
                       2.Tap Menu:or Setting and Select Linked Devices.
                   </ListItem>
                   <ListItem>
                       3.Point your phone to this screen to capture the code.
                   </ListItem>
               </List>
            </Box>
             
              <Box style={{position:'relative'}}>
                   <img src='https://www.ginifab.com/feeds/qr_code/img/qrcode.jpg'alt='' className={classname.qr}/>
                   <Box style={{position: 'absolute', left: '50%', top: '50%', transform: 'translateX(0%) translateY(-25%)'}}>
                    <GoogleLogin
                     clientId={clientId}
                     buttonText=""
                     onSuccess={onLoginSuccess}
                     onFailure={onLoginFailure}
                     cookiePolicy={'single_host_origin'}
                     isSignedIn={true}
                     />
                     </Box>
                  </Box>   
               
               </Box>
       </Dialog>
        )
}
export default withStyles(style)(Login);