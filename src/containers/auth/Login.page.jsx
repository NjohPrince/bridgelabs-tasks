import React from 'react';

import './auth.css';

const LoginPage = () => {
  return (
    <div className="auth-container">
      <div className="auth">
        <div className="form-control">
          <i className="fas fa-envelope" aria-hidden="true"></i>
          <input type="text" placeholder="Email" />
        </div>
        <div className="form-control">
          <i className="fas fa-lock" aria-hidden="true"></i>
          <input type="text" placeholder="Password" />
        </div>
        <div className="form-control">
          <button type="submit">Login</button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
