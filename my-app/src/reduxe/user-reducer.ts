import { userAPI} from '../DAL/api';
import objectPropAdd from '../components/utils/object-prop-add';
import { ThunkAction } from 'redux-thunk';
import { AppStateType } from './reduxe';
import { Dispatch } from 'redux';
import { UserType, ResultCode, changeTotalCountPageActionType } from '../types/type';



const initStatev = {
  users: [] as Array<UserType>,
  pageSize: 30,
  totalCount: 0,
  currentPage: 1,
  isFetch: false,
  isFetchFollow: false,
  togleFetcgFollow: [] as Array<string> | null,
};

const FOLLOW_USER = 'FOLLOW_USER';
const UNFOLLOW_USER = 'UNFOLLOW_USER';
const SET_USER = 'SET_USER';
const CHANGE_PAGE = 'CHANGE_PAGE';
export const CHANGE_TOTAL_COUNT_PAGE = 'CHANGE_TOTAL_COUNT_PAGE';
const TOOGLE_IS_FETCH = 'TOOGLE_IS_FETCH';
const TOGLE_FECHING_FOLLOW = 'TOGLE_FECHING_FOLLOW';

type onFollowActionType = {
  type: typeof FOLLOW_USER;
  payload: string;
};

export const onFollow = (userId: string): onFollowActionType => {
  return {
    type: FOLLOW_USER,
    payload: userId,
  };
};

type onUnfollowActionType = {
  type: typeof UNFOLLOW_USER;
  payload: string;
};

export const onUnfollow = (userId: string): onUnfollowActionType => {
  return {
    type: UNFOLLOW_USER,
    payload: userId,
  };
};

type setUsersActionType = {
  type: typeof SET_USER;
  payload: Array<UserType>;
};

export const setUsers = (body: Array<UserType>): setUsersActionType => {
  return {
    type: SET_USER,
    payload: body,
  };
};

type changePageActionType = {
  type: typeof CHANGE_PAGE;
  payload: number;
};

export const changePage = (p: number): changePageActionType => {
  return {
    type: CHANGE_PAGE,
    payload: p,
  };
};



export const changeTotalCountPage = (p: number): changeTotalCountPageActionType => {
  return {
    type: CHANGE_TOTAL_COUNT_PAGE,
    payload: p,
  };
};

type onFetchActionType = {
  type: typeof TOOGLE_IS_FETCH;
};

export const onFetch = (): onFetchActionType => {
  return {
    type: TOOGLE_IS_FETCH,
  };
};

type fetchingFollowActionType = {
  type: typeof TOGLE_FECHING_FOLLOW;
  userId: string;
  isFetchFollow: boolean;
};

export const fetchingFollow = (
  isFetchFollow: boolean,
  userId: string
): fetchingFollowActionType => {
  return {
    type: TOGLE_FECHING_FOLLOW,
    userId,
    isFetchFollow,
  };
};

export const getUser = (
  currentPage: number,
  pageSize: number
): ThunkAction<
  void,
  AppStateType,
  unknown,
  onFetchActionType | changeTotalCountPageActionType | setUsersActionType
> => {
  return async (dispatch) => {
    dispatch(onFetch());
    const response = await userAPI.getUsers(currentPage, pageSize);
    dispatch(onFetch());
    dispatch(changeTotalCountPage(response.totalCount));
    dispatch(setUsers(response.items));
  };
};
export const changeUserPage = (
  currentPage: number,
  pageSize: number
): ThunkAction<
  void,
  AppStateType,
  unknown,
  onFetchActionType | changePageActionType | setUsersActionType
> => {
  return async (dispatch) => {
    dispatch(changePage(currentPage));
    dispatch(onFetch());
    const response = await userAPI.getUsers(currentPage, pageSize);
    dispatch(onFetch());
    dispatch(setUsers(response.items));
  };
};
export const followUnfloowFlow = async (
  dispatch: Dispatch<
    fetchingFollowActionType | onUnfollowActionType | onFollowActionType
  >,
  id: string,
  apiMethid,
  actionCreator: (userId: string) => onFollowActionType | onUnfollowActionType
) => {
  dispatch(fetchingFollow(true, id));
  const response = await apiMethid(id);
  if (response.resultCode === ResultCode.Succsess) {
    dispatch(actionCreator(id)); 
  }
  dispatch(fetchingFollow(false, id));
};

export const follow = (
  id: string
): ThunkAction<
  void,
  AppStateType,
  unknown,
  onFollowActionType
> => {
  return async (dispatch) => {
    await followUnfloowFlow(dispatch, id, userAPI.followUser.bind(userAPI), onFollow);
  };
};
export const unfollow = (
  id: string
): ThunkAction<void, AppStateType, unknown, onUnfollowActionType> => {
  return async (dispatch) => {
    await followUnfloowFlow(
      dispatch,
      id,
      userAPI.unfollowUser.bind(userAPI),
      onUnfollow
    );
  };
};
export const userReducer = (
  state = initStatev,
  action:
    | onFollowActionType
    | onUnfollowActionType
    | setUsersActionType
    | changePageActionType
    | changeTotalCountPageActionType
    | onFetchActionType
    | fetchingFollowActionType
): typeof initStatev => {
  switch (action.type) {
    case FOLLOW_USER: {
      const newUsers = objectPropAdd(state.users, action.payload, 'id', {
        followed: true,
      });
      const newState = {
        ...state,
        users: newUsers,
      };
      return newState;
    }
    case UNFOLLOW_USER: {
      const newUsers = objectPropAdd(state.users, action.payload, 'id', {
        followed: false,
      });
      const newState = {
        ...state,
        users: newUsers,
      };
      return newState;
    }
    case CHANGE_PAGE: {
      const newCurrentPage = action.payload;
      const newState = {
        ...state,
        currentPage: newCurrentPage,
      };
      return newState;
    }
    case CHANGE_TOTAL_COUNT_PAGE: {
      const newTotalCount = action.payload;
      const newState = {
        ...state,
        totalCount: newTotalCount,
      };
      return newState;
    }
    case SET_USER: {
      const newUsers = [...action.payload];

      const newState = {
        ...state,
        users: newUsers,
      };

      return newState;
    }
    case TOOGLE_IS_FETCH:
      return {
        ...state,
        isFetch: !state.isFetch,
      };
    case TOGLE_FECHING_FOLLOW:
      return {
        ...state,
        togleFetcgFollow: action.isFetchFollow
          ? [...state.togleFetcgFollow, action.userId]
          : state.togleFetcgFollow.filter((id) => {
              return id !== action.userId;
            }),
      };
    default:
      return state;
  }
};
