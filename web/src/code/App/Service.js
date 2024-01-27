import axios from 'axios';
//const baseUrl= 'http://127.0.0.1:8000'
const baseUrl = 'https://love-analysis-web-app-api.onrender.com'; 

export const getData = () => {
    // Get petition from the URL and return the promise
    return axios.get(baseUrl); 
};