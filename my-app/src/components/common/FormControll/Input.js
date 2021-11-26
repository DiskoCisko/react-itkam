import React from "react"
import s from './PostForm.module.css';
import { Field } from 'redux-form';

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

export const Input = ({input, ...props}) => {
    const hasError = props.meta.touched&&props.meta.error
    return <div className={s.formControll + " " + (hasError ? s.error : "")}>
        <span className={s.lable}>{props.lable}</span>
        <input {...input} {...props} className={s.input}/>
        {hasError && <span>{props.meta.error}</span>}
    </div>
}
