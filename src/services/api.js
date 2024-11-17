import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8180/api',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
});

// Interceptor para tratamento de erros
api.interceptors.response.use(
  response => response,
  error => {
    if (error.response) {
      // Tratamento de erros da API
      console.error('API Error:', error.response.data);
    } else {
      console.error('API Error:', error.message);
    }

    return Promise.reject(error);
  }
);

export default api;
