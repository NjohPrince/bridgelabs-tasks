export const login = async (email, password) => {
  return await fetch(`${process.env.REACT_APP_API_KEY}/login/`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  })
};

export const signup = async (
  email,
  first_name,
  last_name,
  phone,
  password,
  avatar
) => {
  return await fetch(`${process.env.REACT_APP_API_KEY}/register/`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, first_name, last_name, phone, password, avatar }),
  })
};

export const logout = async (refresh_token) => {
  return await fetch(`${process.env.REACT_APP_API_KEY}/logout/`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ refresh_token }),
  })
};
