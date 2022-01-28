import React from 'react';
import { PropTypes } from 'prop-types';
import s from './Posts.module.css';

const Posts = (props) => {
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

Posts.propTypes = {
  photo: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Posts;
