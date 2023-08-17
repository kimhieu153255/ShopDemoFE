import { useContext } from "react";
import { CartContext } from "../Contexts/CartContext";
import { useSelector } from "react-redux";

const Payment = () => {
  // const { totalPayment, cartItems } = useContext(CartContext);
  const CartItems = useSelector((state) => state.cart.CartItems);
  return (
    CartItems.length && (
      <div className="w-full px-5">
        <div className="flex items-center w-4/5 m-auto py-2 justify-around rounded-md border bg-gray-50   text-xl font-semibold min-w-[841.4px]">
          <div className="flex gap-5 text-green-500 font-bold text-2xl">
            <div>Total:</div>
            <div className="w-[300px] ">{totalPayment()}</div>
          </div>
          <button className="px-4 py-2 bg-green-500 text-white  border rounded-md hover:bg-green-600">
            Buy
          </button>
        </div>
      </div>
    )
  );
};

export default Payment;
