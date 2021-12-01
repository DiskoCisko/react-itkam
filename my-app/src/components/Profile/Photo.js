import React from 'react';
import s from './Profile.module.css';
import {useState, useEffect} from 'react';

const Photo = (props) => {
    let [photos, setPhotos] = useState(props.photos)
    const refreshePhoto = (e) => {
        if (e.target.value.length) {
          props.savePhoto(e.target.files[0])
        }
      }
      useEffect(() => {
        setPhotos(props.photos)
    }, [props.photos])
    return <>
        <img className={s.img} src={(photos)?photos.large:process.env.PUBLIC_URL + '/p2.png'} />
        {props.isOwner && (<input type="file" onChange={refreshePhoto}/>)}
    </>
}

export default Photo;