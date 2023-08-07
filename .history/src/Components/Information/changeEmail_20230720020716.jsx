import axios from "axios";
import { useState } from "react";
import { validateEmail } from "../../helpers/helper";
import Cookies from "js-cookie";

const ChangeEmail = () => {
  console.log("changeEmail");
  const [err, setErr] = useState("");
  const [success, setSuccess] = useState("");
  const [data, setData] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    setData({ ...data, id: JSON.parse(Cookies.get("user"))?._id || "" });
    const { newEmail, confirmNewEmail } = data;
    if (!newEmail || !confirmNewEmail) {
      setErr("Please fill all the fields");
      return;
    }
    if (newEmail !== confirmNewEmail) {
      setErr("Email does not match");
      return;
    }
    if (!validateEmail(newEmail)) {
      setErr("Invalid email");
      return;
    }
    try {
      const res = await axios.post(
        "http://localhost:20474/user/api/verify/email",
        data
      );
      if (res.data) {
        setErr("Change email successfully");
        console.log(res.data);
      }
    } catch (err) {
      setErr(err.response.data);
    }
  };

  return (
    <div className="w-1/2 mx-auto bg-gray-100 p-5 border rounded-lg shadow-md min-w-max">
      <div className="font-bold text-lg text-center mb-3">changeEmail</div>
      <form
        className="flex flex-col gap-2 items-center"
        onSubmit={handleSubmit}
      >
        <div>
          <label className="inline-block w-40  font-semibold p-1.5">
            New Email:
          </label>
          <input
            type="email"
            name="newEmail"
            id="newEmail"
            className="p-1.5 border rounded-md border-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
            onChange={(e) => setData({ ...data, newEmail: e.target.value })}
          />
        </div>
        <div>
          <label className="inline-block w-40  font-semibold p-1.5">
            Confirm New Email:
          </label>
          <input
            type="email"
            name="confirmNewEmail"
            id="confirmNewEmail"
            className="p-1.5 border rounded-md border-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
            onChange={(e) =>
              setData({ ...data, confirmNewEmail: e.target.value })
            }
          />
        </div>
        {err && (
          <div className="px-1.5 w-full text-center text-red-500 font-semibold">
            {err}
          </div>
        )}
        {success && (
          <div className="px-1.5 w-full text-center text-green-500 font-semibold">
            {success}
          </div>
        )}
        <div className="px-1.5 w-40">
          <button
            type="submit"
            className="w-full bg-green-500 p-1.5 rounded-md border border-green-500 text-white  hover:bg-green-600 transition-all"
          >
            Change
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChangeEmail;
