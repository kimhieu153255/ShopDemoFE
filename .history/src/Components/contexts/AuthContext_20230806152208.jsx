import { createContext, useState } from "react";
const AuthContext = createContext();
function AuthProvider(props) {
  const [user, setUser] = useState();
  const [token, setToken] = useState();
  const [storeId, setStoreId] = useState();

  const LoadStoreId = () => {
    //get storeByUserId (userId in query)
    const { data, err, loading } = useSWRConfig(
      "http://localhost:3001/store/api/getStoreByUserId",
      fetcher
    );
    if (data) setStoreId(data.storeId);

  };

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
