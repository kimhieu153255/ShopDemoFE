import { createContext, useEffect, useState } from "react";
const AuthContext = createContext();
function AuthProvider(props) {
  const [user, setUser] = useState();
  const [token, setToken] = useState();
  const [timeExpire, setTimeExpire] = useState();

  useEffect(() => {
    console.log("user", user);
    console.log("token", token);
    console.log("timeExpire", timeExpire);
  }, [token, user, timeExpire]);

  useEffect(() => {
    setTimeout(() => {
      cleanUp();
    }, timeExpire);
  }, [user, token, timeExpire]);

  const cleanUp = () => {
    setUser(null);
    setToken(null);
    setTimeExpire(null);
  };

  const value = {
    user,
    setUser,
    token,
    setToken,
    timeExpire,
    setTimeExpire,
  };
  return <AuthContext.Provider value={value} {...props}></AuthContext.Provider>;
}

export { AuthProvider, AuthContext };
