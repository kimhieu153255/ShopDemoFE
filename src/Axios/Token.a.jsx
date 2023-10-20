import axios from "axios";
import Cookies from "js-cookie";

const tokenAxiosInstance = axios.create({
  baseURL: "http://52.41.36.82:20474/",
  headers: {
    Authorization: `Bearer ${Cookies.get("token")}`,
  },
});

export default tokenAxiosInstance;
