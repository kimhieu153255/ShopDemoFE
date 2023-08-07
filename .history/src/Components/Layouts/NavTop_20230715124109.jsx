import { useEffect } from "react";
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

const NavTop = () => {
  useEffect(() => {
    const nav = document.querySelector(".nav");
    const navTop = nav.offsetTop;
    const stickyNav = () => {
      if (window.scrollY >= navTop) {
        nav.classList.add("sticky");
      } else {
        nav.classList.remove("sticky");
      }
    };
    window.addEventListener("scroll", stickyNav);
    return () => {
      window.removeEventListener("scroll", stickyNav);
    };
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
