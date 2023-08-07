import { createContext, useState } from "react";
const AuthContext = createContext();
function AuthProvider(props) {
  const [user, setUser] = useState({});
  const [token, setToken] = useState("");

  const value = {
    user,
    setUser,
    token,
    setToken,
  };
  return <AuthContext.Provider value={value} {...props}></AuthContext.Provider>;
}

export { AuthProvider, AuthContext };
