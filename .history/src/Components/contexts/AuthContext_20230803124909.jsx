import { createContext, useState } from "react";
const AuthContext = createContext();
function AuthProvider(props) {
  // eslint-disable-next-line react/prop-types

  return (
    <AuthContext.Provider
      value={[count, setCount]}
      {...props}
    ></AuthContext.Provider>
  );
}

export { AuthProvider, AuthContext };
