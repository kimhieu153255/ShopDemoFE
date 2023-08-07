// import React from 'react';

import { FaChevronDown } from "react-icons/fa";
import ButtonCart from "../Button/ButtonCart";

const SortBar = () => {
  return (
    <div className="flex">
      <div className="flex">
        <span>Sort by:</span>
        <span>Popularity</span>
        <span>Lastest</span>
        <span>Selling</span>
        <div>
          <div className="flex">
            <span>Price</span>
            <FaChevronDown></FaChevronDown>
          </div>
          <div>
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
