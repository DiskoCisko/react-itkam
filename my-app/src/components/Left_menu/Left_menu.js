import React from 'react';
import LeftNav from './Left_nav/Left_nav';
import FiendsList from '../Friends_list/Friends_list';
import s from './LeftMenu.module.css'
const LeftMenu = () => {
    return <div className={s.wrp}>
    <LeftNav/>
    <FiendsList/>
  </div>
}

export default LeftMenu;