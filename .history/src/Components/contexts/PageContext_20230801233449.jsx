import { createContext } from "react";

const PageContext = createContext();
const StoreProvider = (props) => {
  const value = {};
  return <PageContext.Provider value={value} {...props}></PageContext.Provider>;
};

export { StoreProvider, PageContext };
