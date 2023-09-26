import { FaCheck } from "react-icons/fa6";

const Success = () => {
  return (
    <div>
      <div className="text-center">
        <FaCheck className=" inline-block text-9xl text-green-500"></FaCheck>
        <h1 className="text-4xl">Placed order successfully</h1>
      </div>
    </div>
  );
};

export default Success;
