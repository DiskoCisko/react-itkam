
import { connect } from 'react-redux'
import Profile from './Profile';
import {onAddPost, getProfile, getStatus, updateStatus, savePhoto} from './../../reduxe/actions';
import React from 'react';
import Loader from '../common/Loader'
import {
  withRouter
} from "react-router-dom";
import { compose } from 'redux';
import {
  getPostsSelector,
  getProfileSelector,
  getStatusSelector,
  getIdSelector
} from './../../reduxe/selector'

class ProfileCAPI extends React.Component {
  refresheProfile() {
    let userId = this.props.match.params.userId
    if (!userId) {
      userId = this.props.id
      if (!userId) {
        this.props.history.push('/login')
      }
    }
    this.props.getProfile(userId)
    this.props.getStatus(userId)
  }
  componentDidMount = () => {
    this.refresheProfile()
  }
  componentDidUpdate = (prevProps) => {
    if(this.props.match.params.userId !== prevProps.match.params.userId) {
      this.refresheProfile()
    }
  }
  render() {
    if(!this.props.profile) {
      return <Loader/>
    } else return <Profile 
      {...this.props}
      isOwner = {!this.props.match.params.userId}
    />
  }
}

const mapStateToProps = (state) => {
  return {
    posts: getPostsSelector(state),
    profile: getProfileSelector(state),
    status: getStatusSelector(state),
    id: getIdSelector(state)
  }
}

export default compose(
  connect(mapStateToProps, {
    onAddPost,
    getProfile,
    getStatus,
    updateStatus,
    savePhoto
  } ),
  withRouter,
)(ProfileCAPI)
