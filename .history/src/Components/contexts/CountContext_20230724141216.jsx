import { createContext, useEffect, useState } from "react";
const CountContext = createContext();
function CountProvider(props) {
  const [count, setCount] = useState(1);
  useEffect(() => {
    setTimeout(() => {
      console.log(count);
    }, 1000);
  });

  return (
    <CountContext.Provider
      value={[count, setCount]}
      {...props}
    ></CountContext.Provider>
  );
}

export { CountProvider, CountContext };
