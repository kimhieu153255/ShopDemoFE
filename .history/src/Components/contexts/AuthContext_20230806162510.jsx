import { createContext, useRef, useState } from "react";
import axios from "axios";
// import Cookies from "js-cookie";
const AuthContext = createContext();
function AuthProvider(props) {
  const [user, setUser] = useState();
  const [token, setToken] = useState();
  const [storeId, setStoreId] = useState();

  const loadStoreId = async (userId, token) => {
    try {
      if (userId) return;
      const res = await axios.get(`http://localhost:20474/store/api/get`, {
        params: {
          userId: userId,
        },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (res.data) {
        setStoreId(res.data.data._id);
      }
    } catch (err) {
      console.log(err);
      console.log(err.response);
    }
  };

  const LoadStoreIdRef = useRef();
  LoadStoreIdRef.current = loadStoreId;

  const cleanUp = (timeExpire) => {
    setTimeout(() => {
      setUser(null);
      setToken(null);
    }, timeExpire);
  };

  const value = {
    user,
    setUser,
    token,
    setToken,
    cleanUp,
    storeId,
    LoadStoreIdRef,
  };
  return <AuthContext.Provider value={value} {...props}></AuthContext.Provider>;
}

export { AuthProvider, AuthContext };
