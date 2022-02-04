import { createSelector } from 'reselect';

export const getFavouriteUsers = state => state.users.favouriteUsers;

export const getIsUserInFavourites = createSelector(
  [(state, id) => id, getFavouriteUsers],
  (id, favouritesUsers) => favouritesUsers.find(user => user.id === id),
);
