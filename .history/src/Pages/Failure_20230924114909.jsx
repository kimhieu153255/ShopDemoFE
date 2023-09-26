import { FaX } from "react-icons/fa6";

const Failure = () => {
  return (
    <div>
      <FaX className="inline-block text-9xl text-red-500"></FaX>
      <div>Order was placed unsuccessfully</div>
    </div>
  );
};

export default Failure;
