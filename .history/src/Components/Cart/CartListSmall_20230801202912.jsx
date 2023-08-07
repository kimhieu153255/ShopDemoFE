import { useContext } from "react";
import { CartContext } from "../Contexts/CartContext";

const CartListSmall = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <div>
      <div>
        <div className="flex flex-col text-base">
          <span>Product just add</span>
          {cartItems.map((item) =>
            item.items.map((el, ind) => (
              <div key={ind} className="flex min-w-max">
                <div className="inline-block w-10 h-10">
                  <img
                    src={"../public/avatar.avif"}
                    alt="img"
                    className="object-cover w-10 h-10"
                  />
                </div>
                <div className="inline-block">
                  <div className="line-clamp-1">{el.name}</div>
                  <div className="line-clamp-1">{el.price}</div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default CartListSmall;
