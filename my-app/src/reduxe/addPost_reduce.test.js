import {onAddPost} from './actions';
import {postReducer} from './addPost_reducer';

let inintState = {
posts: [
    {
        id: 1,
        text: 'Text',
    }
]
}

it('length posts should be incremented', () => {
    let action = onAddPost('test')
    let newPostState = postReducer(inintState, action);
    expect(newPostState.posts.length).toBe(2)
})

