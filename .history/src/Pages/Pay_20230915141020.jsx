import axios from "axios";
import Cookies from "js-cookie";

const Pay = () => {
  const user = JSON.parse(Cookies.get("user") || null);
  const funcGetAddresses = async () => {
    const res = await axios.get(
      `https://localhost:20474/product/api/get?userId=${id}`
    );
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
