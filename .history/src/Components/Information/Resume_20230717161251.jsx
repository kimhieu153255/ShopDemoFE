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
          <span>Name:</span>
          <span>{user?.name || "User"}</span>
        </div>
      </div>
    </div>
  );
};

export default Resume;
