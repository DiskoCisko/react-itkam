import React from 'react';
import s from './Profile.module.css';
import common from './../common/CommonStyles.module.css';
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
        <img className={s.img} src={(photos.large)?photos.large:process.env.PUBLIC_URL + '/p2.png'} />
        {props.isOwner && (<div className={`${common.btn}` + " " + `${s.btn}`}>
          <input className={s.inputFile} type="file" id="input__file" onChange={refreshePhoto}/>
          <label for="input__file">
            <span >Выберите файл</span>
          </label>
        </div>
          
          
        )}
    </>
}

export default Photo;