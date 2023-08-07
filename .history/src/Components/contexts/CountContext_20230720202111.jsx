import { createContext, useState } from "react";
const CountContext = createContext();
// eslint-disable-next-line no-unused-vars
function CountProvider(props) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [count, setCount] = useState(1);
  return (
    <CountContext.Provider
      value={[count, setCount]}
      {...props}
    ></CountContext.Provider>
  );
}

export { CountProvider, CountContext };
