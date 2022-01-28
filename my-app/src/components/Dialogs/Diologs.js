import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import s from './Diologs.module.css';
import ChatsList from './ChatsList';
import Messages from './Messages';

const Dialogs = (props) => {
  const message = props.dataMessages.map((item) => {
    return (
      <Route path={item.path} key={item.path} exact>
        <Messages message={item} />
      </Route>
    );
  });

  return (
    <div className={s.content}>
      <ChatsList dataUsers={props.dataUsers} className={s.leftNav} />
      <div className={s.main}>
        <Router>{message}</Router>
      </div>
    </div>
  );
};

Dialogs.propTypes = {
  dataMessages: PropTypes.array.isRequired,
  dataUsers: PropTypes.array.isRequired,
};

export default Dialogs;
