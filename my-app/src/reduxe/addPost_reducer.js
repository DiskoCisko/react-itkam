let inintState = {
    photos: []

    }

export const postReducer = (state = inintState, action) => {
    switch (action.type) {
        case 'SET_PROFILE': {
            return {
                ...action.payload
            }
        }
        case 'CHANGE_PHOTO': {
            let newState = {
                ...state,
                photos: action.photo
            }
            return newState
        }
        default:
            return state;
          }
} 