import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import {loginUser} from './../../reduxe/actions';
import s from './FormContainer.module.css'

const FormContainer = ({handleSubmit, reset, loginUser} ) => {
    
   const  submit = (values) => {
    loginUser(values);
    reset();
  }
    return <form onSubmit={handleSubmit(submit)}>
        <Field className={s.input} name="email" component="input" type="email" />
        <Field className={s.input} name="password" component="input" type="password"/>
        <button>Submit</button>
    </form>
}

const WithFormReduxe =  reduxForm({
    form: 'loginForm',
  })(FormContainer);

const Login = ({ loginUser }) => {
    return <>
        <h1>Login</h1>
        <WithFormReduxe loginUser={loginUser}/>
    </>
}

const mapStateToProps = (state) => {
    return {
        login: state.auth.login
    }
}

export default connect(mapStateToProps, {loginUser})(Login)