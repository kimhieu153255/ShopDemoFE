import Cookies from "js-cookie";
import { useEffect, useRef, useState } from "react";

const SidebarUser = () => {
  // const [user, setUser] = useState({});
  const [token, setToken] = useState("");
  const userRef = useRef();
  useEffect(() => {
    setToken(Cookies.get("token") || null);
    userRef.current = JSON.parse(Cookies.get("user")?.toString() || "{}");
    // setUser(userRef.current);
    () => {
      setToken(null);
      userRef.current = null;
    };
  }, [token, userRef]);

  return (
    <div className="flex flex-col w-1/6 bg-gray-100">
      <div>
        <div>user</div>
        <div>
          <div>My account</div>
          <div>
            <div>Résemé</div>
            <div>Address</div>
            <div>Change password</div>
            <div>Setting notification</div>
          </div>
        </div>
        <div>My order</div>
        <div>Notification</div>
        <div>Voucher Store</div>
        <div>Shop coint</div>
      </div>
    </div>
  );
};

export default SidebarUser;
