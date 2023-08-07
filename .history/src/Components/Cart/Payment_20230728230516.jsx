import { useContext } from "react";
import { CartContext } from "../Contexts/CartContext";

const Payment = () => {
  const { totalPayment } = useContext(CartContext);
  return (
    <div className="relative">
      <div className="flex items-center w-full m-auto py-2 justify-around rounded-md border bg-gray-50   text-xl font-semibold min-w-max absolute bottom-0 sticky-bottom">
        <div className="flex gap-5 text-green-500 font-bold text-2xl">
          <div>Total:</div>
          <div className="w-[300px] ">{totalPayment()}</div>
        </div>
        <button className="px-4 py-2 bg-green-500 text-white  border rounded-md hover:bg-green-600">
          Buy
        </button>
      </div>
    </div>
  );
};

export default Payment;
