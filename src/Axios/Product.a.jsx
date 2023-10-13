import axios from "axios";
import Cookies from "js-cookie";

const productAxiosInstance = axios.create({
  baseURL: "http://localhost:3000",
  timeout: 1000,
  headers: {
    Authorization: `Bearer ${Cookies.get("token")}`,
  },
});

export default productAxiosInstance;
