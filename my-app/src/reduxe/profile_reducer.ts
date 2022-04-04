import { profileAPI} from '../DAL/api';
import { ThunkAction } from 'redux-thunk';
import { AppStateType } from './reduxe';
import { PhotoType, ProfileType, ResultCode, toggleEditeProfileModeActionType } from '../types/type';

const SET_PROFILE = 'SET_PROFILE';
const CHANGE_PHOTO = 'CHANGE_PHOTO';
const SET_ERROR_MESSAGE = 'SET_ERROR_MESSAGE';
export const TOGGLE_EDITEMODE_PROFILE = 'TOGGLE_EDITEMODE_PROFILE';
const DEL_PROFILE = 'DEL_PROFILE';

const inintState: null = null;





type setProfileActionType = {
  type: typeof SET_PROFILE;
  payload: ProfileType;
};

export const setProfile = (body: ProfileType): setProfileActionType => {
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

export const setErrorMessage = (message: string): setErrorMessageActionType => {
  return {
    type: SET_ERROR_MESSAGE,
    message,
  };
};

type changePhotoActionType = {
  type: typeof CHANGE_PHOTO;
  photo: PhotoType;
};

export const changePhoto = (photo: PhotoType): changePhotoActionType => {
  return {
    type: CHANGE_PHOTO,
    photo,
  };
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
    if (response.resultCode === ResultCode.Succsess) {
      const response = await profileAPI.getProfile(body.userId);
      dispatch(setProfile(response.data));
      toggleEditeProfileMode(false);
    } else dispatch(setErrorMessage(response.messages[0]));
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
    if (response.resultCode === ResultCode.Succsess) {
      dispatch(changePhoto(response.data.photos));
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
