import { applyMiddleware, combineReducers, createStore } from 'redux';
import {postReducer} from './../reduxe/addPost_reducer';
import {messagasReducer} from './../reduxe/messages_reducer';
import {taskReducer} from './../reduxe/task-reducer';
import { authReducer } from './auth_reducer';
import { appReducer } from './app_reducer';
import ReduxThunk from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';
import { compose } from 'redux';

export const reducers = combineReducers({
    profile: postReducer,
    dialogs: messagasReducer,
    userPage: taskReducer,
    auth: authReducer,
    app: appReducer,
    form: formReducer
})

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;


export const store = createStore(reducers, composeEnhancers(applyMiddleware(ReduxThunk)))