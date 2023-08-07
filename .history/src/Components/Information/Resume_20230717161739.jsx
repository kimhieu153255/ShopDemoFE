/* eslint-disable react/prop-types */
const genderList = ["Male", "Female", "Other"];
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
          <span>Email:</span>
          <span>{user?.email || "Email"}</span>
        </div>
        <div>
          <span>Phone:</span>
          <span>{user?.phone || "0000000000"}</span>
        </div>
        <div>
          <span>Gender:</span>
          <div>
            <input type="checkbox" value={"Male"} />
            <input type="checkbox" value={"Female"} />
            <input type="checkbox" value={"Other"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
