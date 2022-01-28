import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './LeftNav.module.css';

const LeftNav = () => {
  return (
    <ul className={s.navbar}>
      <NavLink to="/dialogs" activeClassName={s.active} className={`${s.item}`}>
        page #1
      </NavLink>
      <NavLink to="/profile" activeClassName={s.active} className={s.item}>
        page #2
      </NavLink>
      {/* <NavLink className={s.item}>
      page #3
    </NavLink>
    <NavLink className={s.item}>
      page #4
    </NavLink> */}
    </ul>
  );
};

export default LeftNav;
