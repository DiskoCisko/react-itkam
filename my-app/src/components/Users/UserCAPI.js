import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { PropTypes } from 'prop-types';
import User from './User';
import {
  changeTotalCountPage,
  getUser,
  changeUserPage,
  follow,
  unfollow,
} from '../../reduxe/user-reducer.ts';
import {
  getUserSelector,
  getPageSizeSelector,
  getTotalCountSelector,
  getCurrentPageSelector,
  getIsFetchSelector,
  getIsFetchFollowSelector,
  getTogleFetcgFollowSelector,
} from '../../reduxe/selector';

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
class UserCAPI extends React.Component {
  componentDidMount() {
    this.props.getUser(this.props.currentPage, this.props.pageSize);
  }

  onFollow(e) {
    this.props.follow(e.target.id);
  }

  onUnfollow(e) {
    this.props.unfollow(e.target.id);
  }

  changePage(p) {
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
UserCAPI.defaultProps = {
  pageSize: 1,
  currentPage: 30,
};
UserCAPI.propTypes = {
  isFetch: PropTypes.bool.isRequired,
  totalCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number,
  currentPage: PropTypes.number,
  users: PropTypes.array.isRequired,
  getUser: PropTypes.func.isRequired,
  changeUserPage: PropTypes.func.isRequired,
  follow: PropTypes.func.isRequired,
  unfollow: PropTypes.func.isRequired,
  isFetchFollow: PropTypes.func.isRequired,
  togleFetcgFollow: PropTypes.func.isRequired,
};

export default compose(
  connect(mapStateToProps, {
    changeTotalCountPage,
    getUser,
    changeUserPage,
    follow,
    unfollow,
  }),
)(UserCAPI);
