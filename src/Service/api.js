import axios from 'axios';

export default axios.create({
  baseURL: 'https://btm-backend.onrender.com/',
  timeout: 20000,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
  },
});
