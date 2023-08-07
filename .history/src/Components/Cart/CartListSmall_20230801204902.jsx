import { useContext } from "react";
import { CartContext } from "../Contexts/CartContext";

const CartListSmall = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <div>
      <div>
        <div className=" font-black flex flex-col text-base min-w-max gap-2 bg-gray-100 px-3 py-2 border rounded-md">
          <span>Product just add</span>
          {cartItems.map((item) =>
            item.items.map((el, ind) => (
              <div key={ind} className="flex min-w-max gap-10">
                <div className="flex mr-10 gap-3">
                  <div className="inline-block w-10 h-10">
                    <img
                      src={"../public/avatar.avif"}
                      alt="img"
                      className="object-cover w-10 h-10"
                    />
                  </div>
                  <div className="line-clamp-1">{el.name}</div>
                </div>
                <div className="line-clamp-1">{el.price}</div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default CartListSmall;
