import { useSelector } from "react-redux";

const Message = () => {
  // const message = useSelector((state) => state.message);
  const message = ["hello", "world"];
  return (
    message?.length > 0 && (
      <div className="min-w-max fixed top-2 right-2">
        {message?.map((e, index) => {
          return (
            <div
              key={index}
              className="text-red-500 text-sm px-4 py-2 bg-green-400 transition-all duration-500"
            >
              {e}
            </div>
          );
        })}
      </div>
    )
  );
};

export default Message;
