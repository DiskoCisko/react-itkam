import { profileAPI } from '../DAL/api';
import {PhotoType} from '../components/Profile/Photo'
import { ThunkAction } from 'redux-thunk';
import { AppStateType } from './reduxe';

const SET_PROFILE = 'SET_PROFILE';
const CHANGE_PHOTO = 'CHANGE_PHOTO';
const SET_ERROR_MESSAGE = 'SET_ERROR_MESSAGE';
const TOGGLE_EDITEMODE_PROFILE = 'TOGGLE_EDITEMODE_PROFILE';
const DEL_PROFILE = 'DEL_PROFILE';

const inintState: null = null;

export type ContactsType = {
  github: string;
  vk: string;
  facebook: string;
  instagram: string;
  twitter: string;
  website: string;
  youtube: string;
  mainLink: string;
};

export type ProfileType = {
  userId: number;
  lookingForAJob: boolean;
  lookingForAJobDescription: string;
  fullName: string;
  contacts: ContactsType;
  errMessage?: string;
  editeMode?: boolean;
  photos?: PhotoType;
};



type setProfileActionType = {
  type: typeof SET_PROFILE;
  payload: ProfileType;
};

const setProfile = (body: ProfileType): setProfileActionType => {
  return {
    type: SET_PROFILE,
    payload: body,
  };
};

export type delProfileActionType = {
  type: typeof DEL_PROFILE;
};

export const delProfile = (): delProfileActionType => {
  return {
    type: DEL_PROFILE,
  };
};

type setErrorMessageActionType = {
  type: typeof SET_ERROR_MESSAGE;
  message: string;
};

const setErrorMessage = (message: string): setErrorMessageActionType => {
  return {
    type: SET_ERROR_MESSAGE,
    message,
  };
};

type changePhotoActionType = {
  type: typeof CHANGE_PHOTO;
  photo: PhotoType;
};

const changePhoto = (photo: PhotoType): changePhotoActionType => {
  return {
    type: CHANGE_PHOTO,
    photo,
  };
};

export type toggleEditeProfileModeActionType = {
  type: typeof TOGGLE_EDITEMODE_PROFILE;
  editeMode: boolean;
};

export const toggleEditeProfileMode = (
  bool: boolean
): toggleEditeProfileModeActionType => {
  return {
    type: TOGGLE_EDITEMODE_PROFILE,
    editeMode: bool,
  };
};

export const saveProfile = (
  body: ProfileType
): ThunkAction<
  void,
  AppStateType,
  unknown,
  setProfileActionType | setErrorMessageActionType
> => {
  return async (dispatch) => {
    const response = await profileAPI.saveProfile(body);
    if (response.data.resultCode === 0) {
      const response = await profileAPI.getProfile(body.userId);
      dispatch(setProfile(response.data));
      toggleEditeProfileMode(false);
    } else dispatch(setErrorMessage(response.data.messages[0]));
  };
};

export const getProfile = (
  userId: number
): ThunkAction<void, AppStateType, unknown, setProfileActionType> => {
  return async (dispatch) => {
    const response = await profileAPI.getProfile(userId);
    dispatch(setProfile(response.data));
  };
};

export const savePhoto = (
  file: File
): ThunkAction<void, AppStateType, unknown, changePhotoActionType> => {
  return async (dispatch) => {
    const response = await profileAPI.savePhoto(file);
    if (response.data.resultCode === 0) {
      dispatch(changePhoto(response.data.data.photos));
    }
  };
};

export const profileReducer = (
  state = inintState as ProfileType | null,
  action:
    | setProfileActionType
    | setErrorMessageActionType
    | changePhotoActionType
    | toggleEditeProfileModeActionType
    | delProfileActionType
): ProfileType => {
  switch (action.type) {
    case SET_PROFILE: {
      return {
        ...action.payload,
      };
    }
case DEL_PROFILE: {
  return inintState;
}
    case CHANGE_PHOTO: {
      const newState = {
        ...state,
        photos: action.photo,
      };
      return newState;
    }
    case SET_ERROR_MESSAGE: {
      return {
        ...state,
        errMessage: action.message,
      };
    }
    case TOGGLE_EDITEMODE_PROFILE: {
      return {
        ...state,
        editeMode: action.editeMode,
      };
    }
    default:
      return state as ProfileType | null;
  }
};
