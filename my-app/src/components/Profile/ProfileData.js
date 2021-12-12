import React from "react";
import ProfileDataForm from './ProfileDataForm';
import s from './../common/CommonStyles.module.css'

const ProfileData = (props) => {

const activeEditeMode = () => {
  debugger
  props.toggleEditeProfileMode(true)
}
    const contacts = []
    for(let prop in props.contacts) {
        if(props.contacts[prop]) {
          contacts.push(<p>{prop}: <a href={props.contacts[prop]}>{props.contacts[prop]}</a></p>) 
        }
      }
      let contact = contacts.map(item => {
        return item
      })
      if (props.editeMode)  {
          return <ProfileDataForm />
      } else {
        return <>
        <p >{props.lookingForAJob?'Ищу работу':'В работе'}</p>
        <p >{props.lookingForAJobDescription}</p>
        <p >{contact}</p>
        {props.isOwner && (<button className={s.btn} onClick={activeEditeMode}>Править</button>)}
      </>
      }
      
}

export default ProfileData;