import { AppStateType } from "./reduxe";

export const getProfileSelector = (state: AppStateType) => {
  return state.profile;
};

export const getStatusSelector = (state: AppStateType) => {
  return state.status.status;
};

export const getIdSelector = (state: AppStateType) => {
  return state.auth.id;
};

export const getUserSelector = (state: AppStateType) => {
  return state.userPage.users;
};

export const getPageSizeSelector = (state: AppStateType) => {
  return state.userPage.pageSize;
};

export const getTotalCountSelector = (state: AppStateType) => {
  return state.userPage.totalCount;
};

export const getCurrentPageSelector = (state: AppStateType) => {
  return state.userPage.currentPage;
};

export const getIsFetchSelector = (state: AppStateType) => {
  return state.userPage.isFetch;
};

export const getIsFetchFollowSelector = (state: AppStateType) => {
  return state.userPage.isFetchFollow;
};

export const getTogleFetcgFollowSelector = (state: AppStateType) => {
  return state.userPage.togleFetcgFollow;
};

export const getLoginSelector = (state: AppStateType) => {
  return state.auth.login;
};

