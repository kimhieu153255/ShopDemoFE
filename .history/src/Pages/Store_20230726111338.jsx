// import React from "react";

import { CountProvider } from "../Components/Contexts/CountContext";
import SortBar from "../Components/Layouts/SortBar";

const Store = () => {
  return (
    <div>
      <div className="flex flex-col">
        <div className="flex p-4 items-center">
          <img
            src="/logoShop.avif"
            alt="bg"
            className="filter blur-md w-[500px] h-[200px] object-cover "
          />
          <div className="inline-block  items-center">
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
