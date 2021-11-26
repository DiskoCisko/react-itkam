export const getPostsSelector = (state) => {
    return state.profile.posts
}

export const getProfileSelector = (state) => {
    return state.profile.profile
}

export const getStatusSelector = (state) => {
    return state.profile.status
}

export const getIdSelector = (state) => {
    return state.auth.id
}

export const getUserSelector = (state) => {
    return state.userPage.users
}

export const getPageSizeSelector = (state) => {
    return state.userPage.pageSize
}

export const getTotalCountSelector = (state) => {
    return state.userPage.totalCount
}

export const getCurrentPageSelector = (state) => {
    return state.userPage.currentPage
}

export const getIsFetchSelector = (state) => {
    return state.userPage.isFetch
}

export const getIsFetchFollowSelector = (state) => {
    return state.userPage.isFetchFollow
}

export const getTogleFetcgFollowSelector = (state) => {
    return state.userPage.togleFetcgFollow
}

export const getLoginSelector = (state) => {
    return state.auth.login
}

export const getDataUsersSelector = (state) => {
    return state.dialogs.dataUsers
}

export const getDataMessagesSelector = (state) => {
    return state.dialogs.dataMessages
}