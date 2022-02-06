import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_KEY,
  headers: {
    "Content-Type": "multipart/form-data",
  },
});

export const createCat = async (name, description, image) => {
  const data = new FormData();

  data.append("image", image);
  data.append("name", name);
  data.append("description", description);

  return await axiosInstance.post(`/category/create`, data);
};

export const listCat = async () => {
  return await fetch(`${process.env.REACT_APP_API_KEY}/category/categories`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
};

export const updateCat = async (id, name, description, image) => {
  return await fetch(`${process.env.REACT_APP_API_KEY}/category/update/${id}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, description, image }),
  });
};

export const deleteCat = async (id) => {
  return await fetch(`${process.env.REACT_APP_API_KEY}/category/delete/${id}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
    },
  });
};
