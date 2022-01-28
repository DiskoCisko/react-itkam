import React from 'react';
import { NavLink } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import common from '../common/CommonStyles.module.css';
import s from './Users.module.css';

const UserItem = (props) => {
  return (
    <div key={props.id} className={s.itemWrap}>
      <h1>{props.name}</h1>
      <NavLink to={`/profile/${props.id}`}>
        <img
          alt="loading..."
          className={s.img}
          src={
            props.photos.large
              ? props.photos.large
              : `${process.env.PUBLIC_URL}/p2.png`
          }
        />
      </NavLink>
      <p>{props.status}</p>
      <button
        type="button"
        className={common.btn}
        disabled={props.togleFetcgFollow.some((id) => {
          return id === props.id;
        })}
        onClick={(e) => {
          props.followed ? props.onUnfollow(e) : props.onFollow(e);
        }}
        id={props.id}
      >
        {props.followed ? 'unfollowed' : 'followed'}
      </button>
    </div>
  );
};

UserItem.propTypes = {
  followed: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  photos: PropTypes.object.isRequired,
  togleFetcgFollow: PropTypes.func.isRequired,
  onUnfollow: PropTypes.func.isRequired,
  onFollow: PropTypes.func.isRequired,
};

export default UserItem;
