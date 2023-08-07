import { createContext, useEffect, useState } from "react";
import { fetcher } from "../../config";
import useSWR from "swr";
const AuthContext = createContext();
function AuthProvider(props) {
  const [user, setUser] = useState();
  const [token, setToken] = useState();
  const [storeId, setStoreId] = useState();

  const LoadStoreId = () => {
    //get storeByUserId (userId in query)
    const { data, err, loading } = useSWR(
      `http://localhost:3001/store/api/getStoreByUserId?userId=${user._id}`,
      fetcher
    );
    if (data) setStoreId(data.store._id);
  };

  useEffect(() => {
    if (user) LoadStoreId();
  }, []);

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
