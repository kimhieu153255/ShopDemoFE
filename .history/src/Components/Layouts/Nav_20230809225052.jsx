import { Outlet, useNavigate } from "react-router-dom";
import NavTop from "./NavTop";
import { FaShoppingCart } from "react-icons/fa";
import CartListSmall from "../Cart/CartListSmall";
import { useContext, useRef } from "react";
import { CartContext } from "../Contexts/CartContext";
import Cookies from "js-cookie";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setCartItems } from "../../redux-toolkit/CartSlice";
import useSWR from "swr";

const totalQuantity = (cartItems) => {
  let total = 0;
  cartItems.map((e) => {
    e.items.map(() => {
      total += 1;
    });
  });
  return total;
};

const Nav = () => {
  // const { totalQuantity } = useContext(CartContext);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const DropRef = useRef();
  const url = `http://localhost:20474/cart/api/get`;
  const loadData = async (url) => {
    const token = Cookies.get("token");
    const user = JSON.parse(Cookies.get("user")?.toString() || null);
    console.log("user", user);
    console.log("token", token);
    if (!token || !user) return [];
    const res = await axios.get(url, {
      params: { userId: user._id },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log("res", res);
    dispatch(setCartItems(res.data?.ListCart || []));
    return res.data?.ListCart || [];
  };

  const { data, error, isloading } = useSWR(
    url,
    async (url) => await loadData(url)
  );
  if (isloading) return <div>Loading...</div>;
  if (error) return <div>Error</div>;
  console.log("data", data);
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
            {totalQuantity(data[0]) > 0 && (
              <div className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex justify-center items-center text-base font-semibold">
                {data.length}
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
