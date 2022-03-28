import { setStatus, statusReducer } from './status_Reducer';

let state;

beforeEach(() => {
    state = {
        status: 'test' as string
    }
})

test('change status', () => {
    const newState = statusReducer(state, setStatus('test1'));
    expect(newState.status).toBe('test1');
});
