import { profileAPI } from '../DAL/api';
import { ResultCode } from '../types/type';
import { getStatus, setStatus, updateStatus } from './status_Reducer';

jest.mock('../DAL/api');

const userAPIMock = profileAPI as jest.Mocked<typeof profileAPI>;

const dispatchMock = jest.fn();
const getStateMock = jest.fn();

const result = { data: 'test2' };

const resultUpdateStatus = {
  resultCode: ResultCode.Succsess,
  messages: [],
  data: 'test3'
};

beforeEach(() => {
  getStateMock.mockClear();
  getStateMock.mockClear();
});

test('get status thunk success', async () => {
    userAPIMock.getStatus.mockReturnValue(Promise.resolve(result));
    const thunk = getStatus(1);
    await thunk(dispatchMock);
    expect(dispatchMock).toBeCalledTimes(1);
    expect(dispatchMock).toHaveBeenNthCalledWith(1, setStatus(result.data));
});

test('update status thunk success', async () => {
  userAPIMock.updateStatus.mockReturnValue(Promise.resolve(resultUpdateStatus));
  const thunk = updateStatus('test3');
  await thunk(dispatchMock, getStateMock, {});
  expect(dispatchMock).toBeCalledTimes(1);
});