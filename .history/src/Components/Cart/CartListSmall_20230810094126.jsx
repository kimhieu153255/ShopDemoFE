// import { useContext } from "react";
// import { CartContext } from "../Contexts/CartContext";
import { useNavigate } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa";
import { useSelector } from "react-redux";

// eslint-disable-next-line react/prop-types
const CartListSmall = () => {
  // const { cartItems } = useContext(CartContext);
  const cartItems = useSelector((state) => state.cart.CartItems);
  const listTemp = cartItems
    .map((e) => e.items)
    .sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
  const test = [
    { items: [{ a: 1 }, { a: 2 }] },
    { items: [{ a: 3 }, { a: 4 }] },
    { items: [{ a: 5 }, { a: 6 }] },
  ].map((el) => el.items);
  //lấy ra [{a:1},{a:2},{a:3},{a:4},{a:5},{a:6}]
  //sort theo createdAt
  //

  console.log(listTemp);
  const navigate = useNavigate();
  return (
    <div>
      {
        // eslint-disable-next-line react/prop-types
        cartItems.length === 0 && (
          <div className="text-black flex flex-col font-semibold text-base min-w-max gap-2 bg-gray-100 px-3 py-2 border rounded-md">
            <div className="w-40 h-28">
              <FaCartPlus className="text-8xl block m-auto h-full text-green-400"></FaCartPlus>
            </div>
            <span className="text-center block text-green-400">
              Cart is empty
            </span>
          </div>
        )
      }
      {
        // eslint-disable-next-line react/prop-types
        listTemp.length > 0 && (
          <div className="text-black flex flex-col font-semibold text-base min-w-max gap-2 bg-gray-100 px-3 py-2 border rounded-md">
            <span>Product just add</span>
            {
              // eslint-disable-next-line react/prop-types
              listTemp.map((el, ind) => {
                console.log(el);
                if (ind < 5)
                  return (
                    <div
                      key={ind}
                      className="flex justify-between items-center min-w-max gap-10 hover:bg-green-500 px-3 py-1 rounded-md hover:text-white hover:border-green-500"
                    >
                      <div className="flex items-center mr-10 gap-3">
                        <div className="inline-block w-12 h-12">
                          <img
                            src={el.img || "/avatar.avif"}
                            alt="img"
                            className="object-cover w-12 h-12"
                          />
                        </div>
                        <div className="line-clamp-1">{el.name}</div>
                      </div>
                      <div className="line-clamp-1">{el.price}</div>
                    </div>
                  );
              })
            }
            <div className="text-right">
              <button
                className="border border-green-500 px-3 py-1 rounded-md bg-green-500 hover:bg-green-600 text-white"
                onClick={() => navigate("/user/cart")}
              >
                View Cart
              </button>
            </div>
          </div>
        )
      }
    </div>
  );
};

export default CartListSmall;