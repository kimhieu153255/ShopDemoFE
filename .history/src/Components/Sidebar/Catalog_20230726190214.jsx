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
    <div className="flex flex-col ml-4 bg-gray-100">
      <div className="flex gap-2 items-center">
        <FaList></FaList>
        <span>Catalog</span>
      </div>
      <div className="flex flex-col">
        {list.map((item, index) => (
          <NavLink
            key={index}
            className={({ isActive }) =>
              (isActive ? "text-green-500 " : "") + "hover:text-green-400"
            }
          >
            {item.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Catalog;
