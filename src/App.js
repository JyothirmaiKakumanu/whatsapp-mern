import './App.css';
import Sidebar from './Sidebar';
import Chat from './Chat';  
import { useEffect, useState } from 'react';
import Pusher from 'pusher-js';
import axios from './axios';

function App() {

  const [messages, setMessages] = useState([]);

  useEffect(()=>{
    axios.get('/messages/sync')
    .then(response=>{
      setMessages(response.data);
    })
  },[])


  useEffect(()=>{
    const pusher = new Pusher('610a23e5c7eb56b6f9aa', {
      cluster: 'ap2'
    });

    var channel = pusher.subscribe('messages');
    channel.bind('inserted', (newMessage)=> {
      setMessages([...messages,newMessage])
    });

    return ()=>{
      channel.unbind_all();
      channel.unsubscribe();
    }
  },[messages])


  console.log('messages',messages);
  return (
    <div className="app">
      <div className="app-body">
      <Sidebar />
      <Chat messages={messages}/>
      </div>
    </div>
  );
}

export default App;
