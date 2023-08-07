import { FaList } from "react-icons/fa";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import useSWR from "swr";
import { AuthContext } from "../Contexts/AuthContext";
import axios from "axios";
import Cookies from "js-cookie";

const url = `http://localhost:20474/store/api/getAllCategories`;

const getAllCategories = async (url, token, storeId) => {
  const response = await axios.get(url, {
    params: {
      storeId: storeId,
    },
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

// eslint-disable-next-line react/prop-types
const Catalog = () => {
  const navigate = useNavigate();
  console.log(storeId);

  const { data, error, isLoading } = useSWR(
    url,
    async (url) =>
      await getAllCategories(url, Cookies.get("token"), Cookies.get("storeId"))
  );

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  const categories = data.data.categories;

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
