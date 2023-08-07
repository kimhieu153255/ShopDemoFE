import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <NavLink to="/" activeClassName="active">
        Home
      </NavLink>
    </>
  );
};

export default Nav;
