import {authUser} from './auth_reducer';
let inintState = {
    initialized: false
}

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

export const appReducer = (state = inintState, action) => {
    switch (action.type) {
        case 'INITIALIZED_SUCCESS': {
            return {
                ...state,
                initialized: true
            }
        }
        default:
            return state
    }
}

export const initializedSuccess = () => {
    return {
        type: INITIALIZED_SUCCESS
    }
}

export const initializeApp = () => (dispatch) => {
    let promise = dispatch(authUser());
    debugger
    promise.then(()=> {
        dispatch(initializedSuccess())
    })
}
