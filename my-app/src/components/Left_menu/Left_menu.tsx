import React from 'react';
import { connect } from 'react-redux';
import FiendsList from '../Friends_list/Friends_list.tsx';
import s from './LeftMenu.module.css';
import { getUserSelector } from '../../reduxe/selector';
import { UserType } from '../../DAL/api';

const LeftMenu: React.FC<mapStateToPropsType> = ({ users }) => {
  // useEffect(() => {
  //   getUser();
  // }, []);
  const userItem = users.map((item) => {
    if (item.followed) {
      return (
        <FiendsList id={item.id} img={item.photos.small} name={item.name} />
      );
    }
    return '';
  });
  return (
    <div className={s.wrp}>
      <h3 className={s.title}>Friends</h3>
      {userItem}
    </div>
  );
};

type mapStateToPropsType = {
  users: UserType[];
};

const mapStateToProps = (state) => {
  return {
    users: getUserSelector(state),
  };
};

export default connect(mapStateToProps, {})(LeftMenu);