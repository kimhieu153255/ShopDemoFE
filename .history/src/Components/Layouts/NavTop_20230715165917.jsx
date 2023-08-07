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
    path: "/home",
    name: "Logout",
  },
  {
    path: "/profile",
  }
];

const NavTop = () => {
  const [navList, setNavList] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const cookie = Cookies.get("token");
    if (cookie) {
      setNavList([...NavList, ...navLogout]);
    } else {
      setNavList([...NavList, ...navLogin]);
    }
    return () => {};
  }, []);
  const handleLogout = () => {
    if (Cookies.get("token")) {
      Cookies.remove("token");
      Cookies.remove("user");
      navigate("/");
      return;
    }
  };
  return (
    <div className="p-1 flex items-center justify-center gap-x-12 sm:gap-x-16 w-auto text-lg font-semibold">
      {navList &&
        navList.map((item, index) => {
          if (item.name === "Logout")
            return <button onClick={handleLogout}>Logout</button>;
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
