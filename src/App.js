import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes, Route } from 'react-router';

import Notify from './components/notify/Notify.js';

import LandingPage from './containers/landing-page/Landing.page.jsx';
import RegisterPage from './containers/auth/Register.page.jsx';
import LoginPage from './containers/auth/Login.page.jsx';
import ErrorPage from './containers/404/Error.page.jsx';
import Profile from './containers/profile/Profile.jsx';

const App = () => {
  const [token, setToken] = useState('');
  useEffect(() => {
    async function getToken() {
      await fetch(`/api/token`, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      })
        .then((data) => {
          data
            .json()
            .then((message) => {
              setToken(message.token);
            })
            .catch((error) => {
              // console.log(error);
              console.clear();
            });
        })
        .catch((error) => {
          // console.log(error);
          console.clear();
        });
    }
    getToken();
    console.clear();
  }, []);

  return (
    <div className="app">
      <Router>
        <Notify />
        <Routes>
          <Route exact path="/" element={<LandingPage />} />

          {/** Auth Routes */}
          <Route
            exact
            path="/auth/login"
            element={<LoginPage token={token} />}
          />
          <Route
            exact
            path="/auth/register"
            element={<RegisterPage token={token} />}
          />

          {/** User Profile */}
          <Route exact path="/profile" element={<Profile token={token} />} />

          {/** Error - 404 Route */}
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
