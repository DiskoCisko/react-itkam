import React from 'react';
import {useState} from 'react';

const Status = (props) => {
    let [isEditMode, setIsEditeMode] = useState(false)
    let [status, setStatus] = useState('Mystatus')

    let letEditStatus = () => {
        setIsEditeMode(!isEditMode)
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
            onBlur={letEditStatus}
            onChange={changeStatus}
            placeholder={status}
        />
    }
    
}

export default Status;