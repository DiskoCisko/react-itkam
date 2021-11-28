import React from 'react';
import s from './Profile.module.css';
import Posts from './../Posts/Posts.js';
import PostForm from './../Post_form/Post_form.js';
import Status from './Status';
const Profile = (props) => {
  const contacts = []
  for(let prop in props.profile.contacts) {
    if(props.profile.contacts[prop]) {
      contacts.push(<p>{prop}: <a href={props.profile.contacts[prop]}>{props.profile.contacts[prop]}</a></p>) 
    }
  }
  let contact = contacts.map(item => {
    return item
  })
  let post = props.posts.map((item, index) => {
    return <Posts key={index} text={item.text} photo={props.profile.photos.small}/>
  })
    return <>
    <video loop muted autoPlay className="video-wrp">
              <source src={process.env.PUBLIC_URL + "/video/v1.ogv"} type='video/ogg; codecs="theora, vorbis"'/>
              <source src={process.env.PUBLIC_URL + "/video/v1.mp4"} type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'/>
              <source src={process.env.PUBLIC_URL + "/video/v1.webm"} type='video/webm; codecs="vp8, vorbis"'/>
            </video>
    <div className={s.wrp}>
    <img src={props.profile.photos.large} className={s.img}/>
    <div className={s.content}>
      <h2 >{props.profile.fullName}</h2>
      <Status
        status={props.status}
        updateStatus={props.updateStatus}
        id={props.is}
        userId={props.match.params.userId}

      />
      <p >{props.profile.lookingForAJob?'Ищу работу':'В работе'}</p>
      <p >{props.profile.lookingForAJobDescription}</p>
      <p >{contact}</p>
    </div>
</div>
<PostForm 
  onAddPost={props.onAddPost}
  />
  {post}
</>
}

export default Profile;