import { useEffect, useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
// import { CountContext } from "../Contexts/CountContext";

// eslint-disable-next-line react/prop-types
const ButtonCart = ({ number }) => {
  // eslint-disable-next-line no-undef
  // const [count, setCount] = useContext(CountContext);
  const [count, setCount] = useState(number);
  console.log(count, setCount);
  useEffect(() => {
    setCount(count);
  }, [count]);
  return (
    <div className="flex w-32">
      <button
        className=" p-2 text-md text-center items-center justify-center border bg-gray-100 rounded-l-md hover:bg-green-500 hover:text-white"
        onClick={() =>
          setCount((count) => {
            if (count > 1) return count - 1;
            return count;
          })
        }
      >
        <FaMinus />
      </button>
      <input
        type="text"
        className="w-16 text-center border-t border-b text-md font-semibold"
        onChange={(e) => setCount(e.target.value)}
        value={count}
      ></input>
      <button
        className="px-3 py-2 bg-gray-100 border rounded-r-md text-md text-center items-center justify-center hover:bg-green-500 hover:text-white"
        onClick={() => setCount((count) => count + 1)}
      >
        <FaPlus />
      </button>
    </div>
  );
};

export default ButtonCart;
