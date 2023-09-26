import {
  FaCommentAlt,
  FaPlus,
  FaShoppingBag,
  FaStar,
  FaUserCheck,
  FaUserPlus,
  FaUsers,
} from "react-icons/fa";
import Catalog from "../Components/Sidebar/Catalog";
import CardList from "../Components/Card/CardList";
import ButtonPage from "../Components/Button/ButtonPage";
import MainSortBar from "../Components/Layouts/MainSortBar";
import Cookies from "js-cookie";
import { useState } from "react";

const Store = () => {
  const user = JSON.parse(Cookies.get("user")?.toString() || null);
  const [url, setUrl] = useState("");

  console.log("user", user);

  return (
    <div className="min-w-max w-full">
      {/* Store */}
      <div className="flex flex-col">
        <div className="flex mx-4 mb-2 gap-5 bg-gray-100 rounded-md min-w-max shadow-md">
          <img
            src="/logoShop.avif"
            alt="bg"
            className="brightness-50 opacity-70 inline-block w-[350px] h-[150px] object-cover rounded-md absolute"
          />
          <div className=" flex flex-col p-3 w-[350px] h-[150px] text-white font-semibold z-10 shadow-md">
            <div className="flex gap-5 justify-start items-start m-1 w-[350px]">
              <img
                src="/avatar.avif"
                alt="logoShop"
                className="w-20 h-20 object-cover rounded-full ring-gray-300 ring-4 ring-opacity-50"
              />
              <div className="inline-block mt-4">
                <span className="text-xl ">GUGOSTART</span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2 mt-1 min-w-max">
              <span className="px-3 py-1 border rounded-md flex justify-center items-center gap-2 cursor-pointer hover:bg-green-500">
                <FaPlus></FaPlus>
                Follow
              </span>
              <span className="px-3 py-1 border rounded-md flex justify-center items-center gap-2 cursor-pointer hover:bg-green-500">
                <FaCommentAlt></FaCommentAlt>
                Chat
              </span>
            </div>
          </div>
          <div className="flex justify-around gap-10 text-xl items-center p-4 font-semibold h-full w-full mr-40">
            <div>
              <div>
                <FaShoppingBag className="inline-block mr-2"></FaShoppingBag>
                {/* Products: {products.length} */}
              </div>
              <div>
                <FaUserPlus className="inline-block mr-2"></FaUserPlus>
                Following:
                {}
              </div>
            </div>
            <div>
              <div>
                <FaUsers className="inline-block mr-2"></FaUsers>Followers: {}
              </div>
              <div>
                <FaStar className="inline-block mr-2"></FaStar>Rating: {}
              </div>
              <div>
                <FaUserCheck className="inline-block mr-2"></FaUserCheck>
                Joined: {}
              </div>
            </div>
          </div>
        </div>
        {user?.role && (
          <div className="flex gap-3 justify-center items-center py-1.5 bg-gray-200 mb-2 mx-4 rounded-md">
            <button
              className="py-1 px-3 border border-gray-100 bg-gray-100 rounded-md font-semibold hover:bg-green-500 hover:text-white hover:border-green-500"
              onClick={() => {
                window.location.href = `/shop/add-product`;
              }}
            >
              Add
            </button>
          </div>
        )}
      </div>
      <div className="flex gap-5 mx-4">
        <Catalog></Catalog>
        <div className="flex flex-col w-full">
          <MainSortBar ></MainSortBar>
          <CardList></CardList>
          <div className="mx-auto mb-2">
            <ButtonPage></ButtonPage>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Store;
