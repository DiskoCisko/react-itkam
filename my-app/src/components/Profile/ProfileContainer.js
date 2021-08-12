
import { connect } from 'react-redux'
import Profile from './Profile';
import {onAddPost, getProfile, getStatus, updateStatus} from './../../reduxe/actions';
import React from 'react';
import Loader from '../common/Loader'
import {
  withRouter
} from "react-router-dom";
import {withAuthRedirect} from './../../HOC/withAuthRedirect';
import { compose } from 'redux';

class ProfileCAPI extends React.Component {
  componentDidMount = () => {
    let userId = this.props.match.params.userId
    this.props.getProfile(userId)
    this.props.getStatus(userId)
  }
  
  render() {
    if(!this.props.profile) {
      return <Loader/>
    } else return <Profile {...this.props}/>
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.profile.posts,
    profile: state.profile.profile,
    status: state.profile.status,
  }
}

export default compose(
  connect(mapStateToProps, {
    onAddPost,
    getProfile,
    getStatus,
    updateStatus
  } ),
  withRouter,
  withAuthRedirect
)(ProfileCAPI)
