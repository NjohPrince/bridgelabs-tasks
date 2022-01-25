import React from 'react';
import { Link } from 'react-router-dom';

import './auth.css';

const LoginPage = () => {
  const preLoadParticles = Array(30).fill(0);

  return (
    <div className="auth-container relative flex default-container a-j-center">
      {preLoadParticles.length > 0 &&
        preLoadParticles.map(() => {
          return <div class="particle"></div>;
        })}
      <div className="auth">
        <div className="form-control">
          <div className="head">
            <h1>Login</h1>
          </div>
        </div>
        <div className="form-control flex a-j-center">
          <i className="fas fa-envelope" aria-hidden="true"></i>
          <input type="email" placeholder="Email" />
        </div>
        <div className="form-control flex a-j-center">
          <i className="fas fa-lock" aria-hidden="true"></i>
          <input type="password" placeholder="Password" />
        </div>
        <div className="form-control">
          <button type="submit">Login</button>
        </div>
        <div className="form-control">
          <h4 style={{ marginTop: '1rem' }}>
            Don't have an account?{' '}
            <Link
              style={{ fontWeight: '700', color: 'var(--main-color)' }}
              to="/auth/register"
            >
              Register
            </Link>
          </h4>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
