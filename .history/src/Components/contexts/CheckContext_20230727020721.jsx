const checkContext = createContext();

const CheckProvider = (props) => {
  const [checkOneStore, setCheckOneStore] = useState(
    new Array(ListCart.length).fill(false)
  );
  const [items, setItems] = useState(change2D(ListCart));
  return (
    <checkContext.Provider
      value={{
        checkOneStore,
        setCheckOneStore,
        items,
        setItems,
      }}
      {...props}
    ></checkContext.Provider>
  );
};

export { CheckProvider, CheckContext };
