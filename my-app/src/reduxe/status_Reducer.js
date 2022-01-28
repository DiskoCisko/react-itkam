import { profileAPI } from '../DAL/api';

const inintState = {
  formValue: '',
};

const CHANGE_STAUS = 'CHANGE_STAUS';
const SET_STATUS = 'SET_STATUS';

export const changeStatus = (status) => {
  return {
    type: CHANGE_STAUS,
    payload: status,
  };
};
export const setStatus = (status) => {
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

export const updateStatus = (status) => {
  return async (dispatch) => {
    const response = await profileAPI.updateStatus({ status });
    if (response.resultCode === 0) {
      dispatch(changeStatus(status));
    }
    throw console.log(response);
  };
};
export const statusReducer = (state = inintState, action = {}) => {
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
