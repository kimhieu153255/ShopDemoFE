import Cookies from "js-cookie";
import { useEffect, useState } from "react";

/* eslint-disable react/prop-types */
const genderList = ["Male", "Female", "Other"];
const Resume = () => {
  const [userM, setUserM] = useState({});
  useEffect(() => {
    setUserM(JSON.parse(Cookies.get("user") || "{}"));
  }, [userM]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <div>
        <h3>Résumé</h3>
        <div>Manager your résumé to protect your account</div>
      </div>
      {userM && (
        <form onSubmit={handleSubmit}>
          <div>
            <span>Username:</span>
            <span>{userM?.username || "username"}</span>
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
            <label htmlFor="gender">Gender:</label>
            <div>
              {genderList.map((item) => (
                <div key={item}>
                  {item === user.gender ? (
                    <input
                      type="radio"
                      name="gender"
                      checked
                      defaultValue={item}
                    />
                  ) : (
                    <input type="radio" name="gender" defaultValue={item} />
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
      )}
    </div>
  );
};

export default Resume;
