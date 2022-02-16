import React from 'react';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { FormContainerProfile } from '../common/FormControll/FormController';
import { getProfileSelector, getIdSelector } from '../../reduxe/selector';
import { saveProfile } from '../../reduxe/profile_reducer.ts';

export const WithFormReduxe = reduxForm({
  form: 'loginForm',
})(FormContainerProfile);

const mapStateToProps = (state) => {
  return {
    profile: getProfileSelector(state),
    userId: getIdSelector(state),
  };
};

const ProfileDataForm = ({
  saveProfile,
  userId,
  deactiveEditeMode,
  profile,
}) => {
  return (
    <WithFormReduxe
      initialValues={profile}
      userId={userId}
      saveProfile={saveProfile}
      deactiveEditeMode={deactiveEditeMode}
      profile={profile}
    />
  );
};

ProfileDataForm.propTypes = {
  userId: PropTypes.number.isRequired,
  profile: PropTypes.object.isRequired,
  saveProfile: PropTypes.func.isRequired,
  deactiveEditeMode: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, { saveProfile })(ProfileDataForm);
