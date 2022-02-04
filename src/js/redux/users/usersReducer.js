import Types from './Types';

const initialState = {
  users: [],
  user: null,
  favouriteUsers: [],
  loading: false,
  error: null,
};

const usersReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    // FETCH USERS

    case Types.FETCH_USERS_START:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case Types.FETCH_USERS_SUCCESS:
      return {
        ...state,
        users: [...new Set([...state.users, ...payload.users])],
        loading: false,
      };
    case Types.FETCH_USERS_ERROR:
      return {
        ...state,
        error: payload.error,
        loading: false,
      };

    // FETCH USER
    case Types.FETCH_USER_START:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case Types.FETCH_USER_SUCCESS:
      return {
        ...state,
        user: payload.user,
        loading: false,
      };
    case Types.FETCH_USER_ERROR:
      return {
        ...state,
        error: payload.error,
        loading: false,
      };

    // LIKE USER

    case Types.SET_FAVOURITE_USERS:
      return {
        ...state,
        favouriteUsers: payload.users,
      };

    case Types.LIKE_USER:
      return {
        ...state,
        favouriteUsers: [...state.favouriteUsers, payload.user],
      };

    case Types.UNLIKE_USER:
      return {
        ...state,
        favouriteUsers: state.favouriteUsers.filter(u => u.id !== payload.id),
      };

    // CLEAR USER

    case Types.CLEAR_USER:
      return {
        ...state,
        user: null,
      };

    default:
      return state;
  }
};

export default usersReducer;
