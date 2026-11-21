import axios from 'axios';

// Get Base URL: In production (Netlify), uses VITE_API_URL pointing to Render.
// In development, falls back to local proxy '/api'.
const getBaseUrl = () => {
  const envUrl = import.meta.env.VITE_API_URL;
  if (envUrl) {
    const cleaned = envUrl.trim().replace(/\/+$/, '');
    return cleaned.endsWith('/api') ? cleaned : `${cleaned}/api`;
  }
  return '/api';
};

const api = axios.create({
  baseURL: getBaseUrl(),
  headers: {
    'Content-Type': 'application/json'
  }
});

// Response interceptor for error handling
api.interceptors.response.use(
  (response) => response,
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
