import React from 'react';
import {useState, useEffect} from 'react';

const Status = (props) => {
    let [isEditMode, setIsEditeMode] = useState(false)
    let [status, setStatus] = useState(props.status)

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    let letEditStatus = () => {
        if(props.id === props.userId) {
            setIsEditeMode(true)
        }
    }
    let closeEditStatus = () => {
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