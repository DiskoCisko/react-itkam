import { applyMiddleware, combineReducers, createStore } from 'redux';
import {profileReducer} from './profile_reducer';
import {statusReducer} from './status_Reducer';
import {messagasReducer} from './messages_reducer';
import {userReducer} from './user-reducer';
import { authReducer } from './auth_reducer';
import { appReducer } from './app_reducer';
import ReduxThunk from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';
import { compose } from 'redux';

export const reducers = combineReducers({
    profile: profileReducer,
    status: statusReducer,
    dialogs: messagasReducer,
    userPage: userReducer,
    auth: authReducer,
    app: appReducer,
    form: formReducer
})

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;


export const store = createStore(reducers, composeEnhancers(applyMiddleware(ReduxThunk)))