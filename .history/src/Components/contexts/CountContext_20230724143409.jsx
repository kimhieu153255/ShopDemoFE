import { createContext, useEffect, useState } from "react";
import lodash from "lodash";
const CountContext = createContext();
function CountProvider(props) {
  const [count, setCount] = useState(1);
  useEffect(() => {
    lodash.debounce(() => {
      console.log(count);
    }, 1000)();
  }, [count]);

  return (
    <CountContext.Provider
      value={[count, setCount]}
      {...props}
    ></CountContext.Provider>
  );
}

export { CountProvider, CountContext };
