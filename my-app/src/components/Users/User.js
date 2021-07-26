import React from 'react';
import s from './Users.module.css';
import Loader from '../common/Loader';
import {
    NavLink
  } from "react-router-dom";
const User = (props) => {
    debugger
    let pageCount = Math.ceil(props.totalCount/(props.pageSize*100))
    let pages = []
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i)
    }
    
    let users = props.users.map(item => {
        
        return <div key={item.id}>
        <h1>
            {item.name}
        </h1>
        <NavLink to={"/profile/"+item.id}>
        <img src={item.photos.small?item.photos.small:'http://localhost:3000/p2.png'}/>
        </NavLink>
        <p>
            {item.status}
        </p>
        <button 
        disabled={props.togleFetcgFollow.some(id => id == item.id)}
        onClick={(e)=>{item.followed? props.onUnfollow(e): props.onFollow(e)}} id={item.id}>
            {item.followed? 'unfollowed': 'followed'}
        </button>
    </div>
    })
    return <>
    {props.isFetch?<Loader/>: <>
    <h1>
        Hey
    </h1>
        {pages.map(item => {
        return <span onClick={()=>{props.changePage(item)}} className={props.currentPage == item&&s.active}>{item}</span>
    })}
        {users}
    </>}
   
    </> 
}

export default User;