import React, { useEffect } from 'react';
import { Link, useRouteMatch, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import UserInfo from '../../components/UserInfo/UserInfo.js';
import Loader from '../../components/Loader/Loader';

import * as usersOperations from '../../redux/users/usersOperations';
import * as usersActions from '../../redux/users/usersActions';
import * as usersSelectors from '../../redux/users/usersSelectors';

const User = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const match = useRouteMatch();
  const user = useSelector(state => state.users.user);
  const error = useSelector(state => state.users.error);

  const isFavourite = useSelector(state =>
    usersSelectors.getIsUserInFavourites(state, user && user.id),
  );

  useEffect(() => {
    dispatch(usersOperations.fetchUser(match.params.id));
    return () => dispatch(usersActions.clearUser());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (error && error.status === 404) {
      history.push('/error404');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error]);

  const handleLike = user => {
    dispatch(usersActions.likeUser(user));
  };

  const handleUnlike = id => {
    dispatch(usersActions.unlikeUser(id));
  };

  return (
    <div className="container pt-5">
      <div className="page-header">
        <div className="row">
          <div className="col-12 mb-3">
            <h3 className="page-title ">User Information</h3>
          </div>
          <div className="col-12">
            <ul className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/" className="text-secondary">
                  Home
                </Link>
              </li>
              <li className="breadcrumb-item">
                <Link to="/users" className="text-secondary">
                  Users
                </Link>
              </li>
              <li className="breadcrumb-item active text-secondary">
                User Information
              </li>
            </ul>
          </div>
        </div>
      </div>
      {!user && <Loader />}
      {user && (
        <UserInfo
          onLike={handleLike}
          onUnlike={handleUnlike}
          user={user}
          isFavourite={isFavourite}
        />
      )}
    </div>
  );
};

export default User;
