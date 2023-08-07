import { createContext, useState } from "react";
const AuthContext = createContext();
function AuthProvider(props) {
  // eslint-disable-next-line react/prop-types
  const [count, setCount] = useState(props.quantity ? props.quantity : 1);

  return (
    <AuthContext.Provider
      value={[count, setCount]}
      {...props}
    ></AuthContext.Provider>
  );
}

export { AuthProvider, AuthContext };
