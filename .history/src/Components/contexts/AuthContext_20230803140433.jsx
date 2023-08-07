import axios from "axios";
import { createContext, useEffect, useState } from "react";
const AuthContext = createContext();
function AuthProvider(props) {
  const [user, setUser] = useState();
  const [token, setToken] = useState();

  useEffect(() => {
    console.log("user", user);
    console.log("token", token);
  }, [token, user]);

  const cleanUp = (timeExpire) => {
    setTimeout(() => {
      setUser(null);
      setToken(null);
    }, timeExpire);
  };

  const API = () => {
    const api = axios.create({
      baseURL: "http://localhost:20474", // Đặt baseURL tùy thuộc vào URL của API của bạn
    });

    // Interceptor để thêm token vào request
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
    return api;
  };

  const value = {
    user,
    setUser,
    token,
    setToken,
    cleanUp,
    API,
  };
  return <AuthContext.Provider value={value} {...props}></AuthContext.Provider>;
}

export { AuthProvider, AuthContext };
