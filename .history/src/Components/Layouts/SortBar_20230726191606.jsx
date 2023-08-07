// import React from 'react';

import { FaChevronDown } from "react-icons/fa";
import ButtonCart from "../Button/ButtonCart";

const SortBar = () => {
  return (
    <div className="flex justify-between w-full h-fit">
      <div className="flex gap-2">
        <span>Sort by:</span>
        <span>Popularity</span>
        <span>Lastest</span>
        <span>Selling</span>
        <div>
          <div className="flex">
            <span>Price</span>
            <FaChevronDown></FaChevronDown>
          </div>
          <div className="absolute px-4 py-2 bg-gray-100 flex flex-col">
            <span>Price: high to low</span>
            <span>Price: low to high</span>
          </div>
        </div>
      </div>
      <div>
        <ButtonCart></ButtonCart>
      </div>
    </div>
  );
};

export default SortBar;
