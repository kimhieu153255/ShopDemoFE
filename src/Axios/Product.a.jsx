import axios from "axios";
import Cookies from "js-cookie";

const productAxiosInstance = axios.create({
  baseURL: "http://52.41.36.82:3000",
  headers: {
    Authorization: `Bearer ${Cookies.get("token")}`,
  },
});

export default productAxiosInstance;
