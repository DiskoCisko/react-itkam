import React from 'react';
import { Field } from 'redux-form';
import { PropTypes } from 'prop-types';
import { Input } from './Input';
import Textarea from './Textarea';
import {
  requiredFilled,
  minSymbols6,
  maxSymbols20,
} from '../../utils/validation';
import s from '../CommonStyles.module.css';
import { authBodyType } from '../../../DAL/api';
import { ProfileType } from '../../../reduxe/profile_reducer';

export const createdField = (
  name,
  component,
  validators,
  props,
  placeholder = '',
  text = '',
) => {
  return (
    <div>
      <Field
        name={name}
        component={component}
        validate={validators}
        placeholder={placeholder}
        {...props}
      />
      {text}
    </div>
  );
};

type FormContainerPropsType = {
  error: string;
  loginUser: (body: authBodyType) => (dispatch: any) => Promise<void>;
  captcha: string | boolean;
  reset: any;
  handleSubmit: any;
};

export const FormContainer: React.FC<FormContainerPropsType> = ({
  loginUser,
  reset,
  handleSubmit,
  error,
  captcha,
}) => {
  const submit = (values) => {
    loginUser(values);
    reset();
  };
  return (
    <form onSubmit={handleSubmit(submit)}>
      {createdField('email', Input, [requiredFilled, maxSymbols20], {
        type: 'email',
        lable: 'Email',
      })}
      {createdField('password', Input, [requiredFilled, minSymbols6], {
        type: 'password',
        lable: 'Password',
      })}
      {captcha && <img alt="captcha" src={captcha} />}
      {captcha &&
        createdField('captcha', Input, [requiredFilled], {
          type: 'text',
          lable: 'Captcha',
        })}
      {error && <div className={s.summaryError}>{error}</div>}
      <button type="submit" className={s.btn}>
        Submit
      </button>
    </form>
  );
};

type FormContainerProfileType = {
  initialValues: ProfileType;
  userId: number;
  saveProfile: (body: ProfileType) => (dispatch: any) => Promise<void>;
  profile: ProfileType;
  handleSubmit: any;
};

export const FormContainerProfile: React.FC<FormContainerProfileType> = ({
  handleSubmit,
  saveProfile,
  userId,
  profile,
}) => {
  const submit = (values) => {
    saveProfile({
      ...values,
      userId,
    }).then(() => {});
  };
  return (
    <form onSubmit={handleSubmit(submit)}>
      <button type="submit" className={s.btn}>
        Save
      </button>
      {profile.errMessage && (
        <div className={s.summaryError}>{profile.errMessage}</div>
      )}
      {createdField('fullName', Input, [], {
        type: 'text',
        lable: 'full Name',
        value: profile.fullName,
      })}
      {createdField('lookingForAJob', Input, [], {
        type: 'checkbox',
        lable: 'looking for a job',
        value: false,
      })}
      {createdField('lookingForAJobDescription', Textarea, [], {
        type: 'text',
        lable: 'looking for a job description',
        value: profile.lookingForAJobDescription,
      })}
      {createdField('AboutMe', Textarea, [], {
        type: 'text',
        lable: 'About me',
        value: profile.AboutMe,
      })}
      <h3>Contacts</h3>
      {Object.keys(profile.contacts).map((item) => {
        return createdField(`contacts.${item}`, Input, [], {
          type: 'text',
          lable: item,
        });
      })}
    </form>
  );
};

FormContainerProfile.propTypes = {
  profile: PropTypes.object.isRequired,
  userId: PropTypes.number.isRequired,
  saveProfile: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};
