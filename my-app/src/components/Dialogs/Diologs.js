import React from 'react';
import s from './Diologs.module.css';
import ChatsList from './ChatsList';
import Messages from './Messages';
import {
    BrowserRouter as Router,
    Route
  } from "react-router-dom";

const Dialogs = (props) => {
    
    let message = props.dataMessages.map((item, index) => {
        return <Route path={item.path} key={index} exact>
        <Messages 
         message={item}/>
    </Route>
    })

    return (
        <div className={s.content}>
            <ChatsList dataUsers={props.dataUsers} className={s.leftNav}/>
            <div className={s.main}>
                <Router>
                   {message}
                </Router>
             </div>
        </div>
    )
}

export default Dialogs;