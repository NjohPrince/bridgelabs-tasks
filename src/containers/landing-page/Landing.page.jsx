import React from 'react';
import { Link } from 'react-router-dom';

import './landingpage.css';

import Header from '../../components/header/Header.jsx';
import Button from '../../components/button/Button.jsx';

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
            <h3>Welcome back! Please log into your account.</h3>
            <div className="search">
              <input type="search" placeholder="Search Services..." />
            </div>
            <div className="btn-group">
              <Link to="/about-us">
                <Button btnText="About Us" primary={true} />
              </Link>
              <Link to="/auth/login">
                <Button btnText="Login" primary={false} />
              </Link>
            </div>
          </div>
          <div className="illustration flex-one">
            <img width="100%" height="100%" src="/static/bicycle.svg" alt="illustration" />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default LandingPage;
