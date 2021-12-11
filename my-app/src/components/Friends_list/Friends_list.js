import React from 'react';
import {
  NavLink
} from "react-router-dom";
import s from './FriendList.module.css'
const FiendsList = ({name, img, id}) => {
    return <div key={id}>
      <NavLink to={"/profile/"+id}>
      <div className={s.friendCard}>
        <img src={img?img:process.env.PUBLIC_URL + "/p2.png"} className={s.friendImg}/>
        <p className={s.friendText}>{name}</p>
      </div>
      </NavLink>
    </div>
}

export default FiendsList;