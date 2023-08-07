import { createContext, useContext } from "react";

const PageContext = createContext();
const PageProvider = (props) => {
  const value = {};
  return <PageContext.Provider value={value} {...props}></PageContext.Provider>;
};

function usePage () => {
  const context = useContext(PageContext);
  if (context === undefined) {
    throw new Error("usePage must be used within a PageProvider");
  }
  return context;
};

export { PageProvider, usePage };
