import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
});

axiosInstance.interceptors.request.use(
  (config) => {
    console.log(`config:`, config);

    // if (token) {
    //   config.headers.Authorization = `Bearer ${token}`;
    // }

    return config;
  },
  (error) => {
    console.log(`request error:`, error);
    return Promise.reject(error);
  },
);

axiosInstance.interceptors.response.use(
  (response) => {
    return Promise.resolve(response);
  },
  async (error) => {
    console.log(`response error:`, error);
    return Promise.reject(error);
  },
);

export default axiosInstance;
