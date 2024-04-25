import axios from 'axios';

axios.defaults.baseURL = 'https://661d71f398427bbbef01d9ae.mockapi.io/';

export const getAdverts = async (page = 1) => {
  const { data } = await axios.get(`adverts?page=${page}&limit=4`);
  return data;
};

export const getAllAdverts = async () => {
  const { data } = await axios.get('adverts');
  return data;
};

export const getOneAdvert = async id => {
  const { data } = await axios.get(`adverts/${id}`);
  return data;
};
