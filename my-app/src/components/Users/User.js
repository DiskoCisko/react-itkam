import React from 'react';
import { PropTypes } from 'prop-types';
import Loader from '../common/Loader';
import Pagintor from './Paginator';
import UserItem from './UserItem';
import s from './Users.module.css';

const User = (props) => {
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

User.propTypes = {
  currentPage: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  totalCount: PropTypes.number.isRequired,
  isFetch: PropTypes.bool.isRequired,
  users: PropTypes.array.isRequired,
  onUnfollow: PropTypes.func.isRequired,
  onFollow: PropTypes.func.isRequired,
  togleFetcgFollow: PropTypes.func.isRequired,
  changePage: PropTypes.func.isRequired,
};

export default User;
