import { Redirect } from 'react-router-dom';
import React from 'react';
import { reduxForm } from 'redux-form';
import { FormContainer } from '../common/FormControll/FormController.tsx';
import { PropsType } from './AuthContainer';

export const WithFormReduxe = reduxForm({
  form: 'loginForm',
})(FormContainer);

const Login: React.FC<PropsType> = ({ login, error, loginUser, captcha }) => {

  if (login) {
    return <Redirect to="/profile" />;
  }
  return (
    <>
      <h1>Login</h1>
      <WithFormReduxe errors={error} loginUser={loginUser} captcha={captcha} />
    </>
  );
};

export default Login;
