import React from 'react';
import s from './Posts.module.css'
const Posts = (props) => {
    return <div className={s.post}>
      <img src={props.photo} className={s.friendImg}/>
      <p className={s.postText}>{props.text}</p>
    </div>
}

export default Posts;