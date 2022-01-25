import React from 'react';
import { Link } from 'react-router-dom';

import './landingpage.css';

import Header from '../../components/header/Header.jsx';

const LandingPage = () => {
  return (
    <React.Fragment>
      <Header />
      <div className="landing">
        <div className="welcome default-container flex a-j-center">
          <div className="content flex-half">
            <h2>
              Artificial Intelligence Driving Results For The Travel Industry.
            </h2>
            <h4>Welcome back! Please log into your account.</h4>
            <div className="search">
              <input type="search" placeholder="Search Services..." />
            </div>
            <div className="btn-group">
              <Link to="/about-us">
                <button>About Us</button>
              </Link>
              <Link to="/auth/login">
                <button>Login</button>
              </Link>
            </div>
          </div>
          <div className="illustration flex-one">
            <img src="/static/bicycle.svg" alt="illustration" />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default LandingPage;
