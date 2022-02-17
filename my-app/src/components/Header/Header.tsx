import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';
import common from '../common/CommonStyles.module.css';

type HeaderPropsType = {
  login: string,
  logoutUser: () => (dispatch: any) => Promise<void>,
};

const Header: React.FC<HeaderPropsType> = (props) => {
  return (
    <header className={s.header}>
      <div className={s.container}>
        <div>
          <img
            alt="loading"
            className={s.logo}
            src={`${process.env.PUBLIC_URL}/logo192.png`}
          />
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
        {props.login ? (
          props.login
        ) : (
          <button type="button" className={common.btn}>
            <NavLink to="/login">Login</NavLink>
          </button>
        )}
        {props.login ? (
          <button
            type="button"
            className={common.btn}
            onClick={props.logoutUser}
          >
            Logout
          </button>
        ) : (
          ''
        )}
      </div>
    </header>
  );
};

export default Header;
