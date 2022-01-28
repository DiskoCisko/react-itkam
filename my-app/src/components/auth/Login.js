import { Redirect } from 'react-router-dom';
import React from 'react';
import { reduxForm } from 'redux-form';
import { PropTypes } from 'prop-types';
import { FormContainer } from '../common/FormControll/FormController';

export const WithFormReduxe = reduxForm({
  form: 'loginForm',
})(FormContainer);

const Login = ({ login, error, loginUser, captcha }) => {
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
Login.defaultProps = {
  login: '',
  error: '',
  captcha: false,
};
Login.propTypes = {
  login: PropTypes.string,
  error: PropTypes.string,
  loginUser: PropTypes.func.isRequired,
  captcha: PropTypes.bool,
};

export default Login;
