// import React from 'react';

import {
  FaChevronDown,
  FaSortAmountDown,
  FaSortAmountUpAlt,
} from "react-icons/fa";
import ButtonCart from "../Button/ButtonCart";
import { useRef, useState } from "react";

const SortBar = () => {
  const DropRef = useRef();
  const caretRef = useRef();
  const [isDropdown, setIsDropdown] = useState(false);
  return (
    <div className="flex justify-between w-full h-fit items-center bg-gray-200 px-10 rounded-md font-semibold py-2 min-w-max gap-5">
      <div className="flex gap-4">
        <span className="py-1 cu">Sort by:</span>
        <span className="hover:bg-green-500 hover:text-white p-1 border bg-gray-100 rounded-md cursor-pointer">
          Popularity
        </span>
        <span className="hover:bg-green-500 hover:text-white p-1 border bg-gray-100 rounded-md cursor-pointer">
          Lastest
        </span>
        <span className="hover:bg-green-500 hover:text-white p-1 border bg-gray-100 rounded-md cursor-pointer">
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
          <div className="flex items-center gap-2 hover:bg-green-500 hover:text-white border bg-gray-100 rounded-md p-1 cursor-pointer">
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
              <span className="hover:text-green-500 cursor-pointer">
                <FaSortAmountUpAlt className="inline-block mr-3"></FaSortAmountUpAlt>
                low to high
              </span>
              <span className="hover:text-green-500 cursor-pointer">
                <FaSortAmountDown className="inline-block mr-3"></FaSortAmountDown>
                high to low
              </span>
            </div>
          )}
        </div>
      </div>
      <div>
        <ButtonCart></ButtonCart>
      </div>
    </div>
  );
};

export default SortBar;
