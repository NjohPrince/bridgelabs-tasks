import React, { useEffect, useState } from "react";

import { listCat, createCat } from "../../services/catServices.js";

import "./profile.css";

import Header from "../../components/header/Header.jsx";

const Profile = ({ token }) => {
  const [formData, setFormData] = useState({
    category: "",
    description: "",
  });
  const { category, description } = formData;
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  useEffect(() => {
    listCat()
      .then((response) => {
        response.json().then((data) => {
          console.log(data);
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (category && category.length > 0) {
      console.log(category, description);
    }
  };

  useEffect(() => {
    if (!token || token === "") {
      window.location.pathname = "/auth/login";
    }
  }, [token]);

  const [user, setUser] = useState([]);
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user_data")));
  }, []);

  return (
    <div>
      <Header token={token} />
      {token && token !== "" && (
        <div className="flex default-container dashboard flex-column a-j-center">
          <h1 className="head">Your Profile</h1>
          <div className="profile">
            <h2>
              <span>First Name: </span>
              {user.first_name}
            </h2>
            <h2>
              <span>Last Name: </span>
              {user.last_name}
            </h2>
            <h2>
              <span>Email: </span>
              {user.email}
            </h2>
            <h2>
              <span>Phone Number: </span>
              {user.phone}
            </h2>
          </div>
          <div className="manage-cat">
            <form onSubmit={handleSubmit}>
              <div className="head">
                <h2>Create Awesome Categories</h2>
              </div>
              <div className="form-control">
                <input
                  name="category"
                  type="text"
                  placeholder="Enter category"
                  value={category}
                  onChange={onChange}
                />
              </div>
              <div className="form-control">
                <input
                  name="description"
                  type="text"
                  placeholder="Enter category description"
                  value={description}
                  onChange={onChange}
                />
              </div>
              <div className="form-control">
                <button type="submit">Add Category</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
