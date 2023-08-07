import { NavLink } from "react-router-dom";

// eslint-disable-next-line react/prop-types, no-unused-vars
const SidebarUser = ({ username, avatar }) => {
  return (
    <div className="flex flex-col w-1/6 bg-gray-100 px-10 gap-3 text-lg">
      <div className="flex items-center gap-3">
        <div className="border border-gray-400 ring-gray-100 inline-block rounded-full">
          <img
            src={avatar}
            alt="avatar"
            className="w-10 h-10 rounded-full inline-block object-cover"
          />
        </div>
        <div>{username}</div>
      </div>
      <div>
        <div className="py-2">My account</div>
        <div className="flex flex-col gap-1">
          <NavLink>Résemé</NavLink>
          <NavLink>Address</NavLink>
          <NavLink>Change password</NavLink>
          <NavLink>Setting notification</NavLink>
        </div>
      </div>
      <div>My order</div>
      <div>Notification</div>
      <div>Voucher Store</div>
      <div>Shop coint</div>
    </div>
  );
};

export default SidebarUser;
