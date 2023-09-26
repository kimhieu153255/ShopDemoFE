import { useDispatch, useSelector } from "react-redux";

const Message = () => {
  const dispatch = useDispatch();
  const message = useSelector((state) => state.message);
  return <div></div>;
};

export default Message;
