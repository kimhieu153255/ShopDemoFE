import { createContext, useEffect, useRef, useState } from "react";
import axios from "axios";
const AuthContext = createContext();
function AuthProvider(props) {
  const [user, setUser] = useState();
  const [token, setToken] = useState();
  const [storeId, setStoreId] = useState();

  const loadStore = async () => {
    try {
      const res = await axios.get(
        `http://localhost:20474/store/api/get?userId=${user._id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (res.data) {
        setStoreId(res.data._id);
      }
    } catch (err) {
      console.log(err.response.data);
    }
  };

  const LoadStoreRef = useRef();
  LoadStoreRef.current = loadStore;

  useEffect(() => {
    LoadStoreRef.current();
  }, [user?._id]);

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
  };
  return <AuthContext.Provider value={value} {...props}></AuthContext.Provider>;
}

export { AuthProvider, AuthContext };
