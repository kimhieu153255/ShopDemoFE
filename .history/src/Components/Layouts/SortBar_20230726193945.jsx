// import React from 'react';

import { FaChevronDown } from "react-icons/fa";
import ButtonCart from "../Button/ButtonCart";
import { useRef, useState } from "react";

const SortBar = () => {
  const DropRef = useRef();
  const caretRef = useRef();
  const [isDropdown, setIsDropdown] = useState(false);
  return (
    <div className="flex justify-between w-full h-fit items-center bg-gray-200 px-10 rounded-sm py-2 font-semibold">
      <div className="flex gap-4">
        <span className="hover:text-green-500">Sort by:</span>
        <span className="hover:text-green-500">Popularity</span>
        <span className="hover:text-green-500">Lastest</span>
        <span className="hover:text-green-500">Selling</span>
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
          <div className="flex items-center gap-2 hover:text-green-500">
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
