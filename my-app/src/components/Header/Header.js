import React from 'react';
import s from './Header.module.css'
import {
  NavLink
} from "react-router-dom";

const Header = (props) => {
    return <header className={s.header}>
    <div className={s.container}>
      <div >
        <img className={s.logo} src={process.env.PUBLIC_URL + "/logo192.png"}/>
      </div>
      <ul className={s.navbar}>
        {/* <NavLink to="/dialogs" className={`${s.item} ${s.active}`}>
          dialogs
        </NavLink> */}
        <NavLink to="/profile" className={s.item}>
          profile
        </NavLink>
        <NavLink to="/users" className={s.item}>
          users
        </NavLink>
      </ul>
      {props.login?props.login:<button className={s.btn}><NavLink to="/login">
          Login
        </NavLink></button>}
        {props.login?<button className={s.btn} onClick={props.logoutUser}>
          Logout
        </button>:<></>}
    </div>
  </header>
}

export default Header;