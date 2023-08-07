// import React from 'react';

import { FaChevronDown } from "react-icons/fa";
import ButtonCart from "../Button/ButtonCart";
import { useRef, useState } from "react";

const SortBar = () => {
  const DropRef = useRef();
  const caretRef = useRef();
  const [isDropdown, setIsDropdown] = useState(false);
  return (
    <div className="flex justify-between w-full h-fit items-center bg-gray-200 px-10 rounded-md font-semibold py-2">
      <div className="flex gap-4">
        <span className="py-1">Sort by:</span>
        <span className="hover:text-green-500 p-1 border bg-gray-50">
          Popularity
        </span>
        <span className="hover:text-green-500 p-1 border bg-gray-50">
          Lastest
        </span>
        <span className="hover:text-green-500 p-1 border bg-gray-50">
          Selling
        </span>
        <div
          onMouseOver={() => {
            setIsDropdown(true);
            caretRef.current.classList.add("rotate-180");
          }}
          onMouseLeave={() => {
            setIsDropdown(false);
            caretRef.current.classList.remove("rotate-180");
          }}
        >
          <div className="flex items-center gap-2 hover:text-green-500 border bg-gray-100 p-1">
            <span>Price</span>
            <div ref={caretRef}>
              <FaChevronDown></FaChevronDown>
            </div>
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
