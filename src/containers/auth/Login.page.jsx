import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './auth.css';

import { login } from '../../auth-sevice/authService.js';

const LoginPage = () => {
  const preLoadParticles = Array(30).fill(0);

  const [erorrMessage, setErrorMessage] = useState('');
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;
  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrorMessage('');
  };

  const validateEmail = (email) => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };
  const handleSubmit = (e) => {
    setErrorMessage('');
    e.preventDefault();
    if (email === '' || password === '') {
      setErrorMessage('Please fill out all fields!');
      return;
    }
    if (!validateEmail(email)) {
      setErrorMessage('Email not valid!');
      return;
    }
    console.log(process.env.REACT_APP_API_KEY);
    login(email, password).then((response) => {
      console.log(response);
    }).catch(error => { 
      console.log(error.response);
    })
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
          <input
            onChange={onChange}
            name="email"
            value={email}
            type="text"
            placeholder="Email"
          />
        </div>
        <div className="form-control flex a-j-center">
          <i className="fas fa-lock" aria-hidden="true"></i>
          <input
            onChange={onChange}
            name="password"
            value={password}
            type="password"
            placeholder="Password"
          />
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
        <div className="form-control">
          {erorrMessage && <h4 className="error">{erorrMessage}</h4>}
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
