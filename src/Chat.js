import { Avatar, IconButton } from '@material-ui/core';
import { AttachFile, MoreVert, SearchOutlined } from '@material-ui/icons';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';
import React, { useState , useEffect} from 'react';
import axios from './axios';
import './Chat.css';

const Chat = ({ messages }) => {

    const [input, setInput] = useState('');
    const [seed, setSeed] = useState('');

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));
    }, [])


    const sendMessage = async (e) => {
        e.preventDefault();

        await axios.post('/messages/new', {
            message: input,
            name: "DEMO App",
            timestamp: "Just now!",
            received: false
        })
        setInput('');
    }
    return (
        <div className="chat">
            <div className="chat_header">
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />

                <div className="chat_headerInfo">
                    <h3>Room Name</h3>
                    <p>last seen at ...</p>
                </div>
                <div className="chat_headerRight">
                    <IconButton>
                        <SearchOutlined />
                    </IconButton>
                    <IconButton>
                        <AttachFile />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </div>

            </div>
            <div className="chat_body">
                {messages.map((message) => (
                    <p className={`chat_message ${message.received && "chat_receiver"}`}>
                        <span className="chat_name">{message.name}</span>
                        {message.message}
                        <span className="chat_timestamp">
                            {message.timestamp}
                        </span>
                    </p>
                ))}

            </div>
            <div className="chat_footer">
                <InsertEmoticonIcon />
                <form>
                    <input placeholder="Type a message"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        type="text" />
                    <button
                        type="submit"
                        onClick={sendMessage}>
                        Send a message
                    </button>
                    <MicIcon />
                </form>

            </div>
        </div>
    );
};

export default Chat;