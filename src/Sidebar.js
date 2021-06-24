import React, { useEffect, useState } from 'react';
import './Sidebar.css';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Avatar, IconButton } from '@material-ui/core';
import { SearchOutlined } from '@material-ui/icons';
import SidebarChat from './SidebarChat';
import axios from './axios';

const Sidebar = () => {

    const [rooms, setRooms] = useState([]);

    useEffect(() => {
        console.log("in use effect");
        axios.get('/chats/new')
            .then(response => {
                const roomsData = response.data;
                console.log("roomsdata",roomsData);
                setRooms(rooms.map(room => {
                    return ({
                        id: room.id,
                        name: room.name,
                    })
                }))
            })
            .catch(err => {
                console.log('err',err);
            });
    }, [rooms])

    return (
        <div className="sidebar">
            <div className="sidebar_header">
                <Avatar src="https://media-exp1.licdn.com/dms/image/C5603AQFX5N7kgU4pnQ/profile-displayphoto-shrink_200_200/0/1617531463406?e=1626912000&v=beta&t=vYvx2_H_kISVw0SJ5vwJ2RQKlmGN9oUnMaNLW-sQcPY" />
                <div className="sidebar_headerRight">
                    <IconButton>
                        <DonutLargeIcon />
                    </IconButton>
                    <IconButton>
                        <ChatIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
            </div>
            <div className="sidebar_search">
                <div className="sidebar_searchContainer">
                    <SearchOutlined />
                    <input placeholder="Search or start new chat"
                        type="text" />
                </div>
            </div>
            {console.log('rooms',rooms)}
            <div className="sidebar_chats">
                <SidebarChat addNewChat />
                {rooms.map(room => {
                    return <SidebarChat key={room.id} id={room.id}
                        name={room.name} />
                })}
            </div>
        </div >
    );
};

export default Sidebar;