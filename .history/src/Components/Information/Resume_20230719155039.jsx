import Cookies from "js-cookie";
import { useEffect, useRef, useState } from "react";

/* eslint-disable react/prop-types */
const genderList = ["Other", "Male", "Female"];
const Resume = () => {
  const userRef = useRef();
  const [isMouted, setIsMouted] = useState(false);
  useEffect(() => {
    userRef.current = JSON.parse(Cookies.get("user") || "{}");
    setIsMouted(true);
    console.log(userRef.current);
    return () => {
      userRef.current = null;
      setIsMouted(false);
    };
  }, [isMouted]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="flex flex-col min-w-max p-5 bg-gray-50 border rounded-lg h-full">
      <div>
        <h2 className="text-center font-bold text-2xl">Résumé</h2>
        <div className="text-lg">
          Manager your résumé to protect your account
        </div>
      </div>
      {userRef.current && (
        <div>
          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <div className="">
              <span className="font-semibold w-40 mr-5 inline-block text-right">
                Username:
              </span>
              <span>{userRef.current?.username || "username"}</span>
            </div>
            <div>
              <span className="font-semibold w-40 mr-5 inline-block text-right">
                Name:
              </span>
              <input
                type="text"
                name="name"
                className="border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
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
              <select
                id="gender"
                name="gender"
                defaultValue={genderList[userRef.current.gender]}
              >
                {genderList.map((item, index) => {
                  if (index === userRef.current.gender)
                    return (
                      <option
                        key={index}
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
        </div>
      )}
    </div>
  );
};

export default Resume;
