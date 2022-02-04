// FAVOURITE USERS

export const setUsersInStorage = users => {
  if (!users) return;
  const stringifyUsers = JSON.stringify(users);
  localStorage.setItem('users', stringifyUsers);
};

export const getUsersFromStorage = () => {
  const users = localStorage.getItem('users');
  if (!users) return null;
  const parsedUsers = JSON.parse(users);
  return parsedUsers;
};
