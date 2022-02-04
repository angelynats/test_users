import React, { useMemo, useState } from 'react';

import ReactTimeAgo from 'react-time-ago';

import Modal from '../../components/Modal/Modal';
import defaultAvatar from '../../../images/default-avatar.png';

const UserInfo = ({ user, onLike, onUnlike, isFavourite }) => {
  const {
    name,
    followers,
    following,
    created_at,
    updated_at,
    company,
    email,
    location,
    blog,
    bio,
    login,
    avatar_url,
    html_url,
  } = user;

  const [isModalOpen, setIsModalOpen] = useState(false);

  const createdDate = useMemo(() => {
    const currentDate =
      Date.parse(created_at) + new Date().getTimezoneOffset() * 60 * 1000;
    return new Date(currentDate).toLocaleDateString('en-US');
  }, [created_at]);

  const toggleModalOpen = () => {
    setIsModalOpen(prev => !prev);
  };

  return (
    <div className="card mb-3 position-relative">
      <button
        type="button"
        title={isFavourite ? 'Dislike' : 'Like'}
        className="position-absolute btn shadow-none"
        style={{ right: 0, zIndex: 100 }}
        onClick={() => (isFavourite ? onUnlike(user.id) : onLike(user))}
      >
        {isFavourite ? (
          <i class="bi bi-heart-fill text-danger h2"></i>
        ) : (
          <i class="bi bi-heart h2"></i>
        )}
      </button>

      <div className="row g-0">
        <div className="col-md-4">
          <img
            src={avatar_url || defaultAvatar}
            className="img-fluid rounded-start image_standart image_card"
            alt={login}
            onClick={toggleModalOpen}
            type="button"
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{name || login || 'No name'}</h5>
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
            {email && <p className="card-text">Email: {email}</p>}
            {company && <p className="card-text">Company: {company}</p>}
            {location && <p className="card-text">Location: {location}</p>}
            {bio && <p className="card-text">{bio}</p>}
            {blog && <p className="card-text">{blog}</p>}
            <p className="card-text">Followers: {followers}</p>
            <p className="card-text">Following: {following}</p>
            <p className="card-text">Registered in {createdDate}</p>
            <p className="card-text">
              <small className="text-muted">
                Last updated
                <ReactTimeAgo
                  date={updated_at}
                  timeStyle="round-minute"
                  locale="en-US"
                  className="ml-1"
                />
              </small>
            </p>
          </div>
        </div>
      </div>
      {avatar_url && isModalOpen && (
        <Modal onClose={toggleModalOpen}>
          <img src={avatar_url} alt={login} className="img-fluid" />
        </Modal>
      )}
    </div>
  );
};

export default UserInfo;
