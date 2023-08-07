import { createContext } from "react";

const StoreContext = createContext();
const StoreProvider = (props) => {
  const value = {};
  return (
    <StoreContext.Provider value={value} {...props}>
      {children}
    </StoreContext.Provider>
  );
};
