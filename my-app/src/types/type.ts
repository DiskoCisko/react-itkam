
import { TOGGLE_EDITEMODE_PROFILE } from "../reduxe/profile_reducer";
import { CHANGE_TOTAL_COUNT_PAGE } from "../reduxe/user-reducer";

export enum ResultCode {
  Succsess = 0,
  Error = 1,
  Captcha = 10,
}

export type UserType = {
  id: number;
  name: string;
  status?: string;
  photos: PhotoType;
  followed: boolean;
};

export type AuthPropsType = {
  id: number | null;
  login: string | null;
  email: string | null;
};

export type authBodyType = {
  email: string;
  password: string;
  rememberMe?: boolean;
  captcha?: boolean;
};

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

export type toggleEditeProfileModeActionType = {
  type: typeof TOGGLE_EDITEMODE_PROFILE;
  editeMode: boolean;
};

export type changeTotalCountPageActionType = {
  type: typeof CHANGE_TOTAL_COUNT_PAGE;
  payload: number;
};

export type PhotoType = {
  large: string;
  small: string;
};