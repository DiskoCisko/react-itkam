import { ThunkAction } from 'redux-thunk';
import { auth} from '../DAL/api';
import { AuthPropsType, ResultCode, authBodyType } from '../types/type';
import { delProfile, delProfileActionType } from './profile_reducer';
import { AppStateType } from './reduxe';

const inintState = {
  email: null as string | null,
  login: null as string | null,
  id: null as number | null,
  isAuth: false,
  error: null as string | null,
  captcha: null as string | boolean,
};

const SET_AUTH = 'SET_AUTH';
const DEL_AUTH = 'DEL_AUTH';
const SET_ERROR = 'SET_ERROR';
const GET_CAPTCHA_SUCCESSE = 'GET_CAPTCHA_SUCCESSE';


type setAuthActionType = {
  type: typeof SET_AUTH;
  payload: AuthPropsType;
};

export const setAuth = (body: AuthPropsType): setAuthActionType => {
  return {
    type: SET_AUTH,
    payload: body,
  };
};

type delAuthActionType = {
  type: typeof DEL_AUTH;
};

export const delAuth = (): delAuthActionType => {
  return {
    type: DEL_AUTH,
  };
};

type setErrorActionType = {
  type: typeof SET_ERROR;
  message: string;
};

export const setError = (message: string): setErrorActionType => {
  return {
    type: SET_ERROR,
    message,
  };
};

type getCaptchaSuccesseActionType = {
  type: typeof GET_CAPTCHA_SUCCESSE;
  url: string;
};

export const getCaptchaSuccesse = (url: string): getCaptchaSuccesseActionType => {
  return {
    type: GET_CAPTCHA_SUCCESSE,
    url,
  };
};

export const authUser = (): ThunkAction<
  void,
  AppStateType,
  unknown,
  setAuthActionType
> => {
  return async (dispatch) => {
    const response = await auth.me();
    const { id, login, email }: AuthPropsType = response.data;
    if (response.resultCode === ResultCode.Succsess) {
      dispatch(setAuth({ id, login, email }));
    }
    return response;
  };
};

export const getCaptcha = (): ThunkAction<
  void,
  AppStateType,
  unknown,
  getCaptchaSuccesseActionType
> => {
  return async (dispatch) => {
    const response = await auth.getCaptcha();
    dispatch(getCaptchaSuccesse(response.url));
  };
};

export const loginUser = (
  body: authBodyType
): ThunkAction<
  void,
  AppStateType,
  unknown,
  setAuthActionType | setErrorActionType
> => {
  return async (dispatch) => {
    const response = await auth.login(body);
    if (response.resultCode === ResultCode.Succsess) {
      auth.me().then((resp) => {
        const { id, login, email }: AuthPropsType = resp.data;
        if (resp.resultCode === ResultCode.Succsess) {
          dispatch(setAuth({ id, login, email }));
        } else dispatch(setError(resp.messages[0]));
      });
    } else if (response.resultCode === ResultCode.Captcha) {
      dispatch(getCaptcha());
      dispatch(setError(response.messages[0]));
    } else {
      dispatch(setError(response.messages[0]));
    }
  };
};

export const logoutUser = (): ThunkAction<
  void,
  AppStateType,
  unknown,
  delAuthActionType | setAuthActionType | delProfileActionType
  
> => {
  return async (dispatch) => {
    const response = await auth.logout();
    if (response.resultCode === ResultCode.Succsess) {
      dispatch(delAuth());
      dispatch(setAuth({ id: null, login: null, email: null }));
      dispatch(delProfile());
    };
};
}
export const authReducer = (
  state = inintState,
  action:
    | setAuthActionType
    | delAuthActionType
    | setErrorActionType
    | getCaptchaSuccesseActionType
): typeof inintState => {
  switch (action.type) {
    case 'SET_AUTH': {
      return {
        ...state,
        ...action.payload,
        isAuth: true,
      };
    }
    case 'DEL_AUTH': {
      return {
        ...state,
        isAuth: false,
      };
    }
    case 'SET_ERROR': {
      return {
        ...state,
        error: action.message,
      };
    }
    case 'GET_CAPTCHA_SUCCESSE': {
      return {
        ...state,
        captcha: action.url,
      };
    }
    default:
      return state as typeof inintState;
  }
};
