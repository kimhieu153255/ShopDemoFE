import { useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Cookies from "js-cookie";

const VerifyEmail = () => {
  const { newEmail } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState({
    id: JSON.parse(Cookies.get("user"))?._id || "",
    newEmail,
  });
  const [err, setErr] = useState();
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("data: ", data);
    try {
      const res = await axios.post(
        "http://localhost:20474/user/api/verify/email/confirm",
        data
      );
      //lỗi
      console.log(res.data);
      if (res.data.err) {
        setErr(res.data.err);
        return;
      }
      Cookies.set("user", JSON.stringify(res.data),{expires: ""});
      navigate("/user/information/resume");
    } catch (error) {
      setErr(error.response.data);
    }
  };
  return (
    <div className="px-8 py-10 flex flex-col gap-3 justify-center items-center border rounded-md bg-gray-100 w-2/5 min-w-max mx-auto">
      <h1 className="font-bold text-xl">VerifyEmail</h1>
      <form className="text-center" onSubmit={handleSubmit}>
        <div>
          <span className="font-semibold text-lg">Code: </span>
          <input
            type="text"
            maxLength={6}
            className="shadow appearance-none rounded w-52 text-4xl py-2 text-center leading-tight focus:outline-none focus:shadow-outline tracking-[10px]"
            onChange={(e) => setData({ ...data, numberCode: e.target.value })}
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

export default VerifyEmail;
