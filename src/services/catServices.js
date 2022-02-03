export const createCat = async (name, description, image) => {
  const data = new FormData();
  data.append("name", name);
  data.append("description", description);
  data.append("image", image);
  return await fetch(`${process.env.REACT_APP_API_KEY}/category/create`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "multipart/form-data",
    },
    body: data,
  });
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
