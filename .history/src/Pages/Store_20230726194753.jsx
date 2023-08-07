// import React from "react";

import { FaCommentAlt, FaPlus } from "react-icons/fa";
import { CountProvider } from "../Components/Contexts/CountContext";
import SortBar from "../Components/Layouts/SortBar";
import Catalog from "../Components/Sidebar/Catalog";

const Store = () => {
  return (
    <div>
      <div className="flex m-4 gap-10 bg-gray-100 rounded-md min-w-max shadow-md">
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
        <div className="flex justify-around gap-20 p-4 font-semibold h-full w-full">
          <div>
            <div>Products: {}</div>
            <div>Following: {}</div>
          </div>
          <div>
            <div>Followers: {}</div>
            <div>Rating: {}</div>
            <div>Joined: {}</div>
          </div>
        </div>
      </div>
      <div className="flex gap-5 mx-4">
        <Catalog></Catalog>
        <CountProvider>
          <SortBar></SortBar>
        </CountProvider>
      </div>
    </div>
  );
};

export default Store;
