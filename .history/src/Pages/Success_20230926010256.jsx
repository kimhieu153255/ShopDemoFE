import { FaCheck } from "react-icons/fa6";
import { useSelector } from "react-redux";

const Success = () => {
  const BuyList = useSelector((state) => state.cart.BuyList);
  console.log(BuyList);

  return (
    <div className="text-center my-32">
      <FaCheck className="inline-block text-9xl text-green-500"></FaCheck>
      <h1 className="text-3xl font-semibold mt-5">Placed order successfully</h1>
    </div>
  );
};

export default Success;
