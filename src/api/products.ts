import axios from 'axios';

const API_URL = 'https://fakestoreapi.com/products';

export const getProducts = async () => {
  const res = await axios.get(API_URL);
  return res.data;
};

export const getProductById = async (id: number) => {
  const res = await axios.get(`${API_URL}/${id}`);
  return res.data;
};
