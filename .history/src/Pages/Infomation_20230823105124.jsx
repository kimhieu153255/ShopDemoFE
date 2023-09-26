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
    <div className="flex items-stretch mx-auto">
      <SidebarUser
        username={user?.name || "User"}
        avatar={user?.avatar || "/avatar.avif"}
      ></SidebarUser>
      <div className="m-5 w-2/3">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Information;
