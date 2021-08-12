let inintState = {
posts: [
    {
        id: 1,
        text: 'Text',
    }
],
formValue: ''
}

export const postReducer = (state = inintState, action) => {
    switch (action.type) {
        case 'ADD-POST': {
            let newState = {
                ...state,
                formValue: '',
                posts: [...state.posts, {
                    id: Math.ceil(Math.random() * 1000),
                    text: action.payload
                }]
            };
            debugger
            return newState;
        }   
        case 'CHANGE-FORM':
            let newState = {
                ...state,
                formValue: action.payload
            };
            return newState;
        case 'SET_PROFILE': {
            return {
                ...state,
                profile: action.payload
            }
        }
        case 'SET_STATUS': {
            debugger
            return {
                ...state,
                status: action.payload
            }
        }
        default:
            return state;
          }
}