import axios from 'axios';

export default axios.create({

  baseURL: 'https://btm-backend.onrender.com',
  timeout: 60000,
  headers: { 'Content-Type': 'application/json' },
});
