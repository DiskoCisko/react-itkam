import React from 'react';
import Loader from '../common/Loader';
import Pagintor from './Paginator.tsx';
import UserItem from './UserItem.tsx';
import s from './Users.module.css';
import { UserType } from '../../DAL/api';

type UserPropsType = {
  totalCount: number;
  currentPage: number;
  users: UserType[];
  pageSize: number;
  changePage: (p: number) => void;
  onUnfollow: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFollow: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isFetch: boolean;
  isFetchFollow: boolean;
  togleFetcgFollow: number[];
};

const User: React.FC<UserPropsType> = (props) => {
  const users = props.users.map((item) => {
    return (
      <UserItem
        id={item.id}
        name={item.name}
        photos={item.photos}
        status={item.status}
        followed={item.followed}
        onUnfollow={props.onUnfollow}
        onFollow={props.onFollow}
        togleFetcgFollow={props.togleFetcgFollow}
      />
    );
  });
  return (
    <div>
      {props.isFetch ? (
        <Loader />
      ) : (
        <>
          <Pagintor
            totalCount={props.totalCount}
            pageSize={props.pageSize}
            changePage={props.changePage}
            currentPage={props.currentPage}
          />
          <div className={s.wrpUsers}>{users}</div>
        </>
      )}
    </div>
  );
};

export default User;
