import { createContext, useState } from "react";
const AuthContext = createContext();
function AuthProvider(props) {
  const value = {};
  return <AuthContext.Provider value={value} {...props}></AuthContext.Provider>;
}

export { AuthProvider, AuthContext };
