import { createContext, useEffect, useState } from "react";
import { fetcher } from "../../config";
import useSWR from "swr";
const AuthContext = createContext();
function AuthProvider(props) {
  const [user, setUser] = useState();
  const [token, setToken] = useState();
  const [storeId, setStoreId] = useState();

  const loadStore = async () => {
    try {
      const res = await axios.get(
        `http://localhost:20474/store/api/get?userId=${user._id}`
      );
      if (res.data) {
        // setStoreId(res.data._id);
        console.log(res.data);
      }
    } catch (err) {
      console.log(err.response.data);
    }
  };

  useEffect(() => {}, [user]);

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
  };
  return <AuthContext.Provider value={value} {...props}></AuthContext.Provider>;
}

export { AuthProvider, AuthContext };
