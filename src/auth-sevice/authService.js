export const login = async (email, password) => {
  await fetch(`${process.env.REACT_APP_API_KEY}/login`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  })
    .then((response) => {
      return response.json();
    })
    .catch((error) => {
      console.log(error.response);
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
  await fetch(`${process.env.REACT_APP_API_KEY}/register`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, first_name, last_name, password, avatar }),
  })
    .then((response) => {
      return response.json();
    })
    .catch((error) => {
      console.log(error.response);
    });
};

export const logout = async (refresh_token) => {
  await fetch(`${process.env.REACT_APP_API_KEY}/logout`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ refresh_token }),
  })
    .then((response) => {
      return response.json();
    })
    .catch((error) => {
      console.log(error.response);
    });
};
