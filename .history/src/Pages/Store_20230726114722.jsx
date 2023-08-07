// import React from "react";

import { FaCommentAlt, FaPlus } from "react-icons/fa";
import { CountProvider } from "../Components/Contexts/CountContext";
import SortBar from "../Components/Layouts/SortBar";

const Store = () => {
  return (
    <div>
      <div className="flex m-4 gap-10 bg-gray-100 rounded-md">
        <img
          src="/logoShop.avif"
          alt="bg"
          className="brightness-50 opacity-70 inline-block w-[400px] h-[150px] object-cover rounded-md absolute z-10"
        />
        <div className="flex flex-col p-4  w-[400px] h-[150px] text-white font-semibold">
          <div className="flex gap-5 justify-start items-start m-1">
            <img
              src="/avatar.avif"
              alt="logoShop"
              className="w-20 h-20 object-cover rounded-full ring-gray-300 ring-4 ring-opacity-50"
            />
            <div className="inline-block mt-4">
              <span className="text-xl ">GUGOSTART</span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3 mt-1">
            <span className="px-3 py-1 border rounded-md flex justify-center items-center gap-2">
              <FaPlus></FaPlus>
              Follow
            </span>
            <span className="px-3 py-1 border rounded-md flex justify-center items-center gap-2">
              <FaCommentAlt></FaCommentAlt>
              Chat
            </span>
          </div>
        </div>
        <div className="flex gap-20 flex-shrink-0 p-4">
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
      <div>
        <CountProvider>
          <SortBar></SortBar>
        </CountProvider>
      </div>
    </div>
  );
};

export default Store;
