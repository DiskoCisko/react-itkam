let inintState = {
    email: null,
    login: undefined,
    userId: null,
    isAuth: false,
    error: null,
    captcha: null
}

export const authReducer = (state = inintState, action) => {
    switch (action.type) {
        case 'SET_AUTH': {
            
            return {
                ...action.payload,
                isAuth: true
            }
        }
        case 'DEL_AUTH': {
            return {
                isAuth: false
            }
        }
        case 'SET_ERROR': {
            return {
                error: true
            }
        }
        case 'GET_CAPTCHA_SUCCESSE': {
            debugger
            return {
                ...state,
                captcha: action.url
            }
        }
        default:
            return state
    }
}