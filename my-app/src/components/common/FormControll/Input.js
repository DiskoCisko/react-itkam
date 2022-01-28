import React from 'react';
import { Field } from 'redux-form';
import { PropTypes } from 'prop-types';
import s from './PostForm.module.css';

export const createdField = (
  name,
  component,
  validators,
  props,
  placeholder = '',
  text = '',
) => {
  return (
    <div>
      <Field
        name={name}
        component={component}
        validate={validators}
        placeholder={placeholder}
        {...props}
      />
      {text}
    </div>
  );
};

export const Input = ({ input, ...props }) => {
  const hasError = props.meta.touched && props.meta.error;
  return (
    <div className={`${s.formControll} ${(hasError ? s.error : '')}`}>
      <span className={s.lable}>{props.lable}</span>
      <input {...input} {...props} className={s.input} />
      {hasError && <span>{props.meta.error}</span>}
    </div>
  );
};

Input.propTypes = {
  lable: PropTypes.string.isRequired,
  input: PropTypes.any.isRequired,
  meta: PropTypes.object.isRequired,
};
