// import React from "react";

import { CountProvider } from "../Components/Contexts/CountContext";
import SortBar from "../Components/Layouts/SortBar";

const Store = () => {
  return (
    <div>
      <div>
        <div className="inline-block p-4">
          <img
            src="/avatar.avif"
            alt="logoShop"
            className="w-28 h-28 object-cover rounded-full ring-gray-300 ring-2"
          />
        </div>
        <div className="inline-block">
          <span className="text-xl font-semibold">GUGOSTART</span>
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
