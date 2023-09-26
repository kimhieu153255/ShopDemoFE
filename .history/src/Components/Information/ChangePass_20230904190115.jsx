import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const ChangePass = () => {
  const [pass, setPass] = useState("");
  const [newPass, setNewPass] = useState("");
  const [isShowNewPass, setIsShowNewPass] = useState(false);
  const [reNewPass, setReNewPass] = useState("");
  const [isShowReNewPass, setIsShowReNewPass] = useState(false);
  const [errorNewPhone, setErrorNewPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit");
    if (newPass !== reNewPass) setErrorNewPhone("New Password doesn't match");
    else setErrorNewPhone("");
    try {
      const res = await axios.put(
        "http://localhost:5000/api/user/change-password",
        {
          newPassword: newPass,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
    } catch (err) {
      setErrorNewPhone(err.message);
    }
  };

  return (
    <div className="flex flex-col gap-1 justify-center bg-gray-100 border rounded-md mx-auto h-full">
      <h2 className="font-bold text-2xl text-center mb-5">Change Password</h2>
      <form
        className="flex flex-col justify-center w-2/3 mx-auto gap-3 text-lg my-5"
        // onSubmit={handleSubmit}
      >
        <div className="flex flex-col gap-2 relative">
          <label htmlFor="currentPass" className="font-semibold text-lg">
            Current Password
          </label>
          <input
            type="password"
            id="currentPass"
            name="currentPass"
            placeholder="Current Password"
            className="px-3 py-1 border rounded-md border-gray-300 focus:outline-none focus:ring-1 focus:ring-green-500"
            required
            onChange={(e) => setPass(e.target.value)}
          ></input>
        </div>
        <div className="flex flex-col gap-2 relative">
          <label htmlFor="newPass" className="font-semibold text-lg">
            New Password
          </label>
          <input
            {...(isShowNewPass ? { type: "text" } : { type: "password" })}
            id="newPass"
            name="newPass"
            placeholder="New Password"
            className="px-3 py-1 border rounded-md border-gray-300 focus:outline-none focus:ring-1 focus:ring-green-500"
            required
            onChange={(e) => setNewPass(e.target.value)}
          ></input>
          {isShowNewPass ? (
            <FaEye
              className="text-gray-500 absolute right-3 bottom-[10px] cursor-pointer"
              onClick={() => {
                setIsShowNewPass(false);
              }}
            ></FaEye>
          ) : (
            <FaEyeSlash
              className="text-gray-500 absolute right-3 bottom-[10px] cursor-pointer"
              onClick={() => {
                setIsShowNewPass(true);
              }}
            ></FaEyeSlash>
          )}
        </div>
        <div className="flex flex-col gap-2 relative">
          <label htmlFor="reNewPass" className="font-semibold text-lg">
            Re-type New Password
          </label>
          <input
            {...(isShowReNewPass ? { type: "text" } : { type: "password" })}
            id="reNewPass"
            name="reNewPass"
            placeholder="Re-type New Password"
            className="px-3 py-1 border rounded-md border-gray-300 focus:outline-none focus:ring-1 focus:ring-green-500"
            required
            onChange={(e) => setReNewPass(e.target.value)}
            onBlur={(e) => {
              if (e.target.value !== newPass)
                setErrorNewPhone("New Password doesn't match");
              else setErrorNewPhone("");
            }}
          ></input>
          {isShowReNewPass ? (
            <FaEye
              className="text-gray-500 absolute right-3 bottom-[10px] cursor-pointer"
              onClick={() => {
                setIsShowReNewPass(false);
              }}
            ></FaEye>
          ) : (
            <FaEyeSlash
              className="text-gray-500 absolute right-3 bottom-[10px] cursor-pointer"
              onClick={() => {
                setIsShowReNewPass(true);
              }}
            ></FaEyeSlash>
          )}
        </div>
        {errorNewPhone && (
          <div className="text-red-500 font-semibold">{errorNewPhone}</div>
        )}
        <button className="bg-green-500 text-white px-3 py-1 mt-5 rounded-md hover:bg-green-600 transition-all">
          Change
        </button>
      </form>
    </div>
  );
};

export default ChangePass;
