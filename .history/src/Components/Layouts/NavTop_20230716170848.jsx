import Cookies from "js-cookie";
import { useEffect, useRef, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
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
    path: "/User",
    name: "User",
  },
];

const NavTop = () => {
  const [navList, setNavList] = useState([]);
  const navigate = useNavigate();
  const [token, setToken] = useState(null);
  // const [user, setUser] = useState(null);
  const [isDropdown, setIsDropdown] = useState(false);
  const ref = useRef();
  useEffect(() => {
    setToken(Cookies.get("token"));
    ref.current = JSON.parse(Cookies.get("user"));
    console.log(ref.current);
    if (token) {
      setNavList([...NavList, ...navLogout]);
    } else {
      setNavList([...NavList, ...navLogin]);
    }
    return () => {
      setNavList([]);
    };
  }, [token, ref]);
  const handleLogout = async () => {
    if (Cookies.get("token")) {
      Cookies.remove("token");
      Cookies.remove("user");
      setToken(null);
      navigate("/");
      return;
    }
  };
  return (
    <div className="p-1 flex items-center justify-center gap-x-12 sm:gap-x-16 w-auto text-lg font-semibold">
      {navList &&
        navList.map((item, index) => {
          if (item.name === "User")
            return (
              <div
                key={index}
                onMouseOver={() => setIsDropdown(true)}
                onMouseLeave={() => setIsDropdown(false)}
              >
                <div className="hover:text-green-300 cursor-pointer">
                  <div className="flex items-center gap-x-2 flex-row">
                    <img
                      src={ref?.current?.avatar}
                      alt="avatar"
                      className="w-8 h-8 rounded-full inline-block"
                    />
                  </div>
                  {ref?.current?.name || "User"}
                </div>
                {isDropdown && (
                  <div className="absolute top-8 bg-gray-200 shadow-md rounded-md p-2 flex flex-col gap-2">
                    <div
                      onClick={() => navigate("/User")}
                      className="hover:text-green-300 cursor-pointer border-b pb-1"
                    >
                      Information
                    </div>
                    <div
                      onClick={handleLogout}
                      className="hover:text-green-300 cursor-pointer"
                    >
                      Logout
                    </div>
                  </div>
                )}
              </div>
            );
          return (
            <NavLink
              key={index}
              to={item.path}
              className={({ isActive }) =>
                isActive
                  ? "text-green-500 hover:text-green-300"
                  : "hover:text-green-300"
              }
            >
              {item.name}
            </NavLink>
          );
        })}
    </div>
  );
};

export default NavTop;
