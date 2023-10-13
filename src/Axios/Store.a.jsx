import axios from "axios";
import Cookies from "js-cookie";

const storeAxiosInstance = axios.create({
  baseURL: "http://localhost:20474/store/api/",
  headers: {
    Authorization: `Bearer ${Cookies.get("token")}`,
  },
});

export default storeAxiosInstance;
