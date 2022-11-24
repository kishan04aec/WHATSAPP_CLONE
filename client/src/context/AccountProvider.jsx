import { createContext, useState, useEffect, useRef } from 'react';
import  {io} from 'socket.io-client'

export const AccountContext = createContext(null);


const AccountProvider = ({children})=>{
     const [ account, setAccount ] = useState();
     const [activeUsers,setActiveUsers]= useState([])
     const [newMessageFlag, setNewMessageFlag] = useState(false);

      const socket = useRef();
       useEffect(() => {
        socket.current = io('https://love-chats.herokuapp.com/');
          }, [])
         
     return (
         <AccountContext.Provider value={{ 
            account, 
            setAccount, 
            // showloginButton,
            // setShowloginButton,
            // showlogoutButton,
            // setShowlogoutButton,
               socket,
              activeUsers,
              setActiveUsers,
             newMessageFlag,
               setNewMessageFlag
        }}>
            {children}
        </AccountContext.Provider>
    )
}


export default AccountProvider;