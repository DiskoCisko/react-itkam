import React from 'react';
import s from './FriendList.module.css'
const FiendsList = () => {
    
    return <div >
      <h3 className={s.title}>Friends</h3>
      <div className={s.friendCard}>
        <img src={process.env.PUBLIC_URL + "/p2.png"} className={s.friendImg}/>
        <p className={s.friendText}>Name</p>
      </div>
      <div className={s.friendCard}>
        <img src={process.env.PUBLIC_URL + "/p2.png"} className={s.friendImg}/>
        <p className={s.friendText}>Name</p>
      </div>
      <div className={s.friendCard}>
        <img src={process.env.PUBLIC_URL + "/p2.png"} className={s.friendImg}/>
        <p className={s.friendText}>Name</p>
      </div>
    </div>
}

export default FiendsList;