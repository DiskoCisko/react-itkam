
import { connect } from 'react-redux'
import Profile from './Profile';
import {onAddPost, onChange, getProfile} from './../../reduxe/actions';
import React from 'react';
import Loader from '../common/Loader'
import {
  withRouter
} from "react-router-dom";
class ProfileCAPI extends React.Component {
  componentDidMount = () => {
    let userId = this.props.match.params.userId
    this.props.getProfile(userId)
  }
  
  render() {
    if(!this.props.profile) {
      return <Loader/>
    } else return <Profile {...this.props}/>
  }
}

const mapStateToProps = (state) => {
  debugger
  return {
    posts: state.profile.posts,
    formValue: state.profile.formValue,
    profile: state.profile.profile,
    isAuth: state.auth.isAuth
  }
}

export default connect(mapStateToProps, {
  onAddPost,
  onChange,
  getProfile
} )(withRouter(ProfileCAPI));