let inintState = {
    email: null,
    login: null,
    userId: null,
    isAuth: false
}

export const authReducer = (state = inintState, action) => {
    switch (action.type) {
        case 'SET_AUTH': {
            debugger
            return {
                ...action.payload,
                isAuth: true
            }
        }
        default:
            return state
    }
}