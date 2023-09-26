import { FaCheck } from "react-icons/fa6";

const Success = () => {
  return (
    <div className="mx-5">
      <FaCheck className="text-9xl text-green-500"></FaCheck>
      <h1>Placed order successfully</h1>
    </div>
  );
};

export default Success;