import { Outlet, useNavigate } from "react-router-dom";
import NavTop from "./NavTop";
import { FaShoppingCart } from "react-icons/fa";
import CartListSmall from "../Cart/CartListSmall";
import { useContext, useRef } from "react";
import { CartContext } from "../Contexts/CartContext";

const Nav = () => {
  const { totalQuantity } = useContext(CartContext);
  const navigate = useNavigate();
  const DropRef = useRef();
  return (
    <>
      <div className="shadow-md mb-2 px-[10%] ">
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
            className="flex justify-end ml-auto text-4xl text-green-500 self-center hover:text-green-600 cursor-pointer transition-all  relative"
            onMouseOver={() => {
              DropRef.current.classList.remove("hidden");
            }}
            onMouseLeave={() => {
              DropRef.current.classList.add("hidden");
            }}
          >
            <div className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex justify-center items-center text-base font-semibold h-full">
              {totalQuantity()}
            </div>

            <FaShoppingCart
              onClick={() => navigate("/user/cart")}
            ></FaShoppingCart>
            <div
              className="hidden absolute mt-10 translate-x-2 shadow-md"
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
