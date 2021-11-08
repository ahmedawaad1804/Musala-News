import axios from 'axios';
import configs from './config';

const axiosInstance = axios.create({
  baseURL: configs.DATA_CONFIG.domain,
});

axiosInstance.interceptors.request.use(
  async config => {
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

export default axiosInstance;
