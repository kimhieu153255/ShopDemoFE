// import React from "react";

import { CountContext } from "../Components/Contexts/CountContext";
import SortBar from "../Components/Layouts/SortBar";

const Store = () => {
  return (
    <div>
      <div>
        <div>
          <img src="/avatar.avif" alt="logoShop" />
          <span>GUGOSTART</span>
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
        <CountContext>
          <SortBar></SortBar>
        </CountContext>
      </div>
    </div>
  );
};

export default Store;
