// import React from "react";

import { CountProvider } from "../Components/Contexts/CountContext";
import SortBar from "../Components/Layouts/SortBar";

const Store = () => {
  return (
    <div>
      <div className="flex flex-col">
        <img
          src="/logoShop.avif"
          alt="bg"
          className="brightness-50 opacity-70 inline-block w-[400px] h-[150px] object-cover rounded-md absolute -z-10 m-4"
        />
        <div className="flex flex-col p-4 m-4 w-[400px] h-[150px]">
          <div className="flex gap-5 justify-start items-start">
            <img
              src="/avatar.avif"
              alt="logoShop"
              className="w-20 h-20 object-cover rounded-full ring-gray-300 ring-4 ring-opacity-50"
            />
            <div className="inline-block text-white mt-4">
              <span className="text-xl font-bold">GUGOSTART</span>
            </div>
          </div>
          <div>
            <span>Follow</span>
            <span>Chat</span>
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
