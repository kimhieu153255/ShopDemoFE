import { useEffect, useState } from "react";
import SidebarUser from "../Components/Sidebar/SidebarUser";
import Cookies from "js-cookie";
import { Outlet } from "react-router-dom";

const Information = () => {
  const [user, setUser] = useState({});
  useEffect(() => {
    setUser(JSON.parse(Cookies.get("user")?.toString() || "{}"));
  }, []);

  return (
    <div className="flex">
      <SidebarUser
        username={user?.name || "User"}
        avatar={user?.avatar || "/avatar.avif"}
      ></SidebarUser>
      {/* outlet các trang khi nhấn các nút trong sidebar biết siderbar ở trong Nav và nav cũng có outlet

 */}
      <Outlet />
    </div>
  );
};

export default Information;
