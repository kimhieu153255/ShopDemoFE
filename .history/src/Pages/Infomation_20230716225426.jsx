import { useEffect, useState } from "react";
import SidebarUser from "../Components/Sidebar/SidebarUser";
import Cookies from "js-cookie";

const Information = () => {
  const [user, setUser] = useState({});
  useEffect(() => {
    setUser(JSON.parse(Cookies.get("user")?.toString() || "{}"));
  }, []);

  return (
    <SidebarUser
      username={user?.name || "User"}
      avatar={user?.avatar || "/avatar.avif"}
    ></SidebarUser>
  );
};

export default Information;
