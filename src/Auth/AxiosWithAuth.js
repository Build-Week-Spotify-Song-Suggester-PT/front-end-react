import axios from 'axios';

export const axiosWithAuth = () => {
  const token = localStorage.getItem('token');

  return axios.create({
    baseURL: 'https://songsight-api.herokuapp.com',
    headers: {
      Authorization: token
    }
  });
};
