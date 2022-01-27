import { useEffect, useState } from 'react';

import './toast.css';

const Toast = ({ text, type, handleShow }) => {
  const [toggleToast, setToggleToast] = useState(true);
  useEffect(() => {
    setToggleToast(true);
  }, []);
  return (
    <div
      style={{
        background: type === 'success' ? 'var(--light-green)' : 'red',
      }}
      className={`toast ${toggleToast ? 'show' : 'none'}`}
    >
      <h4
        style={{
          color: type === 'success' ? 'var(--dark-green)' : '#fff',
        }}
      >
        <i
          className={`fas fa-${type === 'success' ? 'check' : 'exclamation'}`}
          aria-hidden="true"
        ></i>{' '}
        {text}
      </h4>
      <button title="Close Panel" onClick={handleShow}>
        <i aria-hidden="true" className="fas fa-times"></i>
      </button>
    </div>
  );
};

export default Toast;
