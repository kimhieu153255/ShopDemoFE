import Cookies from "js-cookie";
import { useContext, useEffect, useRef, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../Contexts/AuthContext";
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
  // const [token, setToken] = useState("");
  const navigate = useNavigate();
  const [isDropdown, setIsDropdown] = useState(false);
  const userRef = useRef(JSON.parse(Cookies.get("user")?.toString() || null));
  const { token, setToken, user, setUser } = useContext(AuthContext);

  useEffect(() => {
    setUser(userRef.current);
    setToken(Cookies.get("token") || null);
    if (token) {
      if (user.role > 0) setNavList([...NavList, ...shop, ...navLogout]);
      else setNavList([...NavList, ...navLogout]);
    } else setNavList([...NavList, ...navLogin]);
  }, [setUser, setToken, token, user]);

  useEffect(() => {
    !user && navigate("/");
  }, [navigate, user]);

  const handleLogout = async () => {
    if (token) {
      Cookies.remove("token");
      Cookies.remove("user");
      window.location.reload();
    }
  };

  return (
    <div className="p-1 pt-2 flex items-center justify-center gap-x-12 sm:gap-x-16 w-auto text-lg font-semibold">
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
                      src={user?.avatar || "/avatar.avif"}
                      alt="avatar"
                      className="w-8 h-8 rounded-full inline-block object-cover"
                    />
                    {user?.username || "User"}
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
                    {user?.role == 0 && (
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
