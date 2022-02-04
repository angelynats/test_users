import Types from './Types';

// FETCH USERS

export const fetchUsersStart = () => ({
  type: Types.FETCH_USERS_START,
});

export const fetchUsersSuccess = users => ({
  type: Types.FETCH_USERS_SUCCESS,
  payload: {
    users,
  },
});

export const fetchUsersError = error => ({
  type: Types.FETCH_USERS_ERROR,
  payload: {
    error,
  },
});

// FETCH USER

export const fetchUserStart = () => ({
  type: Types.FETCH_USER_START,
});

export const fetchUserSuccess = user => ({
  type: Types.FETCH_USER_SUCCESS,
  payload: {
    user,
  },
});

export const fetchUserError = error => ({
  type: Types.FETCH_USER_ERROR,
  payload: {
    error,
  },
});

// LIKE USERS

export const setFavouriteUsers = users => ({
  type: Types.SET_FAVOURITE_USERS,
  payload: {
    users,
  },
});

export const likeUser = user => ({
  type: Types.LIKE_USER,
  payload: {
    user,
  },
});

export const unlikeUser = id => ({
  type: Types.UNLIKE_USER,
  payload: {
    id,
  },
});

// CLEAR USER

export const clearUser = () => ({
  type: Types.CLEAR_USER,
});
