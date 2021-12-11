import React from 'react';
import FiendsList from '../Friends_list/Friends_list';
import s from './LeftMenu.module.css'
const LeftMenu = () => {
    return <div className={s.wrp}>
    <FiendsList/>
  </div>
}

export default LeftMenu;