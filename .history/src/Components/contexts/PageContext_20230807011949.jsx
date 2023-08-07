import { createContext, useEffect, useState } from "react";

const PageContext = createContext();
const PageProvider = (props) => {
  // eslint-disable-next-line react/prop-types
  const [page, setPage] = useState(props.page ? props.page : 1);
  // eslint-disable-next-line react/prop-types
  const [total, setTotal] = useState(props.total ? props.total : 1);
  // eslint-disable-next-line react/prop-types
  const [totalPage, setTotalPage] = useState(props.total ? props.total : 1);

  const SetTotalPage = (totalPage) => {
    setTotal(totalPage);
  };

  useEffect(() => {
    setTotal(totalPage);
  }, [totalPage]);

  const value = {
    page,
    setPage,
    total,
    setTotal,
    SetTotalPage,
    setTotalPage,
  };
  return <PageContext.Provider value={value} {...props}></PageContext.Provider>;
};

export { PageProvider, PageContext };
