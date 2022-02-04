import axios from 'axios';

const apiInstance = axios.create({
  baseURL: 'https://api.github.com',
});

const setInterceptorsToApiInstance = api => {
  api.interceptors.request.use(
    config => {
      const data = JSON.parse(localStorage.getItem('accessToken'));
      if (data) {
        config.headers['Authorization'] = `Bearer ${data.accessToken}`;
      }
      config.headers['Content-Type'] = 'application/json';
      return config;
    },
    error => {
      Promise.reject(error);
    },
  );

  api.interceptors.response.use(
    response => {
      if (response.data.accessToken) {
        const token = JSON.stringify({
          accessToken: response.data.accessToken,
        });
        localStorage.setItem('accessToken', token);
      }
      if (response.data.refreshToken) {
        const token = JSON.stringify({
          refreshToken: response.data.refreshToken,
        });
        localStorage.setItem('refreshToken', token);
      }
      return response;
    },
    error => {
      if (error.response.status === 401) {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
      }
      return Promise.reject(error);
    },
  );
};

setInterceptorsToApiInstance(apiInstance);

export default apiInstance;
