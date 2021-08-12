let inintState = {
    email: null,
    login: null,
    userId: null,
    isAuth: false
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
        default:
            return state
    }
}