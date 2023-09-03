import axios from 'axios';

const api = axios.create({
  baseURL: 'https://p10backend-eugreg-dev.fl0.io/api/',
});

export default api;