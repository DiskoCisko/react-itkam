import { UserType } from "../../types/type";
import objectPropAdd from "./object-prop-add";

let users;

beforeEach(() => {
    users = [
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
] as Array<UserType>;
})

test('followed user', () => {
  const newUser = objectPropAdd(users, '2', 'id', {
    followed: true,
  });

  expect(newUser[1].followed).toBeTruthy();
  expect(newUser[2].followed).toBeTruthy();
});

test('unFollowed user', () => {
  const newUser = objectPropAdd(users, '1', 'id', {
    followed: false,
  });

  expect(newUser[1].followed).toBeFalsy();
  expect(newUser[2].followed).toBeFalsy();
});
