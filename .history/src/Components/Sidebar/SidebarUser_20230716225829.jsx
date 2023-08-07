// eslint-disable-next-line react/prop-types, no-unused-vars
const SidebarUser = ({ username, avatar }) => {
  return (
    <div className="flex flex-col w-1/6 bg-gray-100">
      <div>
        <div>
          <div className="border border-green-500 ring-gray-100 inline-block rounded-lg">
            <img
              src={avatar}
              alt="avatar"
              className="w-10 h-10 rounded-full inline-block object-cover"
            />
          </div>
          <div>{username}</div>
        </div>
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
