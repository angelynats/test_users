import {
  fetchUsersStart,
  fetchUsersSuccess,
  fetchUsersError,
  fetchUserStart,
  fetchUserSuccess,
  fetchUserError,
} from './usersActions';

import apiInstance from '../../utils/api/apiInstance';
import addNotification from '../../utils/addNotification';

export const fetchUsers = since => dispatch => {
  dispatch(fetchUsersStart());
  apiInstance
    .get(`/users?since=${since}&per_page=12`)
    .then(response => {
      dispatch(fetchUsersSuccess(response.data));
      // addNotification();
    })
    .catch(error => {
      dispatch(fetchUsersError(error.response));
      addNotification({
        type: 'danger',
        title: 'Oops!',
        message: 'Something went wrong',
      });
    });
};

export const fetchUser = id => dispatch => {
  dispatch(fetchUserStart());
  apiInstance
    .get(`/users/${id}`)
    .then(response => {
      console.log('response', response);
      dispatch(fetchUserSuccess(response.data));
      addNotification({
        type: 'success',
        title: 'Great!',
        message: 'User was loaded successfully',
      });
    })
    .catch(error => {
      dispatch(fetchUserError(error.response));
      addNotification({
        type: 'danger',
        title: 'Oops!',
        message: 'Something went wrong',
      });
    });
};
