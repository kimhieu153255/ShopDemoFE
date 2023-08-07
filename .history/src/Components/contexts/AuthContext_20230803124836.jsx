import { createContext, useState } from "react";
const AuthContext = createContext();
function CountProvider(props) {
  // eslint-disable-next-line react/prop-types
  const [count, setCount] = useState(props.quantity ? props.quantity : 1);

  return (
    <AuthContext.Provider
      value={[count, setCount]}
      {...props}
    ></AuthContext.Provider>
  );
}

export { CountProvider, AuthContext };
