import React from 'react';
import { Field, reduxForm } from 'redux-form';
import s from './PostForm.module.css';
import {requiredFilled, maxSymbols50} from "./../utils/validation.js"
import {Textarea} from './../common/FormControll/Textarea.js'

const PostForm = (props) => {
    return <div className={s.form}>
    <h2 >My posts</h2>
    <WithFormReduxe addPost={props.onAddPost}/>
  </div>
}

const FormContainer = ({handleSubmit, reset, addPost} ) => {
    
  const  submit = (values) => {
  addPost(values.text)
   reset();
 }
   return <form onSubmit={handleSubmit(submit)}>
       <Field
       name="text" component={Textarea}
       type="text"
       placeholder="Your message"
       validate={[requiredFilled, maxSymbols50]}
       />
       <button className={s.btn}>Send</button>
   </form>
}

const WithFormReduxe =  reduxForm({
  form: 'postForm',
})(FormContainer);


export default PostForm;