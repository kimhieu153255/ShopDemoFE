import { NavLink } from "react-router-dom";

const arrSidebar = [
  {
    title: "My account",
    content: [
      { title: "Résumé", path: "/user/information/resume" },
      { title: "Address", path: "/user/information/address" },
      { title: "Change password", path: "/user/information/changePassword" },
      {
        title: "Setting notification",
        path: "/user/information/settingNotification",
      },
    ],
  },
  {
    title: "My order",
  },
  {
    title: "Notification",
  },
  {
    title: "Voucher Store",
  },
  {
    title: "Shop coint",
  },
];

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
      {arrSidebar &&
        arrSidebar.map((item) => (
          <div key={item.title}>
            <div className="py-2">{item.title}</div>
            <div className="flex flex-col gap-1">
              {item.content &&
                item.content.map((content) => (
                  <NavLink
                    key={content.title}
                    to={content.path}
                    className={({ isActive }) =>
                      isActive ? "text-green-5000 text-white" : ""
                    }
                  >
                    {content.title}
                  </NavLink>
                ))}
            </div>
          </div>
        ))}
    </div>
  );
};

export default SidebarUser;
