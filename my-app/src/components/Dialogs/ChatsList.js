import React from 'react';
import { NavLink } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import s from './ChatList.module.css';

const ChatList = (props) => {
  const chatList = props.dataUsers.map((item) => {
    return (
      <NavLink to={item.path} key={item.path} className={s.link}>
        {item.name}
      </NavLink>
    );
  });
  return <ul>{chatList}</ul>;
};
ChatList.propTypes = {
  dataUsers: PropTypes.array.isRequired,
};

export default ChatList;
