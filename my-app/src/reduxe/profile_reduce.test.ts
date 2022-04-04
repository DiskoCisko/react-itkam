import {
    changePhoto,
  delProfile,
  profileReducer,
  setErrorMessage,
  setProfile,
  toggleEditeProfileMode,
} from './profile_reducer';

let state;

const user1 = {
  userId: 1,
  lookingForAJob: true,
  lookingForAJobDescription: 'string',
  fullName: 'string',
  contacts: {
    github: 'string',
    vk: 'string',
    facebook: 'string',
    instagram: 'string',
    twitter: 'string',
    website: 'string',
    youtube: 'string',
    mainLink: 'string',
  },
};

beforeEach(() => {
  state = null;
});

test('set profile ', () => {
  const newState = profileReducer(state, setProfile(user1));

  expect(newState.userId).toBe(user1.userId);
});

test('delete profile', () => {
  state = user1;
  const newState = profileReducer(state, delProfile());
  expect(newState).toBe(null);
});

test('set profile ', () => {
  const errMes = 'test';
  const newState = profileReducer(state, setErrorMessage(errMes));

  expect(newState.errMessage).toBe(errMes);
});

test('change photo', () => {
  state = user1;
  const photo = {
    large: 'string',
    small: 'string',
}
  const newState = profileReducer(state, changePhoto(photo));

  expect(newState.photos).toBe(photo);
});

test('togle edite mode', () => {
  const newState = profileReducer(state, toggleEditeProfileMode(true));

  expect(newState.editeMode).toBe(true);
});