import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import Profile from './Profile';
import { getStatus, updateStatus } from '../../reduxe/status_Reducer.ts';
import {
  getProfile,
  savePhoto,
  toggleEditeProfileMode,
} from '../../reduxe/profile_reducer.ts';
import Loader from '../common/Loader';
import {
  getProfileSelector,
  getStatusSelector,
  getIdSelector,
} from '../../reduxe/selector';

class ProfileCAPI extends React.Component {
  componentDidMount() {
    this.refresheProfile();
  }

  componentDidUpdate(prevProps) {
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
      <Profile {...this.props} isOwner={!this.props.match.params.userId} />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    profile: getProfileSelector(state),
    status: getStatusSelector(state),
    id: getIdSelector(state),
  };
};
ProfileCAPI.defaultProps = {
  id: undefined,
};

ProfileCAPI.propTypes = {
  match: PropTypes.object.isRequired,
  id: PropTypes.number,
  profile: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  getProfile: PropTypes.func.isRequired,
  getStatus: PropTypes.func.isRequired,
};

export default compose(
  connect(mapStateToProps, {
    getProfile,
    getStatus,
    updateStatus,
    savePhoto,
    toggleEditeProfileMode,
  }),
  withRouter,
)(ProfileCAPI);
