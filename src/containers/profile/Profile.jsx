import React, { useEffect, useState } from 'react';

import './profile.css';

import Header from '../../components/header/Header.jsx';

const Profile = ({ token }) => {
  useEffect(() => {
    if (!token || token === '') {
      window.location.pathname = '/auth/login';
    }
  }, [token]);

  const [user, setUser] = useState([]);
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem('user_data')));
  }, []);

  return (
    <div>
      <Header token={token} />
      {token && token !== '' && (
        <div className="flex default-container flex-column a-j-center">
          <h1 className="head">Your Profile</h1>
          <div className="profile">
            <h2>
              <span>First Name: </span>
              {user.first_name}
            </h2>
            <h2>
              <span>Last Name: </span>
              {user.last_name}
            </h2>
            <h2>
              <span>Email: </span>
              {user.email}
            </h2>
            <h2>
              <span>Phone Number: </span>
              {user.phone}
            </h2>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
