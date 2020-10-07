import axios from 'axios';
export const API = 'http://8000/api/rest-countries-v1';

export const dataFetch = async query => {
  const url = `${API}/?page=1&limit=10&country=${query}`;

  return await axios.get(url);
};

dataFetch('ind');