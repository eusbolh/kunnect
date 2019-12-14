import axios from 'axios';

export default {
  setupInterceptors: (store, history) => {
    axios.interceptors.response.use(
      response => response,
      (error) => {
        if (error && error.response && error.response.status) {
          switch (error.response.status) {
            case 401:
              if (localStorage.getItem('token')) {
                console.warn('Your session is timeouted.');
                localStorage.clear();
                history.push('/login');
              }
              break;
            default:
              break;
          }
        }
        return Promise.reject(error);
      },
    );
    axios.interceptors.request.use(
      (config) => {
        config.withCredentials = true;
        return config;
      },
      (error) => {
        return Promise.reject(error);
      },
    );
  },
};
