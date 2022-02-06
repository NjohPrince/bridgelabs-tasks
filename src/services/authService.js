import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_KEY,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("refresh_token")}`,
  },
});

export const login = async (email, password) => {
  return await fetch(`${process.env.REACT_APP_API_KEY}/user/login`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });
};

export const signup = async (
  email,
  first_name,
  last_name,
  phone,
  password,
  avatar
) => {
  return await fetch(`${process.env.REACT_APP_API_KEY}/user/register`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      first_name,
      last_name,
      phone,
      password,
      avatar,
    }),
  });
};

export const logout = async (refresh_token) => {
  const body = JSON.stringify({
    refresh_token: refresh_token,
  });
  return await axiosInstance.post(`/user/logout`, body);
};
