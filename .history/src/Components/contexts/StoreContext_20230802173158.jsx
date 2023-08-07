import { createContext, useEffect, useState } from "react";

const StoreContext = createContext();
const StoreProvider = (props) => {
  const [products, setProducts] = useState([]);
  const [stores, setStores] = useState([]);
  const [categories, setCategories] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(1);
  useEffect(() => {


  const value = {};
  return (
    <StoreContext.Provider value={value} {...props}></StoreContext.Provider>
  );
};

export { StoreProvider, StoreContext };
