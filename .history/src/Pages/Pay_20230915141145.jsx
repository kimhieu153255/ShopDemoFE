import axios from "axios";
import Cookies from "js-cookie";

const Pay = () => {
  const user = JSON.parse(Cookies.get("user")?.toString() || {});
  const funcGetAddresses = async () => {
    const res = await axios.get(
      `https://localhost:20474/product/api/get?userId=${user._id}`
    );
    if (res.data) {
      console.log(res.data);
    }
  };

  return (
    <div>
      <div>
        <div>Delivery Address</div>
        <div>{}</div>
      </div>
    </div>
  );
};

export default Pay;