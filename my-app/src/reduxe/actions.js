
import {userAPI, auth, profileAPI} from '../DAL/api';

export const ADD_POST = 'ADD-POST';
export const FOLLOW_USER = 'FOLLOW_USER';
export const UNFOLLOW_USER = 'UNFOLLOW_USER';
export const SET_USER = 'SET_USER';
export const CHANGE_PAGE = 'CHANGE_PAGE';
export const CHANGE_TOTAL_COUNT_PAGE = 'CHANGE_TOTAL_COUNT_PAGE';
export const TOOGLE_IS_FETCH = 'TOOGLE_IS_FETCH';
export const SET_PROFILE = 'SET_PROFILE';
export const SET_STATUS = 'SET_STATUS';
export const CHANGE_STAUS = 'CHANGE_STAUS';
export const SET_AUTH = 'SET_AUTH';
export const DEL_AUTH = 'DEL_AUTH';
export const SET_ERROR = 'SET_ERROR';
export const CHANGE_PHOTO = 'CHANGE_PHOTO';
export const TOGLE_FECHING_FOLLOW = 'TOGLE_FECHING_FOLLOW';
export const SET_ERROR_MESSAGE = 'SET_ERROR_MESSAGE';
export const TOGGLE_EDITEMODE_PROFILE = 'TOGGLE_EDITEMODE_PROFILE'
export const GET_CAPTCHA_SUCCESSE = 'GET_CAPTCHA_SUCCESSE'

export const onAddPost = (body) => {
    return {
        type: ADD_POST,
        payload: body
    }
}

export const onFollow = (userId) => {
    return {
        type: FOLLOW_USER,
        payload: userId
    }
}
export const onUnfollow = (userId) => {
    return {
        type: UNFOLLOW_USER,
        payload: userId
    }
}
export const setUsers = (body) => {
    return {
        type: SET_USER,
        payload: body
    }
}
export const changePage = (p) => {
    return {
        type: CHANGE_PAGE,
        payload: p
    }
}
export const changeTotalCountPage = (p) => {
    return {
        type: CHANGE_TOTAL_COUNT_PAGE,
        payload: p
    }
}
export const onFetch = () => {
    return {
        type: TOOGLE_IS_FETCH
    }
}
export const setProfile = (body) => {
    return {
        type: SET_PROFILE,
        payload: body
    }
}
export const setStatus = (status) => {
    return {
        type: SET_STATUS,
        payload: status
    }
}
export const changeStatus = (status) => {
    return {
        type: CHANGE_STAUS,
        payload: status
    }
}
export const setAuth = (body) => {
    return {
        type: SET_AUTH,
        payload: body
    }
}
export const delAuth = () => {
    return {
        type: DEL_AUTH,
    }
}
export const setError = () => {
    return {
        type: SET_ERROR,
    }
}
export const setErrorMessage = (message) => {
    return {
        type: SET_ERROR_MESSAGE,
        message: message
    }
}
export const fetchingFollow = (isFething, userId) => {
    return {
        type: TOGLE_FECHING_FOLLOW,
        userId,
        isFething
    }
}

export const changePhoto = (photo) => {
    return {
        type: CHANGE_PHOTO,
        photo
    }
}

export const toggleEditeProfileMode = (bool) => {
    debugger
    return {
        type: TOGGLE_EDITEMODE_PROFILE,
        editeMode: bool
    }
}

export const getCaptchaSuccesse = (url) => {
    return {
        type: GET_CAPTCHA_SUCCESSE,
        url: url
    }
}

export const getUser = (currentPage, pageSize) => async (dispatch) => {
    dispatch(onFetch())
    let response = await userAPI.getUsers(currentPage, pageSize)
    dispatch(onFetch())
    dispatch(changeTotalCountPage(response.totalCount))
    dispatch(setUsers(response.items))
}

export const changeUserPage = (currentPage, pageSize) => async (dispatch) => {
    dispatch(changePage(currentPage))
    dispatch(onFetch())
    let response = await userAPI.getUsers(currentPage, pageSize)
        dispatch(onFetch())
        dispatch(setUsers(response.items))
}

export const followUnfloowFlow = async (dispatch, id, apiMethid, actionCreator) => {
    dispatch(fetchingFollow(true, id))
    let response = await apiMethid(id)
    if(response.data.resultCode === 0) {
        dispatch(actionCreator(id))
    }
    dispatch(fetchingFollow(false, id))  
}

export const follow = (id) => {
    return async (dispatch) => {
        followUnfloowFlow(dispatch, id, userAPI.followUser.bind(userAPI), onFollow)
    }
} 
export const unfollow = (id) => async (dispatch) => {
    followUnfloowFlow(dispatch, id, userAPI.unfollowUser.bind(userAPI), onUnfollow)  
}

export const authUser = () => async (dispatch) => {
    let response = await auth.me();
    let {id, login, email} = response.data.data;
    if (response.data.resultCode === 0) {
        dispatch(setAuth({id,login,email}))
    }
    return  response;
}

export const loginUser = (body) => async (dispatch) => {
    let response = await auth.login(body);
    if (response.data.resultCode === 0) {
        auth.me()
            .then((response)=>{
                let {id, login, email} = response.data.data;
                if (response.data.resultCode === 0) {
                    dispatch(setAuth({id,login,email}))
                } else dispatch(setError())
            })
    } else {
        if(response.data.resultCode === 10) {
            dispatch(getCaptcha());
    } else dispatch(setError());
    }
}

export const getCaptcha = () => async (dispatch) => {
    let response = await auth.getCaptcha(); 
    dispatch(getCaptchaSuccesse(response.data.url));
}

export const saveProfile = (body) => async (dispatch) => {
    let response = await profileAPI.saveProfile(body)
    debugger
    if (response.data.resultCode === 0) {
    response = await profileAPI.getProfile(body.userId)
    dispatch(setProfile(response.data))
    toggleEditeProfileMode(false)
    } else dispatch(setErrorMessage(response.data.messages[0]))
}

export const logoutUser = () => async (dispatch) => {
    let response = await auth.logout()
    if (response.data.resultCode === 0) {
        dispatch(delAuth());
    }  
}

export const getProfile = (userId) => async (dispatch) => {
    
    let response = await profileAPI.getProfile(userId)
    dispatch(setProfile(response.data))
}

export const getStatus = (userId) => async (dispatch) => {
    let response = await profileAPI.getStatus(userId)
        if (!response.data) {
            response.data = "Without status"
        }
        dispatch(setStatus(response.data))
}

export const updateStatus = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatus({status: status})
        if (response.resultCode === 0 ) {
            dispatch(changeStatus(status))
        }
        throw console.log(response)
}

export const savePhoto = (file) => async (dispatch) => {
    let response = await profileAPI.savePhoto(file)
    
        if (response.data.resultCode === 0 ) {
            
            dispatch(changePhoto(response.data.data.photos))
        }
}