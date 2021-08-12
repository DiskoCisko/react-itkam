import { applyMiddleware, combineReducers, createStore } from 'redux';
import {postReducer} from './../reduxe/addPost_reducer';
import {messagasReducer} from './../reduxe/messages_reducer';
import {taskReducer} from './../reduxe/task-reducer';
import { authReducer } from './authReducer';
import ReduxThunk from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';

export const reducers = combineReducers({
    profile: postReducer,
    dialogs: messagasReducer,
    userPage: taskReducer,
    auth: authReducer,
    form: formReducer
})

export const store = createStore(reducers, applyMiddleware(ReduxThunk))