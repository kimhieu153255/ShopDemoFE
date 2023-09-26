import { useSelector } from "react-redux";

const Message = () => {
  const message = useSelector((state) => state.message);
  return (
    message?.length > 0 && (
        {message?.map((e, index) => {
          return (
            <div key={index} className="text-red-500 text-sm">
              {e}
            </div>
          );
        })}
    )
  );
};

export default Message;
