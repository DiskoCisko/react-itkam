import React from 'react';
import { connect } from 'react-redux';
import {
    Redirect,
  } from "react-router-dom";

export let withAuthRedirect = (Component) => {
const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}
    const RedirectAuth = (props) => {
        if (!props.isAuth) {
            return <Redirect to="/login" />
        } else return <Component {...props}/>
    }
    const ConnectRedirectAuth = connect(mapStateToProps, {} )(RedirectAuth);
    return ConnectRedirectAuth
}