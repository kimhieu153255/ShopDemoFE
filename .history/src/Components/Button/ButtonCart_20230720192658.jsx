import { FaMinus, FaPlus } from "react-icons/fa";

// eslint-disable-next-line react/prop-types
const ButtonCart = ({ number }) => {
  const [count, setCount] = [number];
  return (
    <div className="flex w-32">
      <button className=" p-2 text-md text-center items-center justify-center border bg-gray-100 rounded-l-md" onClick={()=>setCount((count)=>(count-1);)}>
        <FaMinus />
      </button>
      <input
        type="text"
        className="w-16"
        defaultValue={count}
        onChange={(e) => setCount(e.target.value)}
      />
      <button
        className=" px-3 py-2 bg-gray-100 border rounded-r-md text-md text-center items-center justify-center"
        onClick={() => setCount((count) => count + 1)}
      >
        <FaPlus />
      </button>
    </div>
  );
};

export default ButtonCart;
