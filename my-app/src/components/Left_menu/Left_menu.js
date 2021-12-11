import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import FiendsList from '../Friends_list/Friends_list';
import {
  getUser,
} from '../../reduxe/user-reducer'
import s from './LeftMenu.module.css'
import {
  getUserSelector,
} from './../../reduxe/selector';

const LeftMenu = ({users, getUser}) => {
  useEffect(()=>{
    getUser()
  }, [])
  const userItem = users.map((item) => {
    if (item.followed) {
      return <FiendsList
        id={item.id}
        img={item.photos.small}
        name={item.name}
      />
    }
  })
    return <div className={s.wrp}>
     <h3 className={s.title}>Friends</h3>
    {userItem}
  </div>
}

const mapStateToProps = (state) => {
  return {
      users: getUserSelector(state),
  }
}

export default connect(mapStateToProps, {getUser})(LeftMenu);