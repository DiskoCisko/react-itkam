import React from 'react';
import {
    NavLink
  } from "react-router-dom";
  
const UserItem = (props) => {
    return <div key={props.id}>
    <h1>
        {props.name}
    </h1>
    <NavLink to={"/profile/"+props.id}>
    <img src={props.photos.small?props.photos.small:process.env.PUBLIC_URL + '/p2.png'}/>
    </NavLink>
    <p>
        {props.status}
    </p>
    <button 
    disabled={props.togleFetcgFollow.some(id => id == props.id)}
    onClick={(e)=>{props.followed? props.onUnfollow(e): props.onFollow(e)}} id={props.id}>
        {props.followed? 'unfollowed': 'followed'}
    </button>
</div>
}

export default UserItem;