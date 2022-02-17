import React from 'react';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { FormContainerProfile } from '../common/FormControll/FormController.tsx';
import { getProfileSelector, getIdSelector } from '../../reduxe/selector';
import { saveProfile } from '../../reduxe/profile_reducer';
import { ProfileType } from '../../reduxe/profile_reducer';
import { AppStateType } from '../../reduxe/reduxe';

export const WithFormReduxe = reduxForm({
  form: 'loginForm',
})(FormContainerProfile);

type PropsType = MapStateToPropsType & MapDispatchToProps;

type MapStateToPropsType = {
  profile: ProfileType,
  userId: number,
};

type MapDispatchToProps = {
  saveProfile: (body: ProfileType) => (dispatch: any) => Promise<void>;
};

type OwnProps = {}

const mapStateToProps = (state) => {
  return {
    profile: getProfileSelector(state),
    userId: getIdSelector(state),
  };
};

const ProfileDataForm: React.FC<PropsType> = ({
  saveProfile,
  userId,
  profile,
}) => {
  return (
    <WithFormReduxe
      initialValues={profile}
      userId={userId}
      saveProfile={saveProfile}
      profile={profile}
    />
  );
};

export default connect<
  MapStateToPropsType,
  MapDispatchToProps,
  OwnProps,
  AppStateType
>(mapStateToProps, { saveProfile })(ProfileDataForm);
