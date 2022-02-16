import { applyMiddleware, combineReducers, createStore, compose } from 'redux';
import ReduxThunk from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';
import { profileReducer } from './profile_reducer';
import { statusReducer } from './status_Reducer';
// import messagasReducer from './messages_reducer.tsx';
import { userReducer } from './user-reducer';
import { authReducer } from './auth_reducer';
import { appReducer } from './app_reducer';
import { ReactType } from 'react';

export const reducers = combineReducers({
  profile: profileReducer,
  status: statusReducer,
  // dialogs: messagasReducer,
  userPage: userReducer,
  auth: authReducer,
  app: appReducer,
  form: formReducer,
});

type RootReduxeType = typeof reducers;
export type AppStateType = ReturnType<RootReduxeType>;
//@ts-ignore
const composeEnhancers =(typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

export const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(ReduxThunk)),
);
