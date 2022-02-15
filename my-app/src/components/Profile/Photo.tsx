import React, { useState, useEffect } from 'react';
import s from './Profile.module.css';
import common from '../common/CommonStyles.module.css';

export type PhotoType = {
  large: string;
  small: string;
};

type PhotoPropsType = {
  photos: PhotoType;
  isOwner: boolean;
  savePhoto: any;
};

const Photo: React.FC<PhotoPropsType> = (props) => {
  const [photos, setPhotos] = useState(props.photos);
  const refreshePhoto = (e) => {
    if (e.target.value.length) {
      props.savePhoto(e.target.files[0]);
    }
  };
  useEffect(() => {
    setPhotos(props.photos);
  }, [props.photos]);
  return (
    <>
      <img
        alt="loadin..."
        className={s.img}
        src={photos.large ? photos.large : `${process.env.PUBLIC_URL}/p2.png`}
      />
      {props.isOwner && (
        <div className={`${common.btn} ${s.btn}`}>
          <label htmlFor="input__file">
            <input
              className={s.inputFile}
              type="file"
              id="input__file"
              onChange={refreshePhoto}
            />
            <span>Выберите файл</span>
          </label>
        </div>
      )}
    </>
  );
};


export default Photo;
