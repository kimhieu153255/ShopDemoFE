import { createContext, useState } from "react";
const CountContext = createContext();
function CountProvider(props) {
  const [count, setCount] = useState(props.quantity);
  return (
    <CountContext.Provider
      value={[count, setCount]}
      {...props}
    ></CountContext.Provider>
  );
}

export { CountProvider, CountContext };
