import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:20474", // Đặt baseURL tùy thuộc vào URL của API của bạn
});

api.interceptors.request.use(
  (config) => {
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
