import { createContext, useState } from "react";
const countContext = createContext();
// eslint-disable-next-line no-unused-vars
function CountProvider(props) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [count, setCount] = useState(1);
  return (
    <countContext.Provider
      value={[count, setCount]}
      {...props}
    ></countContext.Provider>
  );
}

export { CountProvider };
