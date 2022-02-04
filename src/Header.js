import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { slide as Menu } from 'react-burger-menu';

import * as usersSelectors from './js/redux/users/usersSelectors';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const favouriteUsers = useSelector(usersSelectors.getFavouriteUsers);

  const handleStateChange = state => {
    setIsMenuOpen(state.isOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header>
      <nav
        className="navbar navbar-expand navbar-dark fixed-top bg-dark"
        style={{ height: '96px' }}
      >
        <div className="container d-flex justify-content-between align-items-center px-3">
          <div className="d-flex justify-content-between align-items-center">
            <div className="navbar-header mr-5">
              <Link to="/" className="h1 button_header">
                <span className="h3">GitHub</span>
              </Link>
            </div>
            <ul className="list_header p-0 m-0 d-flex align-items-center justify-content-between position-relative">
              <li className="mr-4">
                <NavLink
                  to="/"
                  exact
                  className="h3 button_header"
                  activeClassName="underline_light"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/users"
                  exact
                  className="h3 button_header"
                  activeClassName="underline_light"
                >
                  Users
                </NavLink>
              </li>
            </ul>
          </div>

          <div className="d-block ml-3 ml-sm-4">
            <Menu
              right
              isOpen={isMenuOpen}
              onStateChange={state => handleStateChange(state)}
            >
              <div
                className="d-flex flex-column align-items-center"
                style={{ padding: '40px' }}
              >
                <p className="menu-item button_navbar mb-4">
                  My favourite users <i className="bi bi-heart-fill"></i>
                </p>
                {!favouriteUsers.length && (
                  <p className="menu-item text-muted text-center">
                    You haven't got favourite users
                  </p>
                )}
                {favouriteUsers.map(user => (
                  <a
                    key={user.id}
                    href={user.html_url}
                    target="_blank"
                    rel="noreferrer"
                    className="menu-item button_navbar mb-3"
                    onClick={closeMenu}
                  >
                    {user.name || user.login || 'No name'}
                  </a>
                ))}
              </div>
            </Menu>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
