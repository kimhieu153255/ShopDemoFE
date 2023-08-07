// import React from 'react';

import { FaList } from "react-icons/fa";
import { NavLink } from "react-router-dom";

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
    <div className="flex flex-col">
      <div className="flex">
        <FaList></FaList>
        <span>Catalog</span>
      </div>
      <div className="flex flex-col">
        {list.map((item, index) => (
          <NavLink key={index}>{item.name}</NavLink>
        ))}
      </div>
    </div>
  );
};

export default Catalog;
