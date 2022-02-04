import React, { useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import InfiniteScroll from 'react-infinite-scroll-component';

import * as usersOperations from '../../redux/users/usersOperations';

import LoaderDots from '../../components/Loader/LoaderDots';
import UserCard from '../../components/UserCard/UserCard.js';

const Users = () => {
  const dispatch = useDispatch();
  const users = useSelector(state => state.users.users);

  const lastUserId = useMemo(() => {
    if (users.length) {
      const lastUser = users[users.length - 1];
      return lastUser.id;
    }
    return 0;
  }, [users]);

  useEffect(() => {
    !users.length && dispatch(usersOperations.fetchUsers(lastUserId));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchMoreData = () => {
    dispatch(usersOperations.fetchUsers(lastUserId));
  };

  return (
    <div className="container pt-5 position-relative">
      <div className="page-header">
        <div className="row">
          <div className="col-12 mb-3">
            <h3 className="page-title ">Users</h3>
          </div>
          <div className="col-12">
            <ul className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/" className="text-secondary">
                  Home
                </Link>
              </li>
              <li className="breadcrumb-item active text-secondary">Users</li>
            </ul>
          </div>
        </div>
      </div>
      <InfiniteScroll
        dataLength={users.length}
        next={fetchMoreData}
        hasMore={true}
        className="row row-cols-1 row-cols-md-3 g-4"
        loader={<LoaderDots />}
      >
        {users.map(user => (
          <UserCard key={user.id} user={user} />
        ))}
      </InfiniteScroll>
    </div>
  );
};

export default Users;
