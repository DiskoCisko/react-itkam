
import { connect } from 'react-redux'
import Profile from './Profile';
import {onAddPost, onChange, setProfile} from './../../reduxe/actions';
import React from 'react';
import axios from 'axios';
import Loader from '../common/Loader'
import {
  withRouter
} from "react-router-dom";
class ProfileCAPI extends React.Component {
  componentDidMount = () => {

    let userId = this.props.match.params.userId
    if(!userId) {
      userId = 2
    }
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
    .then(response => this.props.setProfile(response.data))
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
    profile: state.profile.profile
  }
}

export default connect(mapStateToProps, {
  onAddPost,
  onChange,
  setProfile
} )(withRouter(ProfileCAPI));