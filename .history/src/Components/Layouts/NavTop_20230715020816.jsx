import Cookies from "js-cookie";
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
    path: "/login",
    name: "Login",
  },
  {
    path: "/register",
    name: "Register",
  },
];
const isLogin = ["Home", "About"];

const NavTop = () => {
  return (
    <div>
      <div className="p-1 flex items-center justify-center gap-x-16 w-auto text-lg font-semibold">
        {NavList &&
          NavList.map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              className={({ isActive }) =>
                (isActive ? "text-green-500" : "") +
                `${
                  Cookies.get("token") && isLogin.includes(item.name)
                    ? ""
                    : "hidden"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
      </div>
      <div className="flex items-center justify-center gap-x-16 w-auto text-lg font-semibold">
        <NavLink
    </div>
  );
};

export default NavTop;
