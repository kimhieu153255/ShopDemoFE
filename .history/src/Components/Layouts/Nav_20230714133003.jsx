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
      <div className="shadow-md mb-2 px-12">
        <div className="p-2 flex items-center justify-center gap-x-8 w-auto text-lg font-semibold">
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
        <div className="mb-2 pb-4 ">
          <form
            className="flex items-center justify-center gap-x-8 w-full text-lg font-semibold"
            method="post"
          >
            <input
              type="text"
              name="search"
              placeholder="Search"
              className="p-2 rounded-md border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent w-3/4"
            />
            <button className="p-1 rounded-md px-2 border focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent bg-green-500 text-white right-1/5 hover:bg-green-600 absolute">
              Search
            </button>
          </form>
        </div>
      </div>
      <Outlet> </Outlet>
    </>
  );
};

export default Nav;
