import axios from 'axios';
//const baseUrl= 'http://127.0.0.1:8000'
//const baseUrl = 'https://love-analysis-web-app-api.onrender.com'; 
const baseUrl = 'https://rarksz.pythonanywhere.com/'
export const getData = async () => {
    // Get petition from the URL and await the response
    const response = await axios.get(baseUrl);
    // Return the response data
    return response;
};