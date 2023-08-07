import { NavLink } from "react-router-dom";

const NavList = [
  {
    path: "/",
    name: "Home",
  },
  {
    path: "/about",
    name: "About",
  },
  {
    path: "/user",
    name: "User",
  },
  {
    path: "/login",
    name: "Login",
  },
  {
    path: "/register",
    name: "Register",
  },
];

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
