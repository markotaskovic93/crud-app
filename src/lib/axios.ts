import axios, { AxiosError, AxiosResponse } from "axios";

const API_URL: string = import.meta.env.VITE_BASE_API_URL;

let ongoingRequests = new Set<string>();

const axiosInstance = axios.create({
  baseURL: API_URL,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const requestIdentifier = JSON.stringify(config);

    if (ongoingRequests.has(requestIdentifier)) {
      return Promise.reject(new Error('Blocked duplicated req'));
    }

    config.headers['Content-Type'] = 'application/json';

    ongoingRequests.add(requestIdentifier);

    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);
axiosInstance.interceptors.response.use(
  (response: AxiosResponse<any>) => {
    const requestIdentifier = JSON.stringify(response.config);
    ongoingRequests.delete(requestIdentifier);
    return response.data;
  },
  (error: AxiosError) => {
    if (!error?.config) {
      return Promise.reject(error);
    }

    const requestIdentifier = JSON.stringify(error.config);
    ongoingRequests.delete(requestIdentifier);
    return Promise.reject(error);
  }
);

export default axiosInstance;
