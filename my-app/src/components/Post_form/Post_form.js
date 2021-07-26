import React from 'react';
import s from './PostForm.module.css';

const PostForm = (props) => {
  let change = (e) => {
    props.onChange(e.target.value)
  }
  let addPost = () => {
    props.onAddPost(props.formValue);
}
    return <div className={s.form}>
    <h2 >My posts</h2>
    <textarea  
    className={s.textarea} 
    onChange={change} 
    value={props.formValue}
    placeholder= 'Your news...'
    > </textarea>
    <button className={s.btn} onClick={addPost}>Send</button>
  </div>
}

export default PostForm;