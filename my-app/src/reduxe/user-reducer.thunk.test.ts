import { userAPI } from "../DAL/api";
import { ResultCode } from "../types/type";
import { fetchingFollow, follow, onFollow, onUnfollow, unfollow } from "./user-reducer";

jest.mock('../DAL/api');

const userAPIMock = userAPI as jest.Mocked<typeof userAPI>;

const dispatchMock = jest.fn();
const getStateMock = jest.fn();

const result = { resultCode: ResultCode.Succsess, messages: [], data: {} };

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