import React from "react";

const NavTop = () => {
  return (
    <div className="p-1 flex items-center justify-center gap-x-16 w-auto text-lg font-semibold">
      {NavList &&
        NavList.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            className={({ isActive }) => (isActive ? "text-green-500" : "")}
          >
            {item.name}
          </NavLink>
        ))}
    </div>
  );
};

export default NavTop;
