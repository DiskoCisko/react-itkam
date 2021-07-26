import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './ChatList.module.css';
const ChatList = (props) => {
    let chatList = props.dataUsers.map((item, index) => {
        return <NavLink to={item.path} key={index} className={s.link}>
                {item.name}
            </NavLink>
    })
    return (
        <ul>
            {chatList}
        </ul>
    )
}
export default ChatList;