import { createContext, useState } from "react";

const PageContext = createContext();
const PageProvider = (props) => {
  // eslint-disable-next-line react/prop-types
  const [page, setPage] = useState(props.page ? props.page : 1);
  const [total, setTotal] = useState(props.total ? props.total : 1);
  const value = {};
  return <PageContext.Provider value={value} {...props}></PageContext.Provider>;
};

export { PageProvider, PageContext };
