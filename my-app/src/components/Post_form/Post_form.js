import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { PropTypes } from 'prop-types';
import s from './PostForm.module.css';
import { requiredFilled, maxSymbols50 } from '../utils/validation';
import { Textarea } from '../common/FormControll/Textarea';

const PostForm = (props) => {
  return (
    <div className={s.form}>
      <h2>My posts</h2>
      <WithFormReduxe addPost={props.onAddPost} />
    </div>
  );
};

PostForm.propTypes = {
  onAddPost: PropTypes.string.isRequired,
};

const FormContainer = ({ handleSubmit, reset, addPost }) => {
  const submit = (values) => {
    addPost(values.text);
    reset();
  };
  return (
    <form onSubmit={handleSubmit(submit)}>
      <Field
        name="text"
        component={Textarea}
        type="text"
        placeholder="Your message"
        validate={[requiredFilled, maxSymbols50]}
      />
      <button type="button" className={s.btn}>
        Send
      </button>
    </form>
  );
};

FormContainer.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
  addPost: PropTypes.func.isRequired,
};

const WithFormReduxe = reduxForm({
  form: 'postForm',
})(FormContainer);

export default PostForm;
