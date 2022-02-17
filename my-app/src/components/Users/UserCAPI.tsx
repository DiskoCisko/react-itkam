import React, { ChangeEvent, Dispatch } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import User from './User.tsx';
import {
  changeTotalCountPage,
  getUser,
  changeUserPage,
  follow,
  unfollow,
  changeTotalCountPageActionType,
} from '../../reduxe/user-reducer';
import {
  getUserSelector,
  getPageSizeSelector,
  getTotalCountSelector,
  getCurrentPageSelector,
  getIsFetchSelector,
  getIsFetchFollowSelector,
  getTogleFetcgFollowSelector,
} from '../../reduxe/selector';
import { AppStateType } from '../../reduxe/reduxe';
import { UserType } from '../../DAL/api';

const mapStateToProps = (state) => {
  return {
    users: getUserSelector(state),
    pageSize: getPageSizeSelector(state),
    totalCount: getTotalCountSelector(state),
    currentPage: getCurrentPageSelector(state),
    isFetch: getIsFetchSelector(state),
    isFetchFollow: getIsFetchFollowSelector(state),
    togleFetcgFollow: getTogleFetcgFollowSelector(state),
  };
};
class UserCAPI extends React.Component<AllPropsType> {
  componentDidMount() {
    this.props.getUser(this.props.currentPage, this.props.pageSize);
  }

  onFollow(e: ChangeEvent<HTMLInputElement>) {
    this.props.follow(e.target.id);
  }

  onUnfollow(e: ChangeEvent<HTMLInputElement>) {
    this.props.unfollow(e.target.id);
  }

  changePage(p: number) {
    this.props.changeUserPage(p, this.props.pageSize);
  }

  render() {
    this.changePage = this.changePage.bind(this);
    this.onUnfollow = this.onUnfollow.bind(this);
    this.onFollow = this.onFollow.bind(this);
    return (
      <User
        totalCount={this.props.totalCount}
        currentPage={this.props.currentPage}
        users={this.props.users}
        pageSize={this.props.pageSize}
        changePage={this.changePage}
        onUnfollow={this.onUnfollow}
        onFollow={this.onFollow}
        isFetch={this.props.isFetch}
        isFetchFollow={this.props.isFetchFollow}
        togleFetcgFollow={this.props.togleFetcgFollow}
      />
    );
  }
}

type AllPropsType = MapStateToPropsType & MapDispatchToPropsType

type MapStateToPropsType = {
  users: UserType[];
  pageSize: number;
  totalCount: number;
  currentPage: number;
  isFetch: boolean;
  isFetchFollow: boolean;
  togleFetcgFollow: number[];
};

type MapDispatchToPropsType = {
  changeTotalCountPage: (p: number) => changeTotalCountPageActionType;
  getUser: (
    currentPage: number,
    pageSize: number
  ) => (dispatch: any) => Promise<void>;
  changeUserPage: (
    currentPage: number,
    pageSize: number
  ) => (dispatch: any) => Promise<void>;
  follow: (id: string) => (dispatch: any) => Promise<void>;
  unfollow: (id: string) => (dispatch: any) => Promise<void>;
};

type OwnProps = {}

export default compose(
  connect<MapStateToPropsType, MapDispatchToPropsType, OwnProps, AppStateType>(
    mapStateToProps,
    {
      changeTotalCountPage,
      getUser,
      changeUserPage,
      follow,
      unfollow,
    }
  )
)(UserCAPI);
