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
      <div>
        <div className="p-5 flex items-center justify-center gap-x-8 w-auto text-xl font-semibold">
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
        <div className="p-2">
          <form
            className="flex items-center justify-center gap-x-8 w-auto shadow-md text-xl font-semibold"
            method="post"
          >
            <input
              type="text"
              name="search"
              placeholder="Search"
              className="p-2 rounded-md border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </form>
        </div>
      </div>
      <Outlet> </Outlet>
    </>
  );
};

export default Nav;
