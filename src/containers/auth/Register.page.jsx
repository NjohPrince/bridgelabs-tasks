import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './auth.css';

const RegisterPage = () => {
  const preLoadParticles = Array(30).fill(0);

  const [erorrMessage, setErrorMessage] = useState('');
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    password: '',
    confirm_password: '',
  });

  const { fullname, email, password, confirm_password } = formData;
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
    if (
      email === '' ||
      password === '' ||
      fullname === '' ||
      confirm_password === ''
    ) {
      setErrorMessage('Please fill out all fields!');
      return;
    }
    if (fullname.length <= 2) {
      setErrorMessage('Name length too short!');
      return;
    }
    if (!validateEmail(email)) {
      setErrorMessage('Email not valid!');
      return;
    }
    if (password.length < 6) {
      setErrorMessage('Password: enter atleast 6 characters.');
      return;
    }
    if (confirm_password !== password) {
      setErrorMessage('Passwords must match!');
      return;
    }
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
            <h1>Register</h1>
          </div>
        </div>
        <div className="form-control flex a-j-center">
          <i className="fas fa-user" aria-hidden="true"></i>
          <input onChange={onChange} name="fullname" value={fullname} type="text" placeholder="Enter Your Full Name" />
        </div>
        <div className="form-control flex a-j-center">
          <i className="fas fa-envelope" aria-hidden="true"></i>
          <input onChange={onChange} name="email" value={email} type="text" placeholder="Your Email" />
        </div>
        <div className="form-control flex a-j-center">
          <i className="fas fa-lock" aria-hidden="true"></i>
          <input onChange={onChange} name="password" value={password} type="password" placeholder="Password" />
        </div>
        <div className="form-control flex a-j-center">
          <i className="fas fa-lock" aria-hidden="true"></i>
          <input onChange={onChange} name="confirm_password" value={confirm_password} type="password" placeholder="Confirm Password" />
        </div>
        <div className="form-control">
          <button type="submit">Register</button>
        </div>
        <div className="form-control">
          <h4 style={{ marginTop: '1rem' }}>
            Already have an account?{' '}
            <Link
              style={{ fontWeight: '700', color: 'var(--main-color)' }}
              to="/auth/login"
            >
              Login
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

export default RegisterPage;
