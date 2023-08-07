// import React from "react";

import {
  FaCommentAlt,
  FaPlus,
  FaShoppingBag,
  FaStar,
  FaUserCheck,
  FaUserPlus,
  FaUsers,
} from "react-icons/fa";
import SortBar from "../Components/Layouts/SortBar";
import Catalog from "../Components/Sidebar/Catalog";
import CardList from "../Components/Card/CardList";
import ButtonPage from "../Components/Button/ButtonPage";
import { PageProvider } from "../Components/Contexts/PageContext";
import { StoreContext } from "../Components/Contexts/StoreContext";
import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
// import ButtonCart from "../Components/Button/ButtonCart";

const Store = () => {
  const { products, setStoreId } = useContext(StoreContext);
  const id = useParams().id;
  useEffect(() => {
    console.log("id", id);
    console.log("products", products);
    setStoreId(id);
  }, [id]);
  return (
    <div className="min-w-max w-full">
      <div className="flex m-4 gap-5 bg-gray-100 rounded-md min-w-max shadow-md">
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
              Products: {}
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
              <FaUserCheck className="inline-block mr-2"></FaUserCheck>Joined:{" "}
              {}
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-5 mx-4">
        <Catalog></Catalog>
        <div className="flex flex-col w-full">
          <PageProvider page={1} total={3}>
            <SortBar></SortBar>
            <CardList listCard={products}></CardList>
            <div className="mx-auto mb-2">
              <ButtonPage></ButtonPage>
              {/* <ButtonCart></ButtonCart> */}
            </div>
          </PageProvider>
        </div>
      </div>
    </div>
  );
};

export default Store;
