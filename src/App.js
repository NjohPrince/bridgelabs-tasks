import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes, Route } from 'react-router';

import LandingPage from './containers/Landing.page.jsx';
import RegisterPage from './containers/auth/Register.page.jsx';
import LoginPage from './containers/auth/Login.page.jsx';
import ErrorPage from './containers/404/Error.page.jsx';

const App = () => {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />

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
