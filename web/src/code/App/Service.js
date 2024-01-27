import axios from 'axios';
const baseUrl = 'https://love-analysis-web-app-api.onrender.com'; // La URL de tu API

export const getData = () => {
    // Get petition from the URL and return the promise
    return axios.get(baseUrl); 
};