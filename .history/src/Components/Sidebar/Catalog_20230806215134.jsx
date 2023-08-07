import { FaList } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import useSWR from "swr";
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

const Catalog = () => {
  const navigate = useNavigate();

  const { data, error, isLoading } = useSWR(
    url,
    async (url) =>
      await getAllCategories(url, Cookies.get("token"), Cookies.get("storeId"))
  );
  if (isLoading)
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="w-5 h-5 border-t-4 border-blue-500 border-solid rounded-full animate-spin"></div>
      </div>
    );
  if (error) return <div>Error Load Catalog</div>;

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
