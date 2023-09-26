import { useSelector } from "react-redux";

const Message = () => {
  const message = useSelector((state) => state.message.stateArray);
  return (
    message?.length > 0 && (
      <div className="min-w-max fixed top-2 right-2 flex flex-col gap-1 z-50 ">
        {message?.map((e, index) => {
          return (
            <div
              key={index}
              className="text-red-500 text-base font-semibold px-5 py-2 bg-green-400 rounded-md transition-all shadow-md animate-bounce"
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
