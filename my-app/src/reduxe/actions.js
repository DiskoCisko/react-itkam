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