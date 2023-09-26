import { useDispatch } from "react-redux";

const Message = () => {
  const dispatch = useDispatch();
  const messages = useSelector((state) => state.message);
  return <div></div>;
};

export default Message;
