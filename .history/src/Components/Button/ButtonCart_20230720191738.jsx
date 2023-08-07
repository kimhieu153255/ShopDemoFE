import { createContext } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

const countContext = createContext();
const countProvider = (props)=>{
  
}



// eslint-disable-next-line react/prop-types
const ButtonCart = ({ number }) => {
  return (
    <div className="flex w-32">
      <button className=" p-2 text-md text-center items-center justify-center border bg-gray-100 rounded-l-md">
        <FaMinus />
      </button>
      <input
        type="text"
        className="w-16"
        defaultValue={number}
        onChange={(e) => {
          number = e.target.value;
        }}
      />
      <button
        className=" px-3 py-2 bg-gray-100 border rounded-r-md text-md text-center items-center justify-center"
        onClick={() => {
          number++;
        }}
      >
        <FaPlus />
      </button>
    </div>
  );
};

export default ButtonCart;
