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
      {NavList &&
        NavList.map((item, index) => {
          <NavLink key={index} to={item.path}>
            {item.name}
          </NavLink>;
        })}
    </>
  );
};

export default Nav;
