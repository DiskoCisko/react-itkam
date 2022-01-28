import { authUser } from './auth_reducer';

const inintState = {
  initialized: false,
};

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

export const appReducer = (state = inintState, action = {}) => {
  switch (action.type) {
    case 'INITIALIZED_SUCCESS': {
      return {
        ...state,
        initialized: true,
      };
    }
    default:
      return state;
  }
};

export const initializedSuccess = () => {
  return {
    type: INITIALIZED_SUCCESS,
  };
};

export const initializeApp = () => {
  return (dispatch) => {
    const promise = dispatch(authUser());
    promise.then(() => {
      dispatch(initializedSuccess());
    });
  };
};
