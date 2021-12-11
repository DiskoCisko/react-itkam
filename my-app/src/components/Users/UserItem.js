import React from 'react';
import common from './../common/CommonStyles.module.css'
import {
    NavLink
  } from "react-router-dom";
import s from './Users.module.css';

const UserItem = (props) => {
    return <div key={props.id} className={s.itemWrap}>
    <h1>
        {props.name}
    </h1>
    <NavLink to={"/profile/"+props.id}>
    <img className={s.img} src={props.photos.large?props.photos.large:process.env.PUBLIC_URL + '/p2.png'}/>
    </NavLink>
    <p>
        {props.status}
    </p>
    <button
    className={common.btn}
    disabled={props.togleFetcgFollow.some(id => id == props.id)}
    onClick={(e)=>{props.followed? props.onUnfollow(e): props.onFollow(e)}} id={props.id}>
        {props.followed? 'unfollowed': 'followed'}
    </button>
</div>
}

export default UserItem;