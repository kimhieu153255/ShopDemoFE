import { FaList } from "react-icons/fa";
import { StoreContext } from "../Contexts/StoreContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { fetcher } from "../../config";
import useSWR from "swr";

// eslint-disable-next-line react/prop-types
const Catalog = () => {
  const { categories } = useContext(StoreContext);
  const navigate = useNavigate();

  const { data, errror, isLoading } = useSWR(
    "http://localhost:20474store/api/getAllCategories",
    fetcher
  );

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
              navigate(`/shop?category=${item}`);
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
