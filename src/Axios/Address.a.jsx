import axios from "axios";
import Cookies from "js-cookie";

const addressAxiosInstance = axios.create({
  baseURL: "http://52.41.36.82:20474/address/api/",
  timeout: 1000,
  headers: {
    Authorization: `Bearer ${Cookies.get("token")}`,
  },
});

export default addressAxiosInstance;
