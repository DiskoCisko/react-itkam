import {onAddPost} from './actions';
import {profileReducer} from './profile_reducer';

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
    let newPostState = profileReducer(inintState, action);
    expect(newPostState.posts.length).toBe(2)
})

