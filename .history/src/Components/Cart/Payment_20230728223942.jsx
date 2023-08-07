import { useContext } from "react";
import { CartContext } from "../Contexts/CartContext";

const Payment = () => {
  const { totalPayment } = useContext(CartContext);
  return (
    <div className="flex items-center w-4/5 m-auto p-2 justify-around rounded-md border border-gray-300 min-w-max text-xl font-semibold ">
      <div className="flex gap-5">
        <div>Total:</div>
        <div className="w-[300px]">{totalPayment()}</div>
      </div>
      <button className="px-4 py-2 bg-green-500 text-white  border rounded-md hover:bg-green-600">
        Buy
      </button>
    </div>
  );
};

export default Payment;
