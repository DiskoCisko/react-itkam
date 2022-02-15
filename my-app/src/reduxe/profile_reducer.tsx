import { profileAPI } from '../DAL/api';
import {PhotoType} from '../components/Profile/Photo'

const SET_PROFILE = 'SET_PROFILE';
const CHANGE_PHOTO = 'CHANGE_PHOTO';
const SET_ERROR_MESSAGE = 'SET_ERROR_MESSAGE';
const TOGGLE_EDITEMODE_PROFILE = 'TOGGLE_EDITEMODE_PROFILE';

const inintState = {
  photos: {} as PhotoType | null,
};

type ContactsType = {
  github: string;
  vk: string;
  facebook: string;
  instagram: string;
  twitter: string;
  website: string;
  youtube: string;
  mainLink: string;
};

type ProfileType = {
  userId: number;
  lookingForAJob: boolean;
  lookingForAJobDescription: string;
  fullName: string;
  contacts: ContactsType;
};

type setProfileActionType = (body: ProfileType) => {
  type: typeof SET_PROFILE;
  payload: ProfileType;
};
 
const setProfile: setProfileActionType = (body) => {
  return {
    type: SET_PROFILE,
    payload: body,
  };
};

type setErrorMessageActionType = (message: string) => {
  type: typeof SET_ERROR_MESSAGE;
  message: string;
};

const setErrorMessage: setErrorMessageActionType = (message) => {
  return {
    type: SET_ERROR_MESSAGE,
    message,
  };
};

type changePhotoActionType = (photo: PhotoType) => {
  type: typeof CHANGE_PHOTO;
  photo: PhotoType;
};

const changePhoto: changePhotoActionType = (photo) => {
  return {
    type: CHANGE_PHOTO,
    photo,
  };
};

type toggleEditeProfileModeActionType = (bool: boolean) => {
  type: typeof TOGGLE_EDITEMODE_PROFILE;
  editeMode: boolean;
};

export const toggleEditeProfileMode: toggleEditeProfileModeActionType = (bool) => {
  return {
    type: TOGGLE_EDITEMODE_PROFILE,
    editeMode: bool,
  };
};

export const saveProfile = (body) => {
  return async (dispatch) => {
    let response = await profileAPI.saveProfile(body);
    if (response.data.resultCode === 0) {
      response = await profileAPI.getProfile(body.userId);
      dispatch(setProfile(response.data));
      toggleEditeProfileMode(false);
    } else dispatch(setErrorMessage(response.data.messages[0]));
  };
};

export const getProfile = (userId) => {
  return async (dispatch) => {
    const response = await profileAPI.getProfile(userId);
    dispatch(setProfile(response.data));
  };
};

export const savePhoto = (file) => {
  return async (dispatch) => {
    const response = await profileAPI.savePhoto(file);
    if (response.data.resultCode === 0) {
      dispatch(changePhoto(response.data.data.photos));
    }
  };
};

export const profileReducer = (state = inintState, action) => {
  switch (action.type) {
    case 'SET_PROFILE': {
      return {
        ...action.payload,
      };
    }
    case 'CHANGE_PHOTO': {
      const newState = {
        ...state,
        photos: action.photo,
      };
      return newState;
    }
    case 'SET_ERROR_MESSAGE': {
      return {
        ...state,
        errMessage: action.message,
      };
    }
    case 'TOGGLE_EDITEMODE_PROFILE': {
      return {
        ...state,
        editeMode: action.editeMode,
      };
    }
    default:
      return state;
  }
};
