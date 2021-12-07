let inintState = {
    posts: [
        {
            id: 1,
            text: 'Text',
        }
    ],
    formValue: ''
    }

const ADD_POST = 'ADD-POST';

export const onAddPost = (body) => {
    return {
        type: ADD_POST,
        payload: body
    }
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

            return newState;
        }   
        default:
            return state;
            }
}