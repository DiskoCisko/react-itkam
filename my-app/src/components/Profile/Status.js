import React from 'react';
import {useState} from 'react';

const Status = (props) => {
    let [isEditMode, setIsEditeMode] = useState(false)
    let [status, setStatus] = useState(props.status)

    let letEditStatus = () => {
        setIsEditeMode(true)
    }
    let closeEditStatus = (e) => {
        setIsEditeMode(false)
        props.updateStatus(status)
    }
    let changeStatus = (e) => {
        setStatus(e.target.value)
    }

    if(!isEditMode) {
        return <>
        <p onDoubleClick={letEditStatus}>{status}</p>
    </>
    } else {
        return <input
            onBlur={closeEditStatus}
            onChange={changeStatus}
            placeholder={status}
        />
    }
    
}

export default Status;