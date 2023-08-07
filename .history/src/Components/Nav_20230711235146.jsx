import React from "react";
import { Link, NavLink } from "react-router-dom";

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
