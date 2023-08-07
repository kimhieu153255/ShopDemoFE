import { useContext } from "react";
import { CartContext } from "../Contexts/CartContext";
import { useNavigate } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa";

const CartListSmall = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();
  return (
    <div>
      {cartItems.length === 0 && (
        <div className="text-black flex flex-col font-semibold text-base min-w-max gap-2 bg-gray-100 px-3 py-2 border rounded-md">
          <div className="w-40 h-10">
            <FaCartPlus className="text-4xl inline-block"></FaCartPlus>
          </div>
        </div>
      )}
      {cartItems.length > 0 && (
        <div className="text-black flex flex-col font-semibold text-base min-w-max gap-2 bg-gray-100 px-3 py-2 border rounded-md">
          <span>Product just add</span>
          {cartItems.map((item) =>
            item.items.map((el, ind) => (
              <div
                key={ind}
                className="flex items-center min-w-max gap-10 hover:bg-green-500 px-3 py-1 rounded-md hover:text-white hover:border-green-500"
              >
                <div className="flex items-center mr-10 gap-3">
                  <div className="inline-block w-12 h-12">
                    <img
                      src={"/avatar.avif"}
                      alt="img"
                      className="object-cover w-12 h-12"
                    />
                  </div>
                  <div className="line-clamp-1">{el.name}</div>
                </div>
                <div className="line-clamp-1">{el.price}</div>
              </div>
            ))
          )}
          <div className="text-right">
            <button
              className="border border-green-500 px-3 py-1 rounded-md bg-green-500 hover:bg-green-600 text-white"
              onClick={() => navigate("/user/cart")}
            >
              View Cart
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartListSmall;
