import { createContext, useEffect, useState } from "react";
import lodash from "lodash";
const CountContext = createContext();

function CountProvider(props) {
  const [count, setCount] = useState(1);
  useEffect(() => {
    console.log(count);
  }, [count]);

  return (
    <CountContext.Provider
      value={[count, setCount]}
      {...props}
    ></CountContext.Provider>
  );
}

export { CountProvider, CountContext };
