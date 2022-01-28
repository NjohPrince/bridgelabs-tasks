import React from 'react';
import { Link } from 'react-router-dom';

import { logout } from '../../auth-sevice/authService.js';

import './header.css';

import { AppName } from '../../utils/appName/AppName.js';
import { NavLinks } from '../../utils/links/Links.js';

const Header = ({ token }) => {
  const handleLogout = () => {
    logout(token)
      .then((response) => {
        response
          .json()
          .then((data) => {
            console.log(data);
            localStorage.clear();
          })
          .catch((error) => {
            console.log('Error from server');
            console.log(error);
          });
      })
      .catch((error) => {
        console.log('Network issues.');
      });
  };

  return (
    <div className="navbar flex a-j-space-between">
      <div className="logo">
        <h2>{AppName}</h2>
      </div>
      <ul className="menu flex">
        {NavLinks.length > 0 &&
          NavLinks.map((links, index) => {
            return (
              <li key={index + links.name}>
                <Link className="t-delay-2" to={links.path}>
                  {links.name}
                </Link>
              </li>
            );
          })}
        {token && token !== '' && (
          <>
            <li>
              <Link className="t-delay-2" to="/profile">
                Profile
              </Link>
            </li>
            <li>
              <Link onClick={handleLogout} className="t-delay-2" to="/#logout">
                Logout
              </Link>
            </li>
          </>
        )}
      </ul>
    </div>
  );
};

export default Header;
