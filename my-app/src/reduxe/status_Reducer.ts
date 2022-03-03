import { ThunkAction } from 'redux-thunk';
import { profileAPI} from '../DAL/api';
import { ResultCode } from '../types/type';
import { AppStateType } from './reduxe';

const inintState = {
  status: '' as string,
};

const CHANGE_STAUS = 'CHANGE_STAUS';
const SET_STATUS = 'SET_STATUS';

type changeStatusActionType = {
  type: typeof CHANGE_STAUS;
  payload: string
};

export const changeStatus = (status: string): changeStatusActionType => {
  return {
    type: CHANGE_STAUS,
    payload: status,
  };
};

type setStatusActionType = {
  type: typeof SET_STATUS;
  payload: string;
};

export const setStatus = (status: string): setStatusActionType => {
  return {
    type: SET_STATUS,
    payload: status,
  };
};
export const getStatus = (userId: number) => {
  return async (dispatch) => {
    const response = await profileAPI.getStatus(userId);
    if (!response.data) {
      response.data = 'Without status';
    }
    dispatch(setStatus(response.data));
  };
};

export const updateStatus = (
  status: string
): ThunkAction<void, AppStateType, unknown, changeStatusActionType> => {
  return async (dispatch) => {
    const response = await profileAPI.updateStatus({
      status,
    });
    if (response.resultCode === ResultCode.Succsess) {
      dispatch(changeStatus(status));
    } throw console.log(response);
  };
};
export const statusReducer = (
  state = inintState,
  action: setStatusActionType
): typeof inintState => {
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
