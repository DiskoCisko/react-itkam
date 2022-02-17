import React from 'react';
import ProfileDataForm from './ProfileDataForm.tsx';
import s from '../common/CommonStyles.module.css';
import { ContactsType, toggleEditeProfileModeActionType } from '../../reduxe/profile_reducer';

type ProfileDataType = {
  isOwner: boolean,
  contacts: ContactsType,
  lookingForAJob: boolean,
  lookingForAJobDescription: string,
  editeMode: boolean,
  toggleEditeProfileMode: (bool: boolean) => toggleEditeProfileModeActionType,
};

const ProfileData: React.FC<ProfileDataType> = (props) => {
  const activeEditeMode = () => {
    props.toggleEditeProfileMode(true);
  };
  let contact;
  if (props.contacts) {
    contact = Object.keys(props.contacts).map((item) => {
  return (
    <p>
      {item}: <a href={props.contacts[item]}>{props.contacts[item]}</a>
    </p>
  );
});
  }
    
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

export default ProfileData;
