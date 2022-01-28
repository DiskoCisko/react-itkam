import React from 'react';
import { PropTypes } from 'prop-types';
import ProfileDataForm from './ProfileDataForm';
import s from '../common/CommonStyles.module.css';

const ProfileData = (props) => {
  const activeEditeMode = () => {
    props.toggleEditeProfileMode(true);
  };
  const contact = Object.keys(props.contacts).map((item) => {
    return (
      <p>
        {item}: <a href={props.contacts[item]}>{props.contacts[item]}</a>
      </p>
    );
  });
  if (props.editeMode) {
    return <ProfileDataForm />;
  }
  return (
    <>
      <p>{props.lookingForAJob ? 'Ищу работу' : 'В работе'}</p>
      <p>{props.lookingForAJobDescription}</p>
      <p>{contact}</p>
      {props.isOwner && (
        <button type="button" className={s.btn} onClick={activeEditeMode}>
          Править
        </button>
      )}
    </>
  );
};
ProfileData.defaultProps = {
  lookingForAJob: false,
  editeMode: false,
  lookingForAJobDescription: '',
  contacts: {},
};
ProfileData.propTypes = {
  lookingForAJob: PropTypes.bool,
  editeMode: PropTypes.bool,
  lookingForAJobDescription: PropTypes.string,
  isOwner: PropTypes.bool.isRequired,
  contacts: PropTypes.object,
  toggleEditeProfileMode: PropTypes.func.isRequired,
};

export default ProfileData;
