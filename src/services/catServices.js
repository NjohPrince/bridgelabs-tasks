export const createCat = async (name, description) => {
  return await fetch(`${process.env.REACT_APP_API_KEY}/category/`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, description }),
  });
};

export const listCat = async () => {
  return await fetch(`${process.env.REACT_APP_API_KEY}/category/`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
};

export const updateCat = async (id, category) => {
  return await fetch(`${process.env.REACT_APP_API_KEY}/category/${id}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ category }),
  });
};

export const deleteCat = async (id) => {
  return await fetch(`${process.env.REACT_APP_API_KEY}/category/${id}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
};
