import { FaCheck } from "react-icons/fa6";

const Success = () => {
  return (
    <div className="text-center h-[50vh]">
      <div className="">
        <FaCheck className=" inline-block text-9xl text-green-500"></FaCheck>
        <h1 className="text-4xl font-semibold ">Placed order successfully</h1>
      </div>
    </div>
  );
};

export default Success;
