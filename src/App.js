import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes, Route } from 'react-router';

import LandingPage from './containers/landing-page/Landing.page.jsx';
import RegisterPage from './containers/auth/Register.page.jsx';
import LoginPage from './containers/auth/Login.page.jsx';
import ErrorPage from './containers/404/Error.page.jsx';

const App = () => {
  const [token, setToken] = useState("");
  useEffect(async () => {
    await fetch(`/api/token`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }
    })
      .then((data) => {
        data
          .json()
          .then((message) => {
            setToken(message.token);
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="app">
      <Router>
        <Routes>
          <Route exact path="/" element={<LandingPage token={token} />} />

          {/** Auth Routes */}
          <Route exact path="/auth/login" element={<LoginPage />} />
          <Route exact path="/auth/register" element={<RegisterPage />} />

          {/** Error - 404 Route */}
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
