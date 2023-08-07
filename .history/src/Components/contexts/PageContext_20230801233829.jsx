import { createContext } from "react";

const PageContext = createContext();
const PageProvider = (props) => {
  const [page, setPage] = useState(props.page ? props.page : 1);
  const value = {};
  return <PageContext.Provider value={value} {...props}></PageContext.Provider>;
};

export { PageProvider, PageContext };
