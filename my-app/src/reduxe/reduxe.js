import { combineReducers, createStore } from 'redux';
import {postReducer} from './../reduxe/addPost_reducer';
import {messagasReducer} from './../reduxe/messages_reducer';
import {taskReducer} from './../reduxe/task-reducer';
import { authReducer } from './authReducer';
export const reducers = combineReducers({
    profile: postReducer,
    dialogs: messagasReducer,
    userPage: taskReducer,
    auth: authReducer
})

export const store = createStore(reducers)