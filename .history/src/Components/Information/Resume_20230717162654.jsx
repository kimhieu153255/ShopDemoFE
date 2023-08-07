import { useState } from "react";

/* eslint-disable react/prop-types */
const genderList = ["Male", "Female", "Other"];
const Resume = ({ user }) => {
  const [userM, setUserM] = useState({});
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <div>
        <h3>Résumé</h3>
        <div>Manager your résumé to protect your account</div>
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          <span>Username:</span>
          <span>{user?.username || "username"}</span>
        </div>
        <div>
          <span>Name:</span>
          <input
            type="text"
            name="name"
            defaultValue={user?.name || "User"}
            onChange={(e) => setUserM({ ...userM, name: e.target.value })}
          ></input>
        </div>
        <div>
          <span>Email:</span>
          <span>{user?.email || "Email"}</span>
          <a>Change</a>
        </div>
        <div>
          <span>Phone:</span>
          <span>{user?.phone || "0000000000"}</span>
          <a>Change</a>
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
        <div>
          <button type="submit">Save</button>
        </div>
      </form>
    </div>
  );
};

export default Resume;
