const BASE_URL = "http://localhost:5000/api";

const getToken = () => localStorage.getItem("token");

export const fetchProducts = async () => {
  const res = await fetch(`${BASE_URL}/products`);
  return res.json();
};

export const addToCart = async (productId, quantity) => {
  const res = await fetch(`${BASE_URL}/cart`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getToken()}`
    },
    body: JSON.stringify({ productId, quantity })
  });
  return res.json();
};

export const getCart = async () => {
  const res = await fetch(`${BASE_URL}/cart`, {
    headers: {
      Authorization: `Bearer ${getToken()}`
    }
  });
  return res.json();
};

export const updateCart = async (id, quantity) => {
  const res = await fetch(`${BASE_URL}/cart/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getToken()}`
    },
    body: JSON.stringify({ quantity })
  });
  return res.json();
};

export const deleteCartItem = async (id) => {
  const res = await fetch(`${BASE_URL}/cart/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${getToken()}`
    }
  });
  return res.json();
};
