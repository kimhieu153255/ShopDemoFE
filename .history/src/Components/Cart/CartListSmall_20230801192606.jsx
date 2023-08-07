import { useContext } from "react";
import { CartContext } from "../Contexts/CartContext";

const CartListSmall = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <div>
      <div>
        <div className="flex flex-col text-base">
          {cartItems.map((item, index) =>
            item.items.map((el) => (
              <div key={index} className="flex">
                <div className="inline-block w-10 h-10">
                  <img
                    src={"avatar.avif"}
                    alt="img"
                    className="object-cover w-10 h-10"
                  />
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
