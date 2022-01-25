import React from 'react';
import { Link } from 'react-router-dom';

import './header.css';

import { AppName } from '../../utils/appName/AppName.js';
import { NavLinks } from '../../utils/links/Links.js';

const Header = () => {
    return (
        <div className="navbar flex a-j-space-between">
            <div className="logo">
                <h2>{AppName}</h2>
            </div>
            <ul className="menu flex">
                {
                    NavLinks.length > 0 && NavLinks.map((links, index) => {
                        return (
                            <Link className="t-delay-2" to={links.path} key={index + links.name}>{links.name}</Link>
                        )
                    })
                }
            </ul>
        </div>
    );
};

export default Header;
