import { createContext } from "react";

const StoreContext = createContext();
const StoreProvider = (props) => {
  const [products, setProducts] = useState([]);
  const [stores, setStores] = useState([]);

  const value = {};
  return (
    <StoreContext.Provider value={value} {...props}></StoreContext.Provider>
  );
};

export { StoreProvider, StoreContext };
