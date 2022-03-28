import { UserType } from '../types/type';
import {
  onFollow,
  onUnfollow,
  userReducer,
  setUsers,
  changePage,
  changeTotalCountPage,
  onFetch,
  fetchingFollow,
} from './user-reducer';

let state;

beforeEach(() => {
  state = {
    users: [
      {
        id: 0,
        name: 'User 0',
        photos: {
          large: null,
          small: null,
        },
        followed: true,
      },
      {
        id: 1,
        name: 'User 1',
        photos: {
          large: null,
          small: null,
        },
        followed: true,
      },
      {
        id: 2,
        name: 'User 2',
        photos: {
          large: null,
          small: null,
        },
        followed: false,
      },
      {
        id: 3,
        name: 'User 3',
        photos: {
          large: null,
          small: null,
        },
        followed: false,
      },
    ] as Array<UserType>,
    pageSize: 30,
    totalCount: 0,
    currentPage: 1,
    isFetch: false,
    isFetchFollow: false,
    togleFetcgFollow: [] as Array<number> | null,
  };
});

test('follow', () => {
  const newState = userReducer(state, onFollow('2'));
  expect(newState.users[2].followed).toBeTruthy();
  expect(newState.users[1].followed).toBeTruthy();
});

test('unFollow', () => {
  const newState = userReducer(state, onUnfollow('1'));
  expect(newState.users[1].followed).toBeFalsy();
  expect(newState.users[3].followed).toBeFalsy();
});

test('set users', () => {
  const newState = userReducer(state, setUsers(state.users));
  expect(newState.users.length).toBe(4);
});

test('change page', () => {
  const newState = userReducer(state, changePage(2));
  expect(newState.currentPage).toBe(2);
});

test('change total page', () => {
  const newState = userReducer(state, changeTotalCountPage(2));
  expect(newState.totalCount).toBe(2);
});

test('togle fetch', () => {
  let newState = userReducer(state, onFetch());
  expect(newState.isFetch).toBeTruthy();
  newState = userReducer(newState, onFetch());
  expect(newState.isFetch).toBeFalsy();
});

test('togle fetch follow', () => {
  const newState = userReducer(state, fetchingFollow(true, '1'));
  expect(newState.togleFetcgFollow).toContain('1');
});