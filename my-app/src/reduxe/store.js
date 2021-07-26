import {reRender} from './../index'
import {postReducer} from './../reduxe/addPost_reducer'
export const store = {
    state: {
        dataUsers: [
        {
            id: 1,
            name: 'Mik',
            path: "/dialogs/1"
        },
        {
            id: 2,
            name: 'Nik',
            path: "/dialogs/2"
        },
        {
            id: 3,
            name: 'Sam',
            path: "/dialogs/3"
        },
    ],
    dataMessages: [
        {
            id: 1,
            message: 'Hi',
            author: 'Mik',
            path: "/dialogs/1"
        },
        {
            id: 2,
            message: 'Fack is mad',
            author: 'Nik',
            path: "/dialogs/2"
        },
        {
            id: 3,
            message: 'Plan B',
            author: 'Sam',
            path: "/dialogs/3"
        },
    ],
    posts: [
        {
            id: 1,
            text: 'Text',
        }
    ],
    formValue: ''
},

    sunscriber (callback, store) {
        debugger;
        callback(store);
    },
    getState() {
        return this.state;
    },

    dispatch(action) {
        debugger;
        this.state = postReducer(this.state, action);
        this.sunscriber(reRender, this);

    }
}