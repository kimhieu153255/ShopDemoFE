// import React from 'react';

import { FaChevronDown } from "react-icons/fa";
import ButtonCart from "../Button/ButtonCart";
import { useRef, useState } from "react";

const SortBar = () => {
  const DropRef = useRef();
  const [isDropdown, setIsDropdown] = useState(false);
  return (
    <div className="flex justify-between w-full h-fit items-center bg-gray-100">
      <div className="flex gap-4">
        <span>Sort by:</span>
        <span>Popularity</span>
        <span>Lastest</span>
        <span>Selling</span>
        <div
          onMouseOver={() => setIsDropdown(true)}
          onMouseLeave={() => setIsDropdown(false)}
        >
          <div className="flex items-center gap-2">
            <span>Price</span>
            <FaChevronDown></FaChevronDown>
          </div>
          {isDropdown && (
            <div
              className="absolute px-4 py-2 border rounded-md bg-gray-100 flex flex-col"
              ref={DropRef}
            >
              <span className="hover:text-green-500">Price: high to low</span>
              <span className="hover:text-green-500">Price: low to high</span>
            </div>
          )}
        </div>
      </div>
      <div className="mr-3">
        <ButtonCart></ButtonCart>
      </div>
    </div>
  );
};

export default SortBar;
