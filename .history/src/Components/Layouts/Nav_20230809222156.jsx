import { Outlet, useNavigate } from "react-router-dom";
import NavTop from "./NavTop";
import { FaShoppingCart } from "react-icons/fa";
import CartListSmall from "../Cart/CartListSmall";
import { useContext, useRef } from "react";
import { CartContext } from "../Contexts/CartContext";
import Cookies from "js-cookie";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setCartItems } from "../../redux-toolkit/CartSlice";

const Nav = () => {
  // const { totalQuantity } = useContext(CartContext);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const DropRef = useRef();

  const loadData = async () => {
    const token = Cookies.get("token");
    const user = JSON.parse(Cookies.get("user")?.toString() || null);
    if (!token || !user) return;
    try {
      const res = await axios.get(`http://localhost:20474/cart/api/get`, {
        params: { userId: user._id },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (res.data) {
        dispatch(setCartItems(res.data.ListCart));
        dispatch(setCartItems([]));
      }
    } catch (err) {
      dispatch(setCartItems([]));
      console.log(err.response);
    }
  };

  return (
    <>
      <div className="shadow-md mb-2 px-[10%] bg-gray-100 min-w-max">
        <NavTop></NavTop>
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
            {totalQuantity() > 0 && (
              <div className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex justify-center items-center text-base font-semibold">
                {totalQuantity()}
              </div>
            )}
            <FaShoppingCart
              onClick={() => navigate("/user/cart")}
            ></FaShoppingCart>
            <div
              className="hidden absolute mt-12 translate-x-2 shadow-md z-10"
              ref={DropRef}
            >
              <CartListSmall></CartListSmall>
            </div>
          </div>
        </div>
      </div>
      <Outlet></Outlet>
    </>
  );
};

export default Nav;
