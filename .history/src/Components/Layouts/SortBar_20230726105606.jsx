// import React from 'react';

import { FaChevronDown } from "react-icons/fa";

const SortBar = () => {
  return (
    <div>
      <div>
        <span>Sort by:</span>
        <span>Popularity</span>
        <span>Lastest</span>
        <span>Selling</span>
        <div>
          <span>Price</span>
          <FaChevronDown></FaChevronDown>
        </div>
      </div>
    </div>
  );
};

export default SortBar;
