import axios from 'axios';

// 9efa865ddeb3268f9d95218e2cc73400dfd3f553


// base url: https://api-ssl.bitly.com/v4/   shorten

export const key = '9efa865ddeb3268f9d95218e2cc73400dfd3f553';


const api = axios.create({
    baseURL: 'https://api-ssl.bitly.com/v4',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${key}`
    }
})

export default api;



