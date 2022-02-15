import { profileAPI } from '../DAL/api';

const inintState = {
  formValue: '' as string,
};

const CHANGE_STAUS = 'CHANGE_STAUS';
const SET_STATUS = 'SET_STATUS';

type changeStatusActionType = (status: string) => {
  type: typeof CHANGE_STAUS;
  payload: string
};

export const changeStatus: changeStatusActionType = (status) => {
  return {
    type: CHANGE_STAUS,
    payload: status,
  };
};

type setStatusActionType = (status: string) => {
  type: typeof SET_STATUS;
  payload: string;
};

export const setStatus: setStatusActionType = (status) => {
  return {
    type: SET_STATUS,
    payload: status,
  };
};
export const getStatus = (userId) => {
  return async (dispatch) => {
    const response = await profileAPI.getStatus(userId);
    if (!response.data) {
      response.data = 'Without status';
    }
    dispatch(setStatus(response.data));
  };
};

type StatusResponseType = {
  resultCode: number;
  messages: Array<string> | null;
  data: object;
};

export const updateStatus = (status: string) => {
  return async (dispatch) => {
    const response: any = await profileAPI.updateStatus({
      status,
    });
    if (response.resultCode === 0) {
      dispatch(changeStatus(status));
    }
    throw console.log(response);
  };
};
export const statusReducer = (state = inintState, action) => {
  switch (action.type) {
    case 'SET_STATUS': {
      return {
        ...state,
        status: action.payload,
      };
    }
    default:
      return state;
  }
};
