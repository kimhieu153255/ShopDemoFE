// import React from 'react';

import { FaChevronDown } from "react-icons/fa";
import ButtonCart from "../Button/ButtonCart";
import { useRef } from "react";

const SortBar = () => {
  const DropRef = useRef();
  const [isDropdown, setIsDropdown] = useState(false);
  return (
    <div className="flex justify-between w-full h-fit">
      <div className="flex gap-2">
        <span>Sort by:</span>
        <span>Popularity</span>
        <span>Lastest</span>
        <span>Selling</span>
        <div>
          <div
            className="flex"
            onMouseOver={() => setIsDropdown(true)}
            onMouseLeave={() => setIsDropdown(false)}
          >
            <span>Price</span>
            <FaChevronDown></FaChevronDown>
          </div>
          <div
            className="absolute px-4 py-2 border rounded-md bg-gray-100 flex flex-col"
            ref={DropRef}
          >
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
