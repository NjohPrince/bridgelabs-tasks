import React from 'react';
import PropTypes from 'prop-types';

import './button.css';

const Button = ({ btnText, primary }) => {
    return (
        <button className={`button t-delay-2 ${primary ? 'primary' : 'secondary'}`}>
            {btnText}
        </button>
    );
};

Button.defaultProps = {
    primary: true,
    btnText: ''
};
  
Button.propTypes = {
    primary: PropTypes.bool.isRequired,
    btnText: PropTypes.string.isRequired
};

export default Button;
