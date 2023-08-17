import { NavLink, Outlet, useNavigate } from "react-router-dom";
import NavTop from "./NavTop";
import { FaShoppingCart } from "react-icons/fa";
import CartListSmall from "../Cart/CartListSmall";
import { useRef } from "react";
import Cookies from "js-cookie";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setCartItems } from "../../redux-toolkit/CartSlice";
import { login } from "../../redux-toolkit/AuthSlice";
import useSWR from "swr";

const totalQuantity = (cartItems) => {
  if (!cartItems) return 0;
  let total = 0;
  cartItems.map((e) => {
    e.items.map(() => {
      total += 1;
    });
  });
  return total;
};

const Nav = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let token = useSelector((state) => state.auth.token);
  let user = useSelector((state) => state.auth.user);

  const DropRef = useRef();
  const url = `http://localhost:20474/cart/api/get`;
  const loadData = async () => {
    try {
      if (!token) return [];
      const res = await axios.get(url, {
        params: { userId: user._id },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("res", res);
      dispatch(setCartItems(res.data?.ListCart || []));
      return res.data?.ListCart || [];
    } catch (err) {
      console.log(err.response);
      return [];
    }
  };

  const { data, error, isloading } = useSWR(url, loadData);
  if (isloading) return <div>Loading...</div>;
  if (error) return <div>Error</div>;

  return (
    <>
      <div className="shadow-md mb-2 px-[10%] bg-gray-100 min-w-max">
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
        <div className="mb-2 pb-4 flex">
          <a className="w-30" href="/">
            <img
              src="/logoShop.avif"
              alt="logo"
              className="w-32 h-20 object-cover rounded-full"
            ></img>
          </a>
          <form
            className="flex items-center justify-center w-full text-lg font-semibold gap-1"
            method="post"
          >
            <input
              type="text"
              name="search"
              placeholder="Search"
              className="p-2 rounded-md border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent w-3/4"
            />
            <button className="py-2 rounded-md px-3 border-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent bg-green-500 text-white  hover:bg-green-600">
              Search
            </button>
          </form>
          <div
            className="flex justify-end ml-auto text-5xl text-green-500 self-center hover:text-green-600 cursor-pointer transition-all relative"
            onMouseOver={() => {
              DropRef.current.classList.remove("hidden");
            }}
            onMouseLeave={() => {
              DropRef.current.classList.add("hidden");
            }}
          >
            {totalQuantity(data) > 0 && (
              <div className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex justify-center items-center text-base font-semibold">
                {totalQuantity(data)}
              </div>
            )}
            <FaShoppingCart
              onClick={() => navigate("/user/cart")}
            ></FaShoppingCart>
            <div
              className="hidden absolute mt-12 translate-x-2 shadow-md z-10"
              ref={DropRef}
            >
              <CartListSmall cartItems={data || []}></CartListSmall>
            </div>
          </div>
        </div>
      </div>
      <Outlet></Outlet>
    </>
  );
};

export default Nav;