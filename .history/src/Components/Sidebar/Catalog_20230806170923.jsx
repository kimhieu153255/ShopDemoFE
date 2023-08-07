import { FaList } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import { StoreContext } from "../Contexts/StoreContext";
import { useContext } from "react";

// eslint-disable-next-line react/prop-types
const Catalog = () => {
  const { categories } = useContext(StoreContext);

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
            onClick={() => {
              window.location.href = `/shop?category=${item}`;
            }}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Catalog;
