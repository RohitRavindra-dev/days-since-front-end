import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'http://10.0.2.2:8080/api',
  timeout: 1000,
});

axiosInstance.interceptors.request.use(
  config => {
    console.log(`Request: ${config.method?.toUpperCase()} ${config.url}`);
    // if (config.headers) {
    //   console.log('Request Headers:', config.headers);
    // }
    // if (config.params) {
    //   console.log('Request Params:', config.params);
    // }
    // if (config.data) {
    //   console.log('Request Data:', config.data);
    // }
    return config;
  },
  error => {
    console.error('Request Error:', error);
    return Promise.reject(error);
  },
);

// // Response Interceptor
// axiosInstance.interceptors.response.use(
//   response => {
//     console.log(`Response from ${response.config.url}:`, response);
//     return response;
//   },
//   error => {
//     console.error('Response Error:', error);
//     return Promise.reject(error);
//   },
// );
