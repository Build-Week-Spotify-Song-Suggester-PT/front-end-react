import axios from 'axios';

export const axiosWithAuth = () => {
    const token = localStorage.getItem('token');

    return axios.create({
        baseURL:
        // This is where our heroku link will go ,
        headers: {
            Authorization: token
        }
    });
};