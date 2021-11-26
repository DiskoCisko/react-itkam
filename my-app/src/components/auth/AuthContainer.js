import React from 'react';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import Login from './Login';
import {loginUser} from '../../reduxe/actions';
import {FormContainer} from './../common/FormControll/FormController'
import {Input} from '../common/FormControll/Input'
import {requiredFilled, minSymbols6, maxSymbols20} from "../utils/validation.js"
import s from './FormContainer.module.css'


export const WithFormReduxe =  reduxForm({
    form: 'loginForm',
  })(FormContainer);

const mapStateToProps = (state) => {
    debugger
    return {
        login: state.auth.login,
        error: state.auth.error
    }
}
export default connect(mapStateToProps, {loginUser})(Login)