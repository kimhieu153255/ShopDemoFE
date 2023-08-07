// import React from "react";

import { CountProvider } from "../Components/Contexts/CountContext";
import SortBar from "../Components/Layouts/SortBar";

const Store = () => {
  return (
    <div>
      <div>
        <div className="flex">
          <img
            src="/avatar.avif"
            alt="logoShop"
            className="w-28 h-28 object-cover rounded-full ring-gray-300 ring-2"
          />
          <span className="text-xl">GUGOSTART</span>
          <span>Follow</span>
          <span>Chat</span>
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
