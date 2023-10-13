import axios from "axios";
import Cookies from "js-cookie";

const tokenAxiosInstance = axios.create({
  baseURL: "http://localhost:20474/",
  timeout: 1000,
  headers: {
    Authorization: `Bearer ${Cookies.get("token")}`,
  },
});

export default tokenAxiosInstance;
