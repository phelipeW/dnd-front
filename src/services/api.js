import axios from "axios";

console.log("ENV", process.env.REACT_APP_API);

const api = axios.create({
  baseURL: process.env.REACT_APP_API || "localhost:4516",
});

axios.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default api;
