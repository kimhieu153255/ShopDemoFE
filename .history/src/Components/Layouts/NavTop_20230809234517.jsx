import Cookies from "js-cookie";
import { useEffect, useRef, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";
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
    path: "/user/login",
    name: "Login",
  },
  {
    path: "/user/register",
    name: "Register",
  },
];

const navLogout = [
  {
    path: "/User",
    name: "User",
  },
];

const shop = [
  {
    path: "/shop",
    name: "Shop",
  },
];

const NavTop = () => {
  const [navList, setNavList] = useState([]);
  const navigate = useNavigate();
  const [isDropdown, setIsDropdown] = useState(false);
  const user = useSelector((state) => state.auth.user);
  const token = useSelector((state) => state.auth.token);

  const funcSet = async () => {
    if (!token) {
      setNavList([...NavList, ...navLogin]);
      return;
    }
    console.log(user, Cookies.get("token"), Cookies.get("storeId"));
    if (token)
      if (userRef.current.role > 0)
        setNavList([...NavList, ...shop, ...navLogout]);
      else setNavList([...NavList, ...navLogout]);
  };

  const funcSetRef = useRef();
  funcSetRef.current = funcSet;

  useEffect(() => {
    funcSetRef.current();
  }, []);

  const handleLogout = async () => {
    if (token) {
      await axios.get("http://localhost:20474/user/api/logout");
      Cookies.remove("token");
      Cookies.remove("user");
      Cookies.remove("storeId");
      window.location.href = "/";
    }
  };

  return (
    <div className="p-1 pt-2 flex items-center justify-center gap-x-12 sm:gap-x-16 w-auto text-lg font-semibold min-w-max">
      {navList &&
        navList.map((item, index) => {
          if (item.name === "User")
            return (
              <div
                key={index}
                onMouseOver={() => setIsDropdown(true)}
                onMouseLeave={() => setIsDropdown(false)}
              >
                <div className="hover:text-green-400 cursor-pointer">
                  <div className="flex items-center gap-x-2">
                    <img
                      src={userRef.current?.avatar || "/avatar.avif"}
                      alt="avatar"
                      className="w-8 h-8 rounded-full inline-block object-cover"
                    />
                    {userRef.current?.username || "User"}
                  </div>
                </div>
                {isDropdown && (
                  <div className="absolute top-10 bg-gray-200 shadow-md rounded-md py-2 px-8 flex flex-col gap-2">
                    <button
                      className="hover:text-green-400 cursor-pointer border-b pb-1"
                      onClick={() => navigate("/user/information/resume")}
                    >
                      Information
                    </button>
                    {userRef.current?.role == 0 && (
                      <button
                        className="hover:text-green-400 cursor-pointer border-b pb-1"
                        onClick={() => navigate("/register-store")}
                      >
                        Register Store
                      </button>
                    )}
                    <div
                      onClick={handleLogout}
                      className="hover:text-green-400 cursor-pointer"
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
                (isActive ? "text-green-500 " : "") + "hover:text-green-400"
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
