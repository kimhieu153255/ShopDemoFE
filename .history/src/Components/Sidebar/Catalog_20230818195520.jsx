import { FaList } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ShopContext } from "../Contexts/ShopContext";
import axios from "axios";
import { useSWRConfig } from "swr";
import Cookies from "js-cookie";

const Catalog = () => {
  const storeId = Cookies.get("storeId");
  const token = Cookies.get("token");
  const navigate = useNavigate();
  const { setPage } = useContext(ShopContext);
  const urlCategory = `http://localhost:20474/store/api/getAllCategories`;
  const getAllCategories = async (token, storeId) => {
    const response = await axios.get(urlCategory, {
      params: {
        storeId: storeId,
      },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  };

  const { data, error, isLoading } = useSWRConfig(
    urlCategory,
    async (urlCategory) => await getAllCategories(urlCategory, token, storeId)
  );

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  const categories = data?.data?.categories || [];

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
              setPage(1);
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
