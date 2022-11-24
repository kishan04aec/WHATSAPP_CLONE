import axios from 'axios';

const url = 'https://love-chats.herokuapp.com/';

export const addUser = async (data) => {
    try {
        let response = await axios.post(`${url}/add`, data);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.log('Error while calling addUser API ', error);
    }
}

export const getUsers = async () => {
    try {
        let response = await axios.get(`${url}/users`);
         console.log(response.data)
        return response.data;
    } catch (error) {
        console.log('Error while calling addUser API ', error);
    }
}
export const setConversation = async (data) => {
    try {
        await axios.post(`${url}/conversation/add`, data);
    } catch (error) {
        console.log('Error while calling setConversation API ', error);
    }
}
export const getConversation = async (users) => {
    try {
        let response = await axios.post(`${url}/conversation/get`, users);
        return response.data;
    } catch (error) {
        console.log('Error while calling getConversation API ', error);
    }
}
export const newMessages = async (data) => {
    try {
        return await axios.post(`${url}/message/add`, data);
    } catch (error) {
        console.log('Error while calling newConversations API ', error);
    }
}
export const getMessages = async (id) => {
    try {
        return await axios.get(`${url}/message/get/${id}`);
    
    } catch (error) {
        console.log('Error while calling getMessages API ', error);
    }
}