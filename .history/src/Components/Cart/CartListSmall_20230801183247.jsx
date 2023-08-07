import { useContext } from "react";
import { CartContext } from "../Contexts/CartContext";

const CartListSmall = () => {
  const { cartList } = useContext(CartContext);
  return (
    <div>
      <div>
        <div className="flex flex-col">
          {cartList.map((item, index) => (
            <div></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CartListSmall;
