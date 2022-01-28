import React from 'react';
import { PropTypes } from 'prop-types';
import s from './PostForm.module.css';

const Textarea = ({ input, ...props }) => {
  const hasError = props.meta.touched && props.meta.error;
  return (
    <div className={`${s.formControll} ${(hasError ? s.error : ' ')}`}>
      <span className={s.lable}>{props.lable}</span>
      <textarea {...input} {...props} className={s.textarea} />
      {hasError && <span>{props.meta.error}</span>}
    </div>
  );
};

Textarea.propTypes = {
  lable: PropTypes.string.isRequired,
  input: PropTypes.object.isRequired,
  meta: PropTypes.object.isRequired,
};

export default Textarea;
