import React from 'react';
import { NavLink } from 'react-router-dom';
import common from '../common/CommonStyles.module.css';
import s from './Users.module.css';
import { PhotoType } from '../Profile/Photo';

type UserItemType = {
  id: number,
  name: string,
  photos: PhotoType,
  status?: string,
  followed: boolean,
  onUnfollow: (e: React.ChangeEvent<HTMLInputElement>) => void,
  onFollow: (e: React.ChangeEvent<HTMLInputElement>) => void,
  togleFetcgFollow: number[],
};

const UserItem: React.FC<UserItemType> = (props) => {
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
        id={String(props.id)}
      >
        {props.followed ? 'unfollowed' : 'followed'}
      </button>
    </div>
  );
};

export default UserItem;


