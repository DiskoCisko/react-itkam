import React from 'react';
import s from './Posts.module.css';

type PostsPropsType = {
  photo: string;
  text: string;
};

const Posts: React.FC<PostsPropsType> = (props) => {
  return (
    <div className={s.post}>
      <img
        alt="loading..."
        src={props.photo ? props.photo : `${process.env.PUBLIC_URL}/p2.png`}
        className={s.friendImg}
      />
      <p className={s.postText}>{props.text}</p>
    </div>
  );
};



export default Posts;
