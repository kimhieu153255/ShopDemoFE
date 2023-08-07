import { FaMinus, FaPlus } from "react-icons/fa";

// eslint-disable-next-line react/prop-types
const ButtonCart = ({ number }) => {
  return (
    <div className="flex w-32">
      <button className=" p-2 text-md text-center items-center justify-center">
        <FaMinus />
      </button>
      <input type="text" defaultValue={number} />
      <button className=" px-3 py-2 text-md text-center items-center justify-center">
        <FaPlus />
      </button>
    </div>
  );
};

export default ButtonCart;
