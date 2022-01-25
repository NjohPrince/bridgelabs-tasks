import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './auth.css';

const LoginPage = () => {
  const preLoadParticles = Array(30).fill(0);

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
  };

  return (
    <div className="auth-container relative flex default-container a-j-center">
      {preLoadParticles.length > 0 &&
        preLoadParticles.map(() => {
          return <div class="particle"></div>;
        })}
      <form onSubmit={handleSubmit} className="auth">
        <div className="form-control">
          <div className="head">
            <h1>Login</h1>
          </div>
        </div>
        <div className="form-control flex a-j-center">
          <i className="fas fa-envelope" aria-hidden="true"></i>
          <input onChange={onChange} name="email" value={email} type="email" placeholder="Email" />
        </div>
        <div className="form-control flex a-j-center">
          <i className="fas fa-lock" aria-hidden="true"></i>
          <input onChange={onChange} name="password" value={password} type="password" placeholder="Password" />
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
      </form>
    </div>
  );
};

export default LoginPage;
