import { NavLink, Outlet } from "react-router-dom";

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

const Nav = () => {
  return (
    <>
      <div className="p-5 flex items-center justify-center gap-x-8 w-auto shadow-md text-xl font-semibold">
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
      <Outlet> </Outlet>
    </>
  );
};

export default Nav;
