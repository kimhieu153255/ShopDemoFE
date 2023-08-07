// import React from 'react';

import { FaList } from "react-icons/fa";

const list = [
  {
    id: 1,
    name: "Product 1",
  },
  {
    id: 2,
    name: "Product 2",
  },
  {
    id: 3,
    name: "Product 3",
  },
  {
    id: 4,
    name: "Product 4",
  },
];

const Catalog = () => {
  return (
    <div>
      <div>
        <FaList></FaList>
        <span>Catalog</span>
      </div>
      <div></div>
    </div>
  );
};

export default Catalog;
