
import { connect } from 'react-redux'
import Profile from './Profile';
import {onAddPost, getProfile, getStatus, updateStatus} from './../../reduxe/actions';
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
  componentDidMount = () => {
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
  
  render() {
    if(!this.props.profile) {
      return <Loader/>
    } else return <Profile {...this.props}/>
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
    updateStatus
  } ),
  withRouter,
)(ProfileCAPI)
