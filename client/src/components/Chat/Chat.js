import React, { useState, useEffect } from "react";
import queryString from 'query-string';
import io from "socket.io-client";

// import TextContainer from '../TextContainer/TextContainer';
 import Messages from '../Messages/Messages';
 import InfoBar from '../infoBar/infoBar';
 import Input from '../Input/Input';
import TextContainer from '../TextContainer/TextContainer'
import './Chat.css';

let socket;

const Chat = ({ location }) => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const [users, setUsers] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const ENDPOINT = 'https://chat-application-web.herokuapp.com/';

  useEffect(() => {
    const { name, room } = queryString.parse(location.search);

    socket = io(ENDPOINT);

    setRoom(room);
    setName(name)

    socket.emit('join', { name, room }, (error) => {
      if(error) {
        alert(error);
      }
    });
  }, [ENDPOINT, location.search]);
  
  useEffect(() => {
    socket.on('message', message => {
      setMessages(messages => [ ...messages, message ]);
    });
    
    socket.on("roomData", ({ users }) => {
      setUsers(users);
    });
}, []);

  const sendMessage = (event) => {
    event.preventDefault();

    if(message) {
      socket.emit('sendMessage', message, () => setMessage(''));
    }
  }
console.log(messages,message)
  return (
    <div className="outerContainer">
      <div className="container">
      <InfoBar room={room}/>

      <Messages messages={messages} name={name}/>

      <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
      
    {/* <input
    value={message} 
     onChange={(event)=> setMessage(event.target.value)}
    onKeyPress={(event)=>event.key==='Enter' ? sendMessage(event): null}


    /> */}


    </div>
    <TextContainer users={users}/>
</div>
  );
}

export default Chat;
