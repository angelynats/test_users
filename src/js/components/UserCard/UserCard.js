import React from 'react';
import { Link } from 'react-router-dom';

import defaultAvatar from '../../../images/default-avatar.png';

const UserCard = ({ user }) => {
  const { login, avatar_url, html_url } = user;
  return (
    <div className="col mb-4">
      <div className="card h-100">
        <Link to={`/user/${user.id}`}>
          <img
            src={avatar_url || defaultAvatar}
            className="card-img-top"
            alt={login}
          />
        </Link>
        <div className="card-body">
          <h5 className="card-title">{login}</h5>
          <p className="card-text">
            <a
              href={html_url}
              target="_blank"
              rel="noreferrer"
              className="card-link"
            >
              GitHub
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
