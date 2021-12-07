import {userAPI} from '../DAL/api';
import {objectPropAdd} from '../components/utils/object-prop-add'
let initStatev = {
    users: [],
    pageSize: 30,
    totalCount: 0,
    currentPage: 1,
    isFetch: false,
    isFetchFollow: false,
    togleFetcgFollow: []
}

 const FOLLOW_USER = 'FOLLOW_USER';
 const UNFOLLOW_USER = 'UNFOLLOW_USER';
 const SET_USER = 'SET_USER';
 const CHANGE_PAGE = 'CHANGE_PAGE';
 const CHANGE_TOTAL_COUNT_PAGE = 'CHANGE_TOTAL_COUNT_PAGE';
 const TOOGLE_IS_FETCH = 'TOOGLE_IS_FETCH';
 const TOGLE_FECHING_FOLLOW = 'TOGLE_FECHING_FOLLOW';

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
export const fetchingFollow = (isFething, userId) => {
    return {
        type: TOGLE_FECHING_FOLLOW,
        userId,
        isFething
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

export const userReducer = (state = initStatev, action) => {
    switch (action.type) {
        case 'FOLLOW_USER': 
            let newUsers = objectPropAdd(state.users, action.payload, 'id', {followed: true})
            let newState = {
                ...state,
                users: newUsers
            }
            return newState
        case 'UNFOLLOW_USER': 
            {
                let newUsers = objectPropAdd(state.users, action.payload, 'id', {followed: false})
            let newState = {
                ...state,
                users: newUsers
            }
            return newState}
        case 'CHANGE_PAGE': {
           let newCurrentPage = action.payload;
           let newState = {
            ...state,
            currentPage: newCurrentPage
        }
           return newState;
        }
        case 'CHANGE_TOTAL_COUNT_PAGE': {
            let newTotalCount = action.payload;
            let newState = {
             ...state,
             totalCount: newTotalCount
         }
            return newState;  
        }
        case 'SET_USER':{
            let newUsers = [ 
                ...action.payload
            ]

            let newState = {
                ...state,
                users: newUsers
            }
            
            return newState
        }
        case 'TOOGLE_IS_FETCH':
            return {
                ...state,
                isFetch: !state.isFetch
            }
        case 'TOGLE_FECHING_FOLLOW': 
        return {
            ...state,
            togleFetcgFollow: action.isFething
            ? [...state.togleFetcgFollow, action.userId]
            : state.togleFetcgFollow.filter(id => id !== action.userId)
        }
        default:
             return state;
    }
}