import Cookies from "js-cookie";
import { useEffect, useState } from "react";
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
  const [cookie, setCookie] = useState(null);
  const [user, setUser] = useState(null);
  useEffect(() => {
    setCookie(Cookies.get("token"));
    setUser(Cookies.get("user"));
    console.log(user);
    if (cookie) {
      setNavList([...NavList, ...navLogout]);
    } else {
      setNavList([...NavList, ...navLogin]);
    }
    return () => {};
  }, [cookie, user]);
  const handleLogout = async () => {
    if (Cookies.get("token")) {
      console.log("logout");
      Cookies.remove("token");
      Cookies.remove("user");
      setCookie(null);
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
              <div>
                <div
                  key={index}
                  className="hover:text-green-300 cursor-pointer"
                >
                  {user?.name}
                </div>
                {/* drop down contain: infor, logout */}
                <div className="absolute top-9 bg-gray-100 shadow-md rounded-md p-2">
                  <div
                    onClick={() => navigate("/User")}
                    className="hover:text-green-300 cursor-pointer"
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
