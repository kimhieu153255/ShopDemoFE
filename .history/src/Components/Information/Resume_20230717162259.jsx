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
            {genderList.map((item) => (
              <div key={item}>
                {item === user.gender ? (
                  <input type="radio" checked>
                    {item}
                  </input>
                ) : (
                  <input type="radio">{item}</input>
                )}
              </div>
            ))}
          </div>
        </div>
        <div>
          <span>Birthday:</span>
          <div>
            <input type="date" defaultValue={user.DOB}></input>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
