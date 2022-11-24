import { useContext, useState, useEffect } from 'react';
import { UserContext } from '../../context/UserProvider';
import { AccountContext} from '../../context/AccountProvider'

import { getConversation } from '../../service/api';
import ChatHeader from './ChatHeader';
import Messages from './Messages';
import { Box } from '@material-ui/core';




const Chat =()=>{
    const { person, setPerson } = useContext(UserContext);
     const { account } = useContext(AccountContext);
           const [conversation, setConversation] = useState({});
    useEffect(() => {
        const getConversationDetails = async () => {
            let data = await getConversation({ sender: account.googleId, receiver: person.googleId });
            setConversation(data);
        }
        console.log({sender:account.googleId});
        console.log( person.googleId)
        getConversationDetails();
    }, [person.googleId]);
    return(
        <Box>
            <ChatHeader/>
            <Messages conversation ={conversation} person ={person}/>
        </Box>
    )
}

export default Chat;
