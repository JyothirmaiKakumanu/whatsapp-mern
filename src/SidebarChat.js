import React, { useEffect, useState } from 'react';
import './SidebarChat.css';
import {Avatar} from '@material-ui/core';

const SidebarChat = ({id, name, addNewChat}) => {

const [seed, setSeed] = useState('');

    useEffect(()=>{
        setSeed(Math.floor(Math.random()*5000));
    },[])

    const createChat=()=>{
        const roomName = prompt("Please enter name for chat");

        if(roomName){
            //do some clever database stuff
        }
    }

    return !addNewChat ?(
        <div className="sidebarChat">
            <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
            <div className="sidebarChat_info">
                <h2>{name}</h2>
                <p>This is the last message</p>
            </div>
        </div>
    ):(
        <div onClick={createChat}
        className="sidebarChat">
            <h2>Add New Chat</h2>
        </div>

    )
};

export default SidebarChat;