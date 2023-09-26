import { set } from "lodash";
import { useState } from "react";

const ChangePhone = () => {
  const [newPhone, setNewPhone] = useState("");
  const [confirmNewPhone, setConfirmNewPhone] = useState("");
  const [error, setError] = useState("");
  return (
    <div className="flex flex-col gap-3 justify-center bg-gray-100 border rounded-md mx-auto h-full">
      <h2 className="font-bold text-2xl text-center mb-5">
        Change Phone Number
      </h2>
      <div className="flex flex-col justify-center w-2/3 mx-auto gap-5 text-lg my-5">
        <div className="flex flex-col gap-2">
          <label htmlFor="newPhone" className="font-semibold text-lg">
            New Phone Number
          </label>
          <input
            type="text"
            id="newPhone"
            name="newPhone"
            placeholder="New Phone Number"
            className="px-3 py-1 border rounded-md border-gray-300 focus:outline-none focus:ring-1 focus:ring-green-500"
            required
            onChange={(e) => setNewPhone(e.target.value)}
          ></input>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="confirmNewPhone" className="font-semibold text-lg">
            Confirm New Phone Number
          </label>
          <input
            type="text"
            id="confirmNewPhone"
            name="confirmNewPhone"
            placeholder="Confirm New Phone Number"
            className="px-3 py-1 border rounded-md border-gray-300 focus:outline-none focus:ring-1 focus:ring-green-500"
            required
            onChange={(e) => setConfirmNewPhone(e.target.value)}
            onBlur={(e) => {
              if (e.target.value !== newPhone) {
                setError("Confirm phone number does not match");
              }
            }}
          ></input>
          {error && <div className="text-red-500 font-semibold">{error}</div>}
        </div>
        <button className="bg-green-500 text-white px-3 py-1 rounded-md hover:bg-green-600 transition-all">
          Change
        </button>
      </div>
    </div>
  );
};

export default ChangePhone;
