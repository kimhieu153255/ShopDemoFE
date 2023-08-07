import Cookies from "js-cookie";
import { useEffect, useState } from "react";
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
];

const navLogin = [
  {
    path: "/login",
    name: "Login",
  },
  {
    path: "/register",
    name: "Register",
  },
];

const navLogout = [
  {
    path: "/logout",
    name: "Logout",
  },
];

const NavTop = () => {
  const [navList, setNavList] = useState([]);
  useEffect(() => {
    const cookie = Cookies.get("token");
    if (cookie) {
      const arr = [...NavList, ...navLogout];
    }

    return () => {};
  }, []);
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
