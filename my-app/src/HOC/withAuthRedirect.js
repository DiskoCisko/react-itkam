import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { PropTypes } from 'prop-types';

const withAuthRedirect = (Component) => {
  const mapStateToProps = (state) => {
    return {
      isAuth: state.auth.isAuth,
    };
  };
  const RedirectAuth = (props) => {
    if (!props.isAuth) {
      return <Redirect to="/login" />;
    }
    return <Component {...props} />;
  };
  RedirectAuth.propTypes = {
    isAuth: PropTypes.bool.isRequired,
  };
  const ConnectRedirectAuth = connect(mapStateToProps, {})(RedirectAuth);
  return ConnectRedirectAuth;
};

export default withAuthRedirect;
