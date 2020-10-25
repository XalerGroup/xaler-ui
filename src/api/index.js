import axios from 'axios';

const http = axios.create({
  baseURL: 'http://172.18.0.3:5000/api',
});

export default http;
