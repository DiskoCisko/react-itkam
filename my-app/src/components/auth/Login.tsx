import { Redirect } from 'react-router-dom';
import React from 'react';
import { reduxForm } from 'redux-form';
import { FormContainer } from '../common/FormControll/FormController';

export const WithFormReduxe = reduxForm({
  form: 'loginForm',
})(FormContainer);

type LoginBodyType = {
  email: string;
  password: string;
  rememberMe?: boolean;
  captcha?: boolean;
};

type LoginPropsType = {
  login?: string;
  error?: string;
  captcha?: boolean;
  loginUser: (a: LoginBodyType) => void;
};

const Login: React.FC<LoginPropsType> = ({
  login,
  error,
  loginUser,
  captcha,
}) => {
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
