import React, { useEffect, useState } from "react";

import {
  listCat,
  createCat,
  deleteCat,
  updateCat,
} from "../../services/catServices.js";

import "./profile.css";

import Header from "../../components/header/Header.jsx";

const Profile = ({ token }) => {
  const [formData, setFormData] = useState({
    file: [],
    filePreview: "",
    category: "",
    description: "",
  });

  useEffect(() => {
    if (!token || token === "") {
      window.location.pathname = "/auth/login";
    }
  }, [token]);

  const [user, setUser] = useState([]);
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user_data")));
  }, []);

  const [isAdding, setIsAdding] = useState(true);
  const [adding, setAdding] = useState(false);
  const clearForm = (e) => {
    setIsAdding(true);
    e.preventDefault();
    setFormData({
      file: [],
      filePreview: "",
      category: "",
      description: "",
    });
  };

  const { category, description } = formData;
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const [categories, setCategories] = useState([]);
  const [getCats, setGetCats] = useState(false);
  useEffect(() => {
    listCat()
      .then((response) => {
        response.json().then((data) => {
          setCategories(data);
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }, [getCats]);

  const getImage = (e) => {
    const image = e.target.files[0];
    const imagePreview = URL.createObjectURL(image);
    setFormData({
      ...formData,
      file: image,
      filePreview: imagePreview,
    });
  };

  const [isDeleting, setIsDeleting] = useState(false);
  const handleDelete = (e) => {
    e.preventDefault();
    setIsDeleting(true);
    deleteCat(e.target.id)
      .then((response) => {
        response.json().then((data) => {
          console.log(data);
          setGetCats(!getCats);
        });
        setIsDeleting(false);
        setGetCats(!getCats);
        console.clear();
      })
      .catch((error) => {
        console.log(error);
        setIsDeleting(false);
        setGetCats(!getCats);
      });
  };

  const [id, setId] = useState("");
  const handleUpdate = (e) => {
    e.preventDefault();
    setId(e.target.id);
    const target = categories.filter(
      (category) => Number(category.id) === Number(e.target.id)
    );
    setFormData({
      ...formData,
      category: target[0].name,
      description: target[0].description,
    });
    setIsAdding(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id && !isAdding && id !== "") {
      updateCat(id, category, description, formData.file)
        .then((response) => {
          response.json().then((data) => {
            setAdding(false);
            setGetCats(!getCats);
          });
        })
        .catch((error) => {
          setAdding(false);
          console.log(error);
        });
      return;
    }
    if (
      category &&
      category.length > 0 &&
      description.length > 0 &&
      formData.file !== []
    ) {
      setAdding(true);
      createCat(category, description, formData.file)
        .then((response) => {
          response.json().then((data) => {
            // console.log(data);
            setAdding(false);
            setGetCats(!getCats);
          });
        })
        .catch((error) => {
          setAdding(false);
          console.log(error);
        });
    }
  };

  return (
    <div>
      <Header token={token} />
      {token && token !== "" && (
        <div className="flex default-container dashboard flex-wrap">
          <div className="flex-one">
            <h1 className="head text-center">Your Profile</h1>
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
                    onChange={getImage}
                    accept="image/png, image/jpeg, image/jpg, image/webp"
                    type="file"
                    placeholder="Select Image"
                  />
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
                <div className="form-control flex flex-wrap">
                  <button
                    disabled={adding}
                    style={{
                      marginRight: "0.2rem",
                      opacity: `${isDeleting ? "0.3" : "1"}`,
                    }}
                    type="submit"
                  >
                    {isAdding ? "Add Category" : "Update Category"}
                  </button>
                  {!isAdding && <button onClick={clearForm}>Reset</button>}
                </div>
              </form>
            </div>
          </div>
          <div className="flex-half">
            {
              <div className="cat-preview">
                <div
                  style={{ height: "250px", overflow: "hidden" }}
                  className="image"
                >
                  <img
                    style={{
                      width: "100%",
                      height: "100%",
                      borderRadius: "3px",
                      objectFit: "cover",
                      objectPosition: "center",
                    }}
                    src={formData.filePreview}
                    alt="preview"
                  />
                </div>
                <div className="data">
                  <h2>{category}</h2>
                  <h3>{description}</h3>
                </div>
              </div>
            }
            <div className="categories">
              {categories &&
                categories.length > 0 &&
                categories.map((cat, index) => {
                  return (
                    <div className="cat" key={index + cat.name}>
                      <h2 className="text-center">{cat.name}</h2>
                      <h3 className="text-center">{cat.description}</h3>
                      <div className="btn-collection flex a-j-center">
                        <button
                          style={{
                            opacity: `${isDeleting ? "0.3" : "1"}`,
                          }}
                          disabled={isDeleting}
                          onClick={handleDelete}
                          id={cat.id}
                          className="btn danger"
                        >
                          Delete
                        </button>
                        <button
                          onClick={handleUpdate}
                          id={cat.id}
                          className="btn normal"
                        >
                          Update
                        </button>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
