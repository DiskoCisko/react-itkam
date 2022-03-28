import { userAPI } from "../DAL/api";
import { ResultCode } from "../types/type";
import { changePage, changeTotalCountPage, changeUserPage, fetchingFollow, follow, followUnfloowFlow, getUser, onFetch, onFollow, onUnfollow, setUsers, unfollow } from "./user-reducer";

jest.mock('../DAL/api');

const userAPIMock = userAPI as jest.Mocked<typeof userAPI>;

const dispatchMock = jest.fn();
const getStateMock = jest.fn();

const result = { resultCode: ResultCode.Succsess, messages: [], data: {} };

const getUserResponse = {
  items: [],
  totalCount: 1,
  error: '',
};

beforeEach(()=> {
    getStateMock.mockClear();
    getStateMock.mockClear();
})


test('follow success thunk', async () => {
    userAPIMock.followUser.mockReturnValue(Promise.resolve(result));

    const thunk = follow('1');
    await thunk(dispatchMock, getStateMock, {});
    expect(dispatchMock).toBeCalledTimes(3);
    expect(dispatchMock).toHaveBeenNthCalledWith(1, fetchingFollow(true, '1'));
    expect(dispatchMock).toHaveBeenNthCalledWith(2, onFollow('1'));
    expect(dispatchMock).toHaveBeenNthCalledWith(3, fetchingFollow(false, '1'));    
})

test('unfollow success thunk', async () => {
  userAPIMock.unfollowUser.mockReturnValue(Promise.resolve(result));

  const thunk = unfollow('1');
  await thunk(dispatchMock, getStateMock, {});
  expect(dispatchMock).toBeCalledTimes(3);
  expect(dispatchMock).toHaveBeenNthCalledWith(1, fetchingFollow(true, '1'));
  expect(dispatchMock).toHaveBeenNthCalledWith(2, onUnfollow('1'));
  expect(dispatchMock).toHaveBeenNthCalledWith(3, fetchingFollow(false, '1'));
});

test('geting user thunc success', async () => {
  userAPIMock.getUsers.mockReturnValue(Promise.resolve(getUserResponse));

  const thunk = getUser(1, 5);

  await thunk(dispatchMock, getStateMock, {});

  expect(dispatchMock).toBeCalledTimes(4);
  expect(dispatchMock).toHaveBeenNthCalledWith(1, onFetch());
  expect(dispatchMock).toHaveBeenNthCalledWith(2, onFetch());
  expect(dispatchMock).toHaveBeenNthCalledWith(
    3,
    changeTotalCountPage(getUserResponse.totalCount)
  );
  expect(dispatchMock).toHaveBeenNthCalledWith(
    4,
    setUsers(getUserResponse.items)
  );
});

test('change page success thunk', async () => {
  
  userAPIMock.getUsers.mockReturnValue(Promise.resolve(getUserResponse));
  const thunk = changeUserPage(1,5);
  await thunk(dispatchMock, getStateMock, {});

  expect(dispatchMock).toBeCalledTimes(4);
  expect(dispatchMock).toHaveBeenNthCalledWith(1, changePage(1));
  expect(dispatchMock).toHaveBeenNthCalledWith(2, onFetch());
  expect(dispatchMock).toHaveBeenNthCalledWith(3, onFetch());
  expect(dispatchMock).toHaveBeenNthCalledWith(
    4,
    setUsers(getUserResponse.items)
  );
})
