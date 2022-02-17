import React from 'react';
import s from './Profile.module.css';
import Status from './Status.tsx';
import Photo from './Photo.tsx';
import ProfileData from './ProfileData.tsx';
import { PhotoType } from './Photo';
import { ContactsType, toggleEditeProfileModeActionType } from '../../reduxe/profile_reducer';

type ProfilePropsType = {
  isOwner: boolean
  photos?: PhotoType;
  fullName: string;
  status: string;
  id: number;
  userId: number;
  contacts: ContactsType;
  lookingForAJob: boolean;
  lookingForAJobDescription: string;
  editeMode?: boolean;
  toggleEditeProfileMode: (bool: boolean) => toggleEditeProfileModeActionType;
  updateStatus: (status: string) => (dispatch: any) => Promise<never>;
  savePhoto: (file: File) => (dispatch: any) => Promise<void>;
};

const Profile: React.FC<ProfilePropsType> = ({
  photos,
  savePhoto,
  isOwner,
  fullName,
  status,
  updateStatus,
  id,
  userId,
  contacts,
  lookingForAJob,
  lookingForAJobDescription,
  editeMode,
  toggleEditeProfileMode,
}) => {
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
          <Photo photos={photos} savePhoto={savePhoto} isOwner={isOwner} />
        </div>

        <div className={s.content}>
          <h2>{fullName}</h2>
          <Status
            status={status}
            updateStatus={updateStatus}
            id={id}
            userId={userId}
          />
          <ProfileData
            isOwner={isOwner}
            contacts={contacts}
            lookingForAJob={lookingForAJob}
            lookingForAJobDescription={lookingForAJobDescription}
            editeMode={editeMode}
            toggleEditeProfileMode={toggleEditeProfileMode}
          />
        </div>
      </div>
    </>
  );
};

export default Profile;
