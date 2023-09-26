import { useDispatch, useSelector } from "react-redux";

const Message = () => {
  const dispatch = useDispatch();
  const message = useSelector((state) => state.message);
  return (
    <div>
      {message?.map((e, index) => {
        return (
          <div key={index} className="text-red-500 text-sm">
            {e}
          </div>
        );
      })}
    </div>
  );
};

export default Message;
