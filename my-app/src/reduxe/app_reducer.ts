import { ThunkAction } from 'redux-thunk';
import { authUser } from './auth_reducer';
import { AppStateType } from './reduxe';


const inintState = {
  initialized: false,
};

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

export const appReducer = (
  state = inintState,
  action: InitializedSuccessActionType
) => {
  switch (action.type) {
    case 'INITIALIZED_SUCCESS': {
      return {
        ...state,
        initialized: true,
      };
    }
    default:
      return state as typeof inintState;
  }
};

type InitializedSuccessActionType = {
  type: typeof INITIALIZED_SUCCESS,
};

export const initializedSuccess = (): InitializedSuccessActionType => {
  return {
    type: INITIALIZED_SUCCESS,
  };
};

export const initializeApp = (): ThunkAction<
  void,
  AppStateType,
  unknown,
  InitializedSuccessActionType
> => {
  return (dispatch) => {
    const promise: any = dispatch(authUser());
    promise.then(() => {
      dispatch(initializedSuccess());
    });
  };
};
