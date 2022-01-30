import React, { useEffect, useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import './auth.css';

import { DataContext } from '../../store/GlobalState';

import { signup } from '../../services/authService.js';

const RegisterPage = ({ token }) => {
  const preLoadParticles = Array(30).fill(0);
  const [state, dispatch] = useContext(DataContext);
  const history = useNavigate();
  
  useEffect(() => {
    if (token && token !== '') {
      window.location.pathname = '/';
    }
  }, [token]);

  const [erorrMessage, setErrorMessage] = useState('');
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    contact: '',
    password: '',
    confirm_password: '',
    avatar: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50',
  });

  const {
    first_name,
    last_name,
    email,
    contact,
    password,
    confirm_password,
    avatar,
  } = formData;
  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrorMessage('');
  };

  const validateEmail = (email) => {
    return email.match(
      // eslint-disable-next-line
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };

  const [loading, setLoading] = useState(false);
  const handleSubmit = (e) => {
    setErrorMessage('');
    e.preventDefault();
    if (
      email === '' ||
      password === '' ||
      first_name === '' ||
      last_name === '' ||
      confirm_password === ''
    ) {
      setErrorMessage('Please fill out all fields!');
      return;
    }
    if (first_name.length < 2 || last_name.length < 2) {
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
    setLoading(true);
    signup(email, first_name, last_name, contact, password, avatar)
      .then((response) => {
        response
          .json()
          .then((data) => {
            if (data.detail) {
              setErrorMessage(data.detail);
              return;
            }
            console.log(data);
            dispatch({
              type: 'NOTIFY',
              payload: { success: 'Successfully registered. Please login.' },
            });
            console.clear();
            history('/auth/login');
          })
          .catch((error) => {
            console.log('Inner Error: ', error);
            setLoading(false);
          });
        setLoading(false);
      })
      .catch((error) => {
        console.log('Outer Error: ', error);
        setLoading(false);
      });
  };

  return (
    <div className="auth-container relative flex default-container a-j-center">
      {preLoadParticles.length > 0 &&
        preLoadParticles.map(() => <div className="particle"></div>)}
      <form onSubmit={handleSubmit} className="auth">
        <div className="form-control">
          <div className="head">
            <h1>Register</h1>
          </div>
        </div>
        <div className="form-control flex a-j-center">
          <i className="fas fa-user" aria-hidden="true"></i>
          <input
            onChange={onChange}
            name="first_name"
            value={first_name}
            type="text"
            placeholder="First Name"
          />
        </div>
        <div className="form-control flex a-j-center">
          <i className="fas fa-user" aria-hidden="true"></i>
          <input
            onChange={onChange}
            name="last_name"
            value={last_name}
            type="text"
            placeholder="Last Name"
          />
        </div>
        <div className="form-control flex a-j-center">
          <i className="fas fa-envelope" aria-hidden="true"></i>
          <input
            onChange={onChange}
            name="email"
            value={email}
            type="text"
            placeholder="Your Email"
          />
        </div>
        <div className="form-control flex a-j-center">
          <i className="fas fa-phone-alt" aria-hidden="true"></i>
          <input
            onChange={onChange}
            name="contact"
            value={contact}
            type="number"
            placeholder="Your Contact"
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
        <div className="form-control flex a-j-center">
          <i className="fas fa-lock" aria-hidden="true"></i>
          <input
            onChange={onChange}
            name="confirm_password"
            value={confirm_password}
            type="password"
            placeholder="Confirm Password"
          />
        </div>
        <div className="form-control">
          <button
            style={{
              opacity: `${loading ? '0.3' : '1'}`,
            }}
            disabled={loading}
            type="submit"
          >
            Register
          </button>
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
