import axios from "axios";
import Cookies from "js-cookie";
import { useState } from "react";

const VerifyPhone = () => {
  const [err, setErr] = useState("");
  const [code, setCode] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = JSON.parse(Cookies.get("user")?.toString() || null);
      if (!user) {
        setErr("Something went wrong");
        return;
      } else setErr("");
      const res = await axios.post(
        `http://localhost:20474/user/api/verify-phone?userId=${user._id}`,
        { numberCode: code }
      );
      if (res.data) {
        console.log(res.data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="px-8 py-10 flex flex-col gap-3 justify-center items-center border rounded-md bg-gray-100 w-2/5 min-w-max mx-auto">
      <h1 className="font-bold text-xl">Verify Phone</h1>
      <form className="text-center" onSubmit={handleSubmit}>
        <div>
          <span className="font-semibold text-lg">Code: </span>
          <input
            type="text"
            maxLength={6}
            className="shadow appearance-none rounded w-52 text-4xl py-2 text-center leading-tight focus:outline-none focus:shadow-outline tracking-[10px]"
            onChange={(e) => setCode(e.target.value)}
            required
          />
        </div>
        {err && <p className="text-red-500">{err}</p>}
        <button
          type="submit"
          className="bg-green-500 p-2 font-semibold text-lg rounded-lg mt-3 w-20 min-w-fit"
        >
          Verify
        </button>
      </form>
    </div>
  );
};

export default VerifyPhone;
