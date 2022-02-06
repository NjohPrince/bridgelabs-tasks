import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { logout } from "../../services/authService.js";

import "./header.css";

import { AppName } from "../../utils/appName/AppName.js";
import { NavLinks } from "../../utils/links/Links.js";

const Header = () => {
  const [mobile, setMobile] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [currentWidth, setCurrentWidth] = useState(window.innerWidth);

  const toggleSideNav = (e) => {
    e.preventDefault();
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    if (currentWidth <= 800) {
      setMobile(true);
    } else {
      setMobile(false);
    }
  }, [currentWidth]);

  window.addEventListener("resize", () => {
    setCurrentWidth(window.innerWidth);
  });

  const [token, setToken] = useState("");
  useEffect(() => {
    async function getToken() {
      await fetch(`/api/token`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
        .then((data) => {
          data
            .json()
            .then((message) => {
              setToken(message.token);
            })
            .catch((error) => {
              console.log(error);
              // console.clear();
            });
        })
        .catch((error) => {
          console.log(error);
          // console.clear();
        });
    }
    getToken();
    // console.clear();
  }, []);

  const handleLogout = () => {
    logout(token)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="navbar flex a-j-space-between">
      <div className="logo">
        <h2>{AppName}</h2>
      </div>
      <ul
        className={`${
          !mobile ? "menu flex" : `mobile ${showMenu ? "show" : null}`
        }`}
      >
        {NavLinks.length > 0 &&
          NavLinks.map((links, index) => {
            return (
              <li key={index + links.name}>
                <Link className="t-delay-2" to={links.path}>
                  {links.name}
                </Link>
              </li>
            );
          })}
        {token && token !== "" && (
          <>
            <li>
              <Link className="t-delay-2" to="/profile">
                Profile
              </Link>
            </li>
            <li>
              <Link onClick={handleLogout} className="t-delay-2" to="/#logout">
                Logout
              </Link>
            </li>
          </>
        )}
      </ul>
      {mobile && (
        <div className="menu-toggler">
          <button
            title={`${showMenu ? "Close Menu" : "Open Menu"}`}
            onClick={toggleSideNav}
          >
            <i aria-hidden="true" className="fas fa-bars"></i>
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
