import { Field, reduxForm } from 'redux-form';
import {Input} from './Input.js';
import {requiredFilled, minSymbols6, maxSymbols20} from "./../../utils/validation";
import s from './FormContainer.module.css'

export const FormContainer = ({loginUser, reset, handleSubmit, errors}) => {
   const  submit = (values) => {
    loginUser(values);
    reset();
  }
    return <form onSubmit={handleSubmit(submit)}>
        {createdField("email", Input, [requiredFilled, maxSymbols20], {type: "email", lable: "Email"} )}
        {createdField("password", Input, [requiredFilled, minSymbols6], {type: "password", lable: "Password"} )}
        {errors&&<div className={s.summaryError}>
            Uncorret Password or Email
        </div>}
        <button className={s.btn}>Submit</button>
    </form>
}


export const createdField = (name, component, validators, props, placeholder = "", text = "") => {
    return <div>
       <Field
        name = {name}
        component={component}
        validate={validators}
        placeholder={placeholder}
        {...props}
        />
        {text}
    </div>
}
 