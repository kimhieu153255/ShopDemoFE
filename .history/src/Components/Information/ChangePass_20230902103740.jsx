import { useState } from "react";

const ChangePass = () => {
  const [pass, setPass] = useState("");
  const [newPass, setNewPass] = useState("");
  const [reNewPass, setReNewPass] = useState("");
  const [errorNewPhone, setErrorNewPhone] = useState("");
  return (
    <div className="flex flex-col gap-3 justify-center bg-gray-100 border rounded-md mx-auto h-full">
      <h2 className="font-bold text-2xl text-center mb-5">Change Password</h2>
      <form
        className="flex flex-col justify-center w-2/3 mx-auto gap-5 text-lg my-5"
        // onSubmit={handleSubmit}
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="newPhone" className="font-semibold text-lg">
            Current Password
          </label>
          <input
            type="text"
            id="newPhone"
            name="newPhone"
            placeholder="New Phone Number"
            className="px-3 py-1 border rounded-md border-gray-300 focus:outline-none focus:ring-1 focus:ring-green-500"
            required
            onChange={(e) => setPass(e.target.value)}
          ></input>
          {/* {errorNewPhone && (
            <div className="text-red-500 font-semibold">{errorNewPhone}</div>
          )} */}
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="newPass" className="font-semibold text-lg">
            New Password
          </label>
          <input
            type="text"
            id="newPass"
            name="newPass"
            placeholder="New Password"
            className="px-3 py-1 border rounded-md border-gray-300 focus:outline-none focus:ring-1 focus:ring-green-500"
            required
            onChange={(e) => setNewPass(e.target.value)}
          ></input>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="reNewPass" className="font-semibold text-lg">
            Re-type New Password
          </label>
          <input
            type="text"
            id="reNewPass"
            name="reNewPass"
            placeholder="Re-type New Password"
            className="px-3 py-1 border rounded-md border-gray-300 focus:outline-none focus:ring-1 focus:ring-green-500"
            required
            onChange={(e) => setReNewPass(e.target.value)}
            onBlur={(e) => {
              if (e.target.value !== newPass) {
                setErrorNewPhone("New Password doesn't match");
              }
            }}
          ></input>
          {errorNewPhone && (
            <div className="text-red-500 font-semibold">{errorNewPhone}</div>
          )}
        </div>
        <button className="bg-green-500 text-white px-3 py-1 rounded-md hover:bg-green-600 transition-all">
          Change
        </button>
      </form>
    </div>
  );
};

export default ChangePass;
