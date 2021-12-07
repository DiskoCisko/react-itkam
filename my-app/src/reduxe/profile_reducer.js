import {profileAPI} from '../DAL/api';

const SET_PROFILE = 'SET_PROFILE';
const CHANGE_PHOTO = 'CHANGE_PHOTO';
const SET_ERROR_MESSAGE = 'SET_ERROR_MESSAGE';
const TOGGLE_EDITEMODE_PROFILE = 'TOGGLE_EDITEMODE_PROFILE'

let inintState = {
    photos: []

    }

const setProfile = (body) => {
    return {
        type: SET_PROFILE,
        payload: body
    }
}
const setErrorMessage = (message) => {
    return {
        type: SET_ERROR_MESSAGE,
        message: message
    }
}
const changePhoto = (photo) => {
    return {
        type: CHANGE_PHOTO,
        photo
    }
}
export const toggleEditeProfileMode = (bool) => {
    return {
        type: TOGGLE_EDITEMODE_PROFILE,
        editeMode: bool
    }
}

export const saveProfile = (body) => async (dispatch) => {
    let response = await profileAPI.saveProfile(body)
    if (response.data.resultCode === 0) {
    response = await profileAPI.getProfile(body.userId)
    dispatch(setProfile(response.data))
    toggleEditeProfileMode(false)
    } else dispatch(setErrorMessage(response.data.messages[0]))
}



export const getProfile = (userId) => async (dispatch) => {
    
    let response = await profileAPI.getProfile(userId)
    dispatch(setProfile(response.data))
}

export const savePhoto = (file) => async (dispatch) => {
    let response = await profileAPI.savePhoto(file)
    
        if (response.data.resultCode === 0 ) {
            
            dispatch(changePhoto(response.data.data.photos))
        }
}

export const profileReducer = (state = inintState, action) => {
    switch (action.type) {
        case SET_PROFILE: {
            return {
                ...action.payload
            }
        }
        case CHANGE_PHOTO: {
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