import Cookies from "js-cookie";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChangeGenderToNumber, changeDateToString } from "../../helpers/helper";
import axios from "axios";
const genderList = ["Other", "Male", "Female"];

const Resume = () => {
  const userRef = useRef();
  const overlayRef = useRef();
  const [isMouted, setIsMouted] = useState(false);
  const [data, setData] = useState({});
  useEffect(() => {
    userRef.current = JSON.parse(Cookies.get("user") || "{}");
    setIsMouted(true);
    console.log(changeDateToString(userRef.current?.DOB || ""));
    console.log(userRef.current);
    return () => {
      userRef.current = null;
      setIsMouted(false);
    };
  }, [isMouted]);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (data.gender) data.gender = ChangeGenderToNumber(data.gender);
    console.log(data);
    try {
      const res = await axios.post(
        `http://localhost:20474/user/api/update/${userRef.current._id}`,
        data
      );
      if (res.data) {
        Cookies.set("token", res.data.token, { expires: 1 / 24 });
        Cookies.set("user", JSON.stringify(res.data.user), { expires: 1 / 24 });

        console.log(userRef.current);
        console.log(changeDateToString(userRef.current?.DOB || ""));
        overlayRef.current.classList.remove("hidden");
        overlayRef.current.classList.add("flex");
        setTimeout(() => {
          overlayRef.current.classList.add("hidden");
          overlayRef.current.classList.remove("flex");
        }, 2000);
        navigate("/user/information/resume");
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="flex flex-col min-w-max p-2 shadow-md bg-gray-50 border rounded-lg h-full mx-10">
      <div className="border-b-2 border-gray-300 ml-3">
        <h2 className=" font-bold text-2xl">Résumé</h2>
        <div className="text-lg">
          Manager your résumé to protect your account
        </div>
      </div>
      {userRef.current && (
        <div className="my-5 flex gap-2 mx-5">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-3 min-w-max  pl-5 w-full"
          >
            <div className="p-1.5">
              <div className="font-semibold w-16 sm:w-32 mr-5 inline-block text-right">
                Username:
              </div>
              <span>{userRef.current?.username || "username"}</span>
            </div>
            <div className="p-1.5">
              <span className="font-semibold w-16 sm:w-32 mr-5 inline-block text-right">
                Name:
              </span>
              <input
                type="text"
                name="name"
                className="border rounded-md border-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent p-1.5"
                defaultValue={userRef.current?.name || "User"}
                onChange={(e) => {
                  setData({ ...data, name: e.target.value });
                }}
              ></input>
            </div>
            <div className="p-1.5">
              <span className="font-semibold w-16 sm:w-32 mr-5 inline-block text-right">
                Email:
              </span>
              <span>{userRef.current?.email || "Email"}</span>
              <span
                className="border border-green-200 bg-green-500 p-1.5 rounded-md hover:bg-green-600 ml-3 text-white cursor-pointer"
                href="change-email"
                onClick={() => {
                  navigate("/user/information/change-email");
                }}
              >
                Change
              </span>
            </div>
            <div className="p-1.5">
              <span className="font-semibold w-16 sm:w-32 mr-5 inline-block text-right">
                Phone:
              </span>
              <span>{userRef.current?.phone || "0000000000"}</span>
              <a className="border border-green-200 bg-green-500 p-1.5 rounded-md hover:bg-green-600 ml-3 text-white cursor-pointer">
                Change
              </a>
            </div>
            <div className="p-1.5">
              <label
                htmlFor="gender"
                className="font-semibold w-16 sm:w-32 mr-5 inline-block text-right"
              >
                Gender:
              </label>
              <select
                id="gender"
                name="gender"
                defaultValue={genderList[userRef.current.gender]}
                className="border rounded-md border-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent px-2 py-1.5"
                onChange={(e) => {
                  setData({ ...data, gender: e.target.value });
                }}
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
              <span className="font-semibold w-16 sm:w-32 mr-5 inline-block text-right">
                Birthday:
              </span>
              <div className="inline-block">
                <input
                  type="date"
                  defaultValue={changeDateToString(userRef.current?.DOB || "")}
                  className="border rounded-md px-2 py-1.5 border-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
                  onChange={(e) => {
                    setData({ ...data, DOB: e.target.value });
                    console.log(e.target.value);
                  }}
                ></input>
              </div>
            </div>
            <div className="p-1.5 inline-block sm:ml-[148px] ml-[84px] w-32">
              <button
                type="submit"
                className="border border-green-200 p-1.5 w-full rounded-md bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent text-white font-semibold"
              >
                Save
              </button>
            </div>
          </form>
          <div
            id="overlay"
            className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-70 items-center justify-center hidden"
            ref={overlayRef}
          >
            <div id="messageBox" className="bg-white p-4 rounded-md">
              <p className="mb-4">{}</p>
              <button
                id="closeButton"
                className="bg-blue-500 text-white px-4 py-2 rounded"
              >
                Close
              </button>
            </div>
          </div>
          <div className="w-2/5 min-w-max flex flex-col justify-center items-center gap-2 border-l-2 border-gray-300 px-5">
            <div className="w-32 h-32 rounded-full">
              <img
                src={userRef.current?.avatar || "/avatar.avif"}
                alt="avatar"
                className="w-32 h-32 rounded-full object-cover  "
              ></img>
            </div>
            <div>
              <button className="border border-green-200 bg-green-500 p-1.5 rounded-md hover:bg-green-600 text-white">
                Change
              </button>
            </div>
            <div>
              Maximum file size 1 MB <br /> Format: .JPEG, .PNG
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Resume;
