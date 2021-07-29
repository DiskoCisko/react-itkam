
import {userAPI, auth} from '../DAL/api';

export const ADD_POST = 'ADD-POST';
export const CHANGE_FORM = 'CHANGE-FORM';
export const FOLLOW_USER = 'FOLLOW_USER';
export const UNFOLLOW_USER = 'UNFOLLOW_USER';
export const SET_USER = 'SET_USER';
export const CHANGE_PAGE = 'CHANGE_PAGE';
export const CHANGE_TOTAL_COUNT_PAGE = 'CHANGE_TOTAL_COUNT_PAGE';
export const TOOGLE_IS_FETCH = 'TOOGLE_IS_FETCH';
export const SET_PROFILE = 'SET_PROFILE';
export const SET_AUTH = 'SET_AUTH';
export const TOGLE_FECHING_FOLLOW = 'TOGLE_FECHING_FOLLOW';


export const onAddPost = (body) => {
    return {
        type: ADD_POST,
        payload: body
    }
}

export const onChange = (body) => {
    return {
        type: CHANGE_FORM,
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
export const setAuth = (body) => {
    return {
        type: SET_AUTH,
        payload: body
    }
}
export const fetchingFollow = (isFething, userId) => {
    return {
        type: TOGLE_FECHING_FOLLOW,
        userId,
        isFething
    }
}

export const getUser = (currentPage, pageSize) => (dispatch) => {
    dispatch(onFetch())
    userAPI.getUsers(currentPage, pageSize)
    .then(response => {
        dispatch(onFetch())
        dispatch(changeTotalCountPage(response.totalCount))
        dispatch(setUsers(response.items))
    })
}

export const changeUserPage = (currentPage, pageSize) => (dispatch) => {
    dispatch(changePage(currentPage))
    dispatch(onFetch())
    userAPI.getUsers(currentPage, pageSize)
    .then(response => {
        dispatch(onFetch())
        dispatch(setUsers(response.items))
    })
}

export const follow = (id) => (dispatch) => {
    dispatch(fetchingFollow(true, id))
    userAPI.followUser(id)
    .then((response)=>{
        if(response.data.resultCode === 0) {
            dispatch(onFollow(id))
        }
        dispatch(fetchingFollow(false, id))    
        })
}

export const unfollow = (id) => (dispatch) => {
    dispatch(fetchingFollow(true, id))
    userAPI.unfollowUser(id)
    .then((response)=>{
        if(response.data.resultCode === 0) {
            dispatch(onUnfollow(id))
        }
        dispatch(fetchingFollow(false, id))    
        })
}

export const authUser = () => (dispatch) => {
    auth.me()
        .then((response)=>{
            let {id, login, email} = response.data.data;
            if (response.data.resultCode === 0) {
                dispatch(setAuth({id,login,email}))
            } 
        })
}

export const getProfile = (userId) => (dispatch) => {
    if(!userId) {
        userId = 4
      }
      userAPI.getProfile(userId)
      .then(response => dispatch(setProfile(response.data)))
}