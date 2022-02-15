import React from 'react';
import { PropTypes } from 'prop-types';
import s from './Profile.module.css';
import Status from './Status';
import Photo from './Photo.tsx';
import ProfileData from './ProfileData';

const Profile = (props) => {
  return (
    <>
      <video loop muted autoPlay className={s.videoWrp}>
        <source
          src={`${process.env.PUBLIC_URL}/video/v1.ogv`}
          type='video/ogg; codecs="theora, vorbis"'
        />
        <source
          src={`${process.env.PUBLIC_URL}/video/v1.mp4`}
          type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'
        />
        <source
          src={`${process.env.PUBLIC_URL}/video/v1.webm`}
          type='video/webm; codecs="vp8, vorbis"'
        />
      </video>
      <div className={s.wrp}>
        <div className={s.wrpImg}>
          <Photo
            photos={props.profile.photos}
            savePhoto={props.savePhoto}
            isOwner={props.isOwner}
          />
        </div>

        <div className={s.content}>
          <h2>{props.profile.fullName}</h2>
          <Status
            status={props.status}
            updateStatus={props.updateStatus}
            id={props.id}
            userId={props.match.params.userId}
          />
          <ProfileData
            isOwner={props.isOwner}
            contacts={props.profile.contacts}
            lookingForAJob={props.profile.lookingForAJob}
            lookingForAJobDescription={props.profile.lookingForAJobDescription}
            editeMode={props.profile.editeMode}
            toggleEditeProfileMode={props.toggleEditeProfileMode}
          />
        </div>
      </div>
    </>
  );
};
Profile.defaultProps = {
  status: undefined,
  id: undefined,
};
Profile.propTypes = {
  profile: PropTypes.object.isRequired,
  savePhoto: PropTypes.func.isRequired,
  isOwner: PropTypes.bool.isRequired,
  status: PropTypes.string,
  updateStatus: PropTypes.func.isRequired,
  id: PropTypes.number,
  match: PropTypes.object.isRequired,
  toggleEditeProfileMode: PropTypes.func.isRequired,
};

export default Profile;
