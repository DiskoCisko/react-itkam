import {objectPropAdd} from './../components/utils/object-prop-add'

let initStatev = {
    users: [],
    pageSize: 5,
    totalCount: 0,
    currentPage: 1,
    isFetch: false,
    isFetchFollow: false,
    togleFetcgFollow: []
}

export const taskReducer = (state = initStatev, action) => {
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
         debugger
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