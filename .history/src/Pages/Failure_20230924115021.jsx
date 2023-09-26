import { FaX } from "react-icons/fa6";

const Failure = () => {
  return (
    <div className="text-center my-32">
      <FaX className="inline-block text-9xl text-red-500"></FaX>
      <div className="text-4xl font-semibold">
        Order was placed unsuccessfully
      </div>
    </div>
  );
};

export default Failure;
