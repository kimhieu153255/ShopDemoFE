import { createContext, useEffect, useState } from "react";
const AuthContext = createContext();
function AuthProvider(props) {
  const [user, setUser] = useState();
  const [token, setToken] = useState();

  useEffect(() => {
    console.log("user", user);
    console.log("token", token);
    setTimeout(() => {
      setUser(null);
      setToken(null);
    }, new Date(user.expiresAt) - new Date());
  }, [token, user]);

  const value = {
    user,
    setUser,
    token,
    setToken,
  };
  return <AuthContext.Provider value={value} {...props}></AuthContext.Provider>;
}

export { AuthProvider, AuthContext };
