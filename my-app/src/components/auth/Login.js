import {
    Redirect,
  } from "react-router-dom";
import React from 'react';
import { WithFormReduxe } from './AuthContainer'

const Login = ({login, error, loginUser}) => {
    if(login) {
        return <Redirect to="/profile" />
    }
    console.log(loginUser)
    return <>
        
        <h1>Login</h1>
        <WithFormReduxe errors={error} loginUser={loginUser}/>
    </>
}

export default Login