import React from 'react';
import { Field, reduxForm } from 'redux-form';
import s from './PostForm.module.css';

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
       <Field className={s.textarea} name="text" component="textarea" type="text" />
       <button className={s.btn}>Send</button>
   </form>
}

const WithFormReduxe =  reduxForm({
  form: 'postForm',
})(FormContainer);


export default PostForm;