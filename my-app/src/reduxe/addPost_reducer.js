import {SET_ERROR_MESSAGE} from './actions';
import {TOGGLE_EDITEMODE_PROFILE} from './actions';

let inintState = {
    photos: []

    }

export const postReducer = (state = inintState, action) => {
    switch (action.type) {
        case 'SET_PROFILE': {
            return {
                ...action.payload
            }
        }
        case 'CHANGE_PHOTO': {
            let newState = {
                ...state,
                photos: action.photo
            }
            return newState
        }
        case SET_ERROR_MESSAGE: {
            return {
                ...state,
                errMessage: action.message
            }
        }
        case TOGGLE_EDITEMODE_PROFILE: {
            return {
                ...state,
                editeMode: action.editeMode
            }
        }
        default:
            return state;
          }
} 