import React from "react";
import { Link, NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <NavLink to="/" activeClassName={({isActive})=> }>
        Home
      </NavLink>
    </>
  );
};

export default Nav;
