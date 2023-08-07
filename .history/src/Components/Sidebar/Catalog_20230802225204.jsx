import { FaList } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { StoreContext } from "../Contexts/StoreContext";
import { useContext } from "react";

const list = [
  {
    id: 1,
    name: "Product 1",
  },
  {
    id: 2,
    name: "Product 2",
  },
  {
    id: 3,
    name: "Product 3",
  },
  {
    id: 4,
    name: "Product 4",
  },
];

const Catalog = () => {
  const { categories } = useContext(StoreContext);
  const navigate = useNavigate();
  return (
    <div className="flex flex-col h-fit bg-gray-100 p-3 rounded-md border min-w-max">
      <div className="flex gap-2 items-center font-semibold py-1">
        <FaList></FaList>
        <span>Catalog</span>
      </div>
      <hr className="my-2"></hr>
      <div className="flex flex-col">
        {categories.map((item, index) => (
          <div
            key={index}
            className="hover:text-green-500 py-1 px-3 font-semibold cursor-pointer"
          >
            {item.name}
          </div>
        ))}
      </div>
      <button
        onClick={() => {
          navigate("/shop/2");
        }}
      >
        store 2
      </button>
      <button
        onClick={() => {
          navigate("/shop/1");
        }}
      >
        store 1
      </button>
    </div>
  );
};

export default Catalog;
