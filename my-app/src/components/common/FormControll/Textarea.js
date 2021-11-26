import React from "react"
import s from './PostForm.module.css';

export const Textarea = ({input, ...props}) => {
    const hasError = props.meta.touched&&props.meta.error
    return <div className={s.formControll + " " + (hasError ? s.error : " ")}>
        <textarea {...input} {...props} className={s.textarea}/>
        {hasError&&<span>{props.meta.error}</span>}
    </div>
}