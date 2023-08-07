import { createContext, useEffect, useState } from "react";
const CountContext = createContext();
function CountProvider(props) {
  const [count, setCount] = useState(1);
  useEffect(() => {
    console.log(count);
    import { useEffect, useState } from "react";

    export default function useDebounce(value: any, duration: number = 500) {
      const [debounceValue, setDebounceValue] = useState(value);
      useEffect(() => {
        const timer = setTimeout(() => {
          setDebounceValue(value);
        }, duration);
        return () => {
          clearTimeout(timer);
        };
      }, [value]);
      return debounceValue;
    }
    
  }, [count]);

  return (
    <CountContext.Provider
      value={[count, setCount]}
      {...props}
    ></CountContext.Provider>
  );
}

export { CountProvider, CountContext };
