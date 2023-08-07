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
      <div className="border-b-2 border-gray-300">
        <h2 className="text-center font-bold text-2xl">Résumé</h2>
        <div className="text-lg">
          Manager your résumé to protect your account
        </div>
      </div>
      {userRef.current && (
        <div className="my-5">
          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <div className="p-1.5">
              <span className="font-semibold w-40 mr-5 inline-block text-right">
                Username:
              </span>
              <span>{userRef.current?.username || "username"}</span>
            </div>
            <div className="p-1.5">
              <span className="font-semibold w-40 mr-5 inline-block text-right">
                Name:
              </span>
              <input
                type="text"
                name="name"
                className="border rounded-md border-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent p-1.5"
                defaultValue={userRef.current?.name || "User"}
                onChange={(e) => {
                  userRef.current.name = e.target.value;
                }}
              ></input>
            </div>
            <div className="p-1.5">
              <span className="font-semibold w-40 mr-5 inline-block text-right">
                Email:
              </span>
              <span>{userRef.current?.email || "Email"}</span>
              <button className="border border-green-200 bg-green-500 p-1.5 rounded-md hover:bg-green-600 ml-3 text-white">
                Change
              </button>
            </div>
            <div className="p-1.5">
              <span className="font-semibold w-40 mr-5 inline-block text-right">
                Phone:
              </span>
              <span>{userRef.current?.phone || "0000000000"}</span>
              <a className="border border-green-200 bg-green-500 p-1.5 rounded-md hover:bg-green-600 ml-3 text-white">
                Change
              </a>
            </div>
            <div className="p-1.5">
              <label
                htmlFor="gender"
                className="font-semibold w-40 mr-5 inline-block text-right"
              >
                Gender:
              </label>
              <select
                id="gender"
                name="gender"
                defaultValue={genderList[userRef.current.gender]}
                className="border rounded-md border-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent px-2"
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
            <div className="p-1.5">
              <span className="font-semibold w-40 mr-5 inline-block text-right">
                Birthday:
              </span>
              <div className="inline-block">
                <input
                  type="date"
                  defaultValue={userRef.current?.DOB}
                  className="border rounded-md px-2 border-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
                ></input>
              </div>
            </div>
            <div className="p-1.5 inline-block ml-[180px] w-32">
              <button
                type="submit"
                className="border border-green-200 p-1.5 w-full rounded-md bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default Resume;
