import React from 'react';
import { Link } from 'react-router-dom';

import './error.css';

const ErrorPage = () => {
  const preLoadParticles = Array(30).fill(0);
  return (
    <div className="default-container flex-column flex a-j-center">
      {preLoadParticles.length > 0 &&
        preLoadParticles.map(() => <div className="particle"></div>)}
      <h1 style={{ color: 'rgba(0, 0, 0, 0.6)', fontWeight: '800' }}>
        404 Page Not Found
      </h1>
      <Link
        style={{
          background: 'var(--main-color)',
          color: '#fff',
          fontWeight: '600',
          fontSize: '17px',
          marginTop: '1rem',
          padding: '0.8rem',
          borderRadius: '3px',
          boxShadow: '5px 5px 10px 1px rgba(0, 0, 0, 0.4)',
          WebkitBoxShadow: '5px 5px 10px 1px rgba(0, 0, 0, 0.4)',
          marginBottom: '0.5rem',
        }}
        to="/"
      >
        Go Back Home
      </Link>
      <h1>🙄</h1>
    </div>
  );
};

export default ErrorPage;
