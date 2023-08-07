import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <NavLink to="/" activeClassName="active">
        Home
      </NavLink>
      <NavLink to="/about" activeClassName="active">
        About
      </NavLink>
      <NavLink to="/user" activeClassName="active">
        User
      </NavLink>
      <NavLink to="/login" activeClassName="active">
        Login
      </NavLink>
      <NavLink to="/register" activeClassName="active">
        Register
      </NavLink>
    </>
  );
};

export default Nav;
