import Cookies from "js-cookie";
import { useEffect, useRef } from "react";

/* eslint-disable react/prop-types */
const genderList = ["Other", "Male", "Female"];
const Resume = () => {
  const userRef = useRef();
  useEffect(() => {
    userRef.current = JSON.parse(Cookies.get("user") || "{}");
    console.log(userRef.current);
  }, [userRef]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <div>
        <h3>Résumé</h3>
        <div>Manager your résumé to protect your account</div>
      </div>
      {userRef.current && (
        <form onSubmit={handleSubmit}>
          <div>
            <span>Username:</span>
            <span>{userRef.current?.username || "username"}</span>
          </div>
          <div>
            <span>Name:</span>
            <input
              type="text"
              name="name"
              defaultValue={userRef.current?.name || "User"}
              onChange={(e) => {
                userRef.current.name = e.target.value;
              }}
            ></input>
          </div>
          <div>
            <span>Email:</span>
            <span>{userRef.current?.email || "Email"}</span>
            <a>Change</a>
          </div>
          <div>
            <span>Phone:</span>
            <span>{userRef.current?.phone || "0000000000"}</span>
            <a>Change</a>
          </div>
          <div>
            <label htmlFor="gender">Gender:</label>
            <select id="gender" name="gender">
              {genderList.map((item, index) => {
                if (index === userRef.current.gender)
                  return (
                    <option
                      key={index}
                      defaultValue={index}
                      selected
                      onClick={(e) => {
                        userRef.current.gender = e.target.value;
                      }}
                    >
                      {item}
                    </option>
                  );
                else
                  return (
                    <option
                      key={index}
                      defaultValue={index}
                      onClick={(e) => {
                        userRef.current.gender = e.target.value;
                      }}
                    >
                      {item}
                    </option>
                  );
              })}
            </select>
          </div>
          <div>
            <span>Birthday:</span>
            <div>
              <input type="date" defaultValue={userRef.current?.DOB}></input>
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
