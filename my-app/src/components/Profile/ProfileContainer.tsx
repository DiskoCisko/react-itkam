import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Profile from './Profile.tsx';
import { getStatus, updateStatus } from '../../reduxe/status_Reducer';
import {
  getProfile,
  savePhoto,
  toggleEditeProfileMode,
  toggleEditeProfileModeActionType,
} from '../../reduxe/profile_reducer';
import Loader from '../common/Loader';
import {
  getProfileSelector,
  getStatusSelector,
  getIdSelector,
} from '../../reduxe/selector';
import { ProfileType } from '../../reduxe/profile_reducer';
import { AppStateType } from '../../reduxe/reduxe';

class ProfileCAPI extends React.Component<PropsType> {
  componentDidMount() {
    this.refresheProfile();
  }

  componentDidUpdate(prevProps: PropsType) {
    if (this.props.match.params.userId !== prevProps.match.params.userId) {
      this.refresheProfile();
    }
  }

  refresheProfile() {
    let { userId } = this.props.match.params;
    if (!userId) {
      userId = this.props.id;
      if (!userId) {
        this.props.history.push('/login');
      }
    }
    this.props.getProfile(userId);
    this.props.getStatus(userId);
  }

  render() {
    if (!this.props.profile) {
      return <Loader />;
    }
    return (
      <Profile
        toggleEditeProfileMode={this.props.toggleEditeProfileMode}
        editeMode={this.props.profile.editeMode}
        lookingForAJobDescription={this.props.profile.lookingForAJobDescription}
        lookingForAJob={this.props.profile.lookingForAJob}
        contacts={this.props.profile.contacts}
        userId={this.props.match.params.userId}
        id={this.props.id}
        updateStatus={this.props.updateStatus}
        status={this.props.status}
        fullName={this.props.profile.fullName}
        savePhoto={this.props.savePhoto}
        photos={this.props.profile.photos}
        isOwner={!this.props.match.params.userId}
      />
    );
  }
}

type PropsType = MapStateToPropsType & MapDipatcheToPropsType & OwnPropsType;

type MapStateToPropsType = {
  profile: ProfileType
  status: string;
  id: number;
};

type MapDipatcheToPropsType = {
  toggleEditeProfileMode: (bool: boolean) => toggleEditeProfileModeActionType;
  savePhoto: (file: File) => (dispatch: any) => Promise<void>;
  getProfile: (userId: number) => (dispatch: any) => Promise<void>;
  getStatus: (userId: number) => (dispatch: any) => Promise<void>;
  updateStatus: (status: string) => (dispatch: any) => Promise<never>;
};

type OwnPropsType = {
  match: { params: { userId: number } };
  history: Array<string>
};

const mapStateToProps = (state) => {
  return {
    profile: getProfileSelector(state),
    status: getStatusSelector(state),
    id: getIdSelector(state),
  };
};

export default compose(
  connect<
    MapStateToPropsType,
    MapDipatcheToPropsType,
    OwnPropsType,
    AppStateType
  >(mapStateToProps, {
    getProfile,
    getStatus,
    updateStatus,
    savePhoto,
    toggleEditeProfileMode,
  }),
  withRouter
)(ProfileCAPI);
