import { auth } from '../DAL/api';

const inintState = {
  email: null,
  login: undefined,
  userId: null,
  isAuth: false,
  error: null,
  captcha: null,
};

const SET_AUTH = 'SET_AUTH';
const DEL_AUTH = 'DEL_AUTH';
const SET_ERROR = 'SET_ERROR';
const GET_CAPTCHA_SUCCESSE = 'GET_CAPTCHA_SUCCESSE';

export const setAuth = (body) => {
  return {
    type: SET_AUTH,
    payload: body,
  };
};
export const delAuth = () => {
  return {
    type: DEL_AUTH,
  };
};
export const setError = (message) => {
  return {
    type: SET_ERROR,
    message,
  };
};
export const getCaptchaSuccesse = (url) => {
  return {
    type: GET_CAPTCHA_SUCCESSE,
    url,
  };
};

export const authUser = () => {
  return async (dispatch) => {
    const response = await auth.me();
    const { id, login, email } = response.data.data;
    if (response.data.resultCode === 0) {
      dispatch(setAuth({ id, login, email }));
    }
    return response;
  };
};

export const getCaptcha = () => {
  return async (dispatch) => {
    const response = await auth.getCaptcha();
    dispatch(getCaptchaSuccesse(response.data.url));
  };
};

export const loginUser = (body) => {
  return async (dispatch) => {
    const response = await auth.login(body);
    if (response.data.resultCode === 0) {
      auth.me().then((resp) => {
        const { id, login, email } = resp.data.data;
        if (resp.data.resultCode === 0) {
          dispatch(setAuth({ id, login, email }));
        } else dispatch(setError(resp.data.messages[0]));
      });
    } else if (response.data.resultCode === 10) {
      dispatch(getCaptcha());
      dispatch(setError(response.data.messages[0]));
    } else {
      dispatch(setError(response.data.messages[0]));
    }
  };
};

export const logoutUser = () => {
  return async (dispatch) => {
    const response = await auth.logout();
    if (response.data.resultCode === 0) {
      dispatch(delAuth());
    }
  };
};

export const authReducer = (state = inintState, action = {}) => {
  switch (action.type) {
    case 'SET_AUTH': {
      return {
        ...action.payload,
        isAuth: true,
      };
    }
    case 'DEL_AUTH': {
      return {
        isAuth: false,
      };
    }
    case 'SET_ERROR': {
      return {
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
      return state;
  }
};
