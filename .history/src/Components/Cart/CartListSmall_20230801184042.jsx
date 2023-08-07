import { useContext } from "react";
import { CartContext } from "../Contexts/CartContext";

const CartListSmall = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <div>
      <div>
        <div className="flex flex-col">
          {cartItems.map((item, index) => (
            <div key={index} className="flex">
              <div className="inline-block w-10 h-10">
                <img
                  src={item.img ? item.img : "avatar.avif"}
                  alt="img"
                  className="object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CartListSmall;
