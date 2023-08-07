import { createContext, useContext } from "react";

const PageContext = createContext();
const PageProvider = (props) => {
  const value = {};
  return <PageContext.Provider value={value} {...props}></PageContext.Provider>;
};

export { PageProvider, PageContext };
