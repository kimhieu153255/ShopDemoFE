/* eslint-disable react/prop-types */
const Resume = ({ user }) => {
  return (
    <div>
      <div>
        <h3>Résumé</h3>
        <div>Manager your résumé to protect your account</div>
      </div>
      <div>
        <div>
          <span>Username:</span>
          <span>{user?.username || "username"}</span>
        </div>
        <div>
          <span>Name:</span>
          <span>{user?.name || "User"}</span>
        </div>
        <div>
          <span>Phone:</span>
          <span>{user?.phone || "0000000000"}</span>
        </div>
      </div>
    </div>
  );
};

export default Resume;
