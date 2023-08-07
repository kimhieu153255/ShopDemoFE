const CheckContext = createContext();

const CheckProvider = (props) => {
  const [checkOneStore, setCheckOneStore] = useState(
    new Array(ListCart.length).fill(false)
  );
  const [items, setItems] = useState(change2D(ListCart));
  return (
    <CheckContext.Provider
      value={{
        checkOneStore,
        setCheckOneStore,
        items,
        setItems,
      }}
      {...props}
    ></CheckContext.Provider>
  );
};

export { CheckProvider, CheckContext };
