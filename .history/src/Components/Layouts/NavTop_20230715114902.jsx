import { NavLink } from "react-router-dom";
import Cookies from "js-cookie";
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
    path: "/login",
    name: "Login",
    isLogin: true,
  },
  {
    path: "/register",
    name: "Register",
    isLogin: true,
  },
];

const NavTop = () => {
  return (
    <div className="p-1 flex items-center justify-center gap-x-16 w-auto text-lg font-semibold">
      {NavList &&
        NavList.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            className={
              ((({ isActive }) => (isActive ? "text-green-500" : "")) +
                Cookies.get("token") &&
                item.path === "/login") ||
              item.path === "/register"
                ? "hidden"
                : ""
            }
          >
            {item.name}
          </NavLink>
        ))}
    </div>
  );
};

export default NavTop;
