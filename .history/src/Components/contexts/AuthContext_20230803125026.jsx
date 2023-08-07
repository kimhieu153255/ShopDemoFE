import { createContext, useEffect, useState } from "react";
const AuthContext = createContext();
function AuthProvider(props) {
  const [user, setUser] = useState({});

  useEffect(() => {
    // setUser(JSON.parse(localStorage.getItem("user") || "{}"));
  }, []);

  const value = {
    user,
    setUser,
  };
  return <AuthContext.Provider value={value} {...props}></AuthContext.Provider>;
}

export { AuthProvider, AuthContext };
