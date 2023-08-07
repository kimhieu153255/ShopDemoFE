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
        {Cookies.get("token") ? (
          <div className="flex items-center gap-x-2">
            <p className="text-green-500">{Cookies.get("user")}</p>
            <button
              className="bg-green-500 hover:bg-green-600 text-white font-semibold p-2 rounded-md"
              onClick={() => {
                Cookies.remove("token");
                Cookies.remove("user");
                window.location.reload();
              }}
            >
              logout
            </button>
          </div>
        </div>):""}
        </div>
    </div>
  );
};

export default NavTop;
