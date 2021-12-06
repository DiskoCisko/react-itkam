import { Field, reduxForm } from 'redux-form';
import {Input} from './Input.js';
import {Textarea} from './Textarea';
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

export const FormContainerProfile = ({ handleSubmit, saveProfile, userId, deactiveEditeMode, profile}) => {
    const  submit = (values) => {
        saveProfile({
            ...values,
            userId: userId
        }).then(()=> {
            //deactiveEditeMode()
        })
        
        
   }
     return <form onSubmit={handleSubmit(submit)}>
     <button className={s.btn}>Save</button>
        {profile.errMessage&&(<div className={s.summaryError}>{profile.errMessage}</div>)}
        {createdField("fullName", Input, [], {type: "text", lable: "full Name", value: profile.fullName} )}
        {createdField("lookingForAJob", Input, [], {type: "checkbox", lable: "looking for a job", value: false} )}
        {createdField("lookingForAJobDescription", Textarea, [], {type: "text", lable: "looking for a job description", value: profile.lookingForAJobDescription} )}
        {createdField("AboutMe", Textarea, [], {type: "text", lable: "looking for a job description", value: profile.AboutMe} )} 
        <h3>Contacts</h3>
        {Object.keys(profile.contacts).map((item)=>{
            return createdField("contacts."+ item, Input, [], {type: "text", lable: item} )
        })}       
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
 