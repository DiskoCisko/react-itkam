import React from 'react';
import s from './Profile.module.css';
import Posts from './../Posts/Posts.js';
import PostForm from './../Post_form/Post_form.js';
import { Redirect } from 'react-router-dom';
const Profile = (prpos) => {
  debugger;
  const contacts = []
  for(let prop in prpos.profile.contacts) {
    if(prpos.profile.contacts[prop]) {
      contacts.push(<p>{prop}: <a href={prpos.profile.contacts[prop]}>{prpos.profile.contacts[prop]}</a></p>) 
    }
  }
  let contact = contacts.map(item => {
    return item
  })
  let post = prpos.posts.map((item, index) => {
    return <Posts key={index} text={item.text} photo={prpos.profile.photos.small}/>
  })
  if (!prpos.isAuth) return <Redirect to="/login" />
    return <>
    <video loop muted autoPlay className="video-wrp">
              <source src={process.env.PUBLIC_URL + "/video/v1.ogv"} type='video/ogg; codecs="theora, vorbis"'/>
              <source src={process.env.PUBLIC_URL + "/video/v1.mp4"} type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'/>
              <source src={process.env.PUBLIC_URL + "/video/v1.webm"} type='video/webm; codecs="vp8, vorbis"'/>
            </video>
    <div className={s.wrp}>
    <img src={prpos.profile.photos.large} className={s.img}/>
    <div className={s.content}>
      <h2 >{prpos.profile.fullName}</h2>
      <p >{prpos.profile.lookingForAJob?'Ищу работу':'В работе'}</p>
      <p >{prpos.profile.lookingForAJobDescription}</p>
      <p >{contact}</p>
    </div>
</div>
<PostForm 
  onAddPost={prpos.onAddPost}
  onChange={prpos.onChange}
  formValue={prpos.formValue}
  
  />
  {post}
</>
}

export default Profile;