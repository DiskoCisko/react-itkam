import React from 'react';

const Messages = (props) => {
    return (        
        <p> 
            {props.message.message}
            <span>
            {props.message.author}
            </span>
        </p>
    )
}
export default Messages;