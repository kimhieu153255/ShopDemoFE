import { createContext } from "react";

const StoreContext = createContext();
const StoreProvider = (props) => {
  const value = {};
  return (
    <StoreContext.Provider value={rest} {...props}>
      {children}
    </StoreContext.Provider>
  );
};
