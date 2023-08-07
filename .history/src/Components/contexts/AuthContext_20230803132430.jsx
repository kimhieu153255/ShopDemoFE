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
  }, [token, user]);

  useEffect(() => {
    setTimeout(() => {
      console.log("cleanUp");
      cleanUp();
    }, timeExpire);
  }, [timeExpire]);

  const cleanUp = (timeExpire) => {
    setTimeout(() => {
      setUser(null);
      setToken(null);
      setTimeExpire(null);
    }, timeExpire);
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
