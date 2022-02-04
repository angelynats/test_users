import React, { lazy, Suspense, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import Header from './Header';

import {
  setUsersInStorage,
  getUsersFromStorage,
} from './js/utils/localStorageHelpers';
import Loader from './js/components/Loader/Loader';

import * as usersActions from './js/redux/users/usersActions';
import * as usersSelectors from './js/redux/users/usersSelectors';

import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en';
TimeAgo.addDefaultLocale(en);

const AsyncDashboard = lazy(() =>
  import('./js/pages/Home/Home' /* webpackChunkName: 'home'*/),
);

const AsyncUsers = lazy(() =>
  import('./js/pages/Users/Users' /* webpackChunkName: 'users'*/),
);

const AsyncUser = lazy(() =>
  import('./js/pages/Users/User' /* webpackChunkName: 'user'*/),
);

const AsyncError404 = lazy(() =>
  import('./js/pages/Error/Error404' /* webpackChunkName: 'error-404'*/),
);

const App = () => {
  const dispatch = useDispatch();

  const favouriteUsers = useSelector(usersSelectors.getFavouriteUsers);

  useEffect(() => {
    const users = getUsersFromStorage();
    users && dispatch(usersActions.setFavouriteUsers(users));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (favouriteUsers.length) {
      setUsersInStorage(favouriteUsers);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [favouriteUsers]);

  return (
    <>
      <Header />
      <main className="container_padding background_light">
        <Suspense fallback={<Loader />}>
          <Switch>
            <Route path="/" exact>
              <AsyncDashboard />
            </Route>
            <Route path="/user/:id">
              <AsyncUser />
            </Route>
            <Route path="/users">
              <AsyncUsers />
            </Route>
            <Route component={AsyncError404} />
          </Switch>
        </Suspense>
      </main>
    </>
  );
};

export default App;
