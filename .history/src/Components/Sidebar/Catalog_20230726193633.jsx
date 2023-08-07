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
    <div className="flex flex-col h-full bg-gray-100 p-3 rounded-xl border min-w-max">
      <div className="flex gap-2 items-center font-semibold">
        <FaList></FaList>
        <span>Catalog</span>
      </div>
      <hr className="my-2"></hr>
      <div className="flex flex-col">
        {list.map((item, index) => (
          <NavLink
            key={index}
            className={({ isActive }) =>
              (isActive ? "text-green-500 " : "") +
              "hover:text-green-600 py-1 px-3 font-semibold rounded-md"
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
