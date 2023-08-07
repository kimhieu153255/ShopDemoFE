// import React from "react";

import { CountProvider } from "../Components/Contexts/CountContext";
import SortBar from "../Components/Layouts/SortBar";

const Store = () => {
  return (
    <div>
      <div className="flex flex-col">
        <div className="flex p-4 items-center w-[500px] h-[200px]">
          <img
            src="/logoShop.avif"
            alt="bg"
            className=" blur-sm w-[500px] h-[200px] object-cover rounded-md absolute -z-10"
          />
          <div className="inline-block  items-center ">
            <img
              src="/avatar.avif"
              alt="logoShop"
              className="w-20 h-20 object-cover rounded-full ring-gray-300 ring-2"
            />
          </div>
          <div className="inline-block">
            <span className="text-xl font-semibold">GUGOSTART</span>
            <div>
              <span>Follow</span>
              <span>Chat</span>
            </div>
          </div>
        </div>
        <div>
          <div>
            <span>Products: {}</span>
            <span>Following: {}</span>
          </div>
          <div>
            <span>Followers: {}</span>
            <span>Rating: {}</span>
            <span>Joined: {}</span>
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
