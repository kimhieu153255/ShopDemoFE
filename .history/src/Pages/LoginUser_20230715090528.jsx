import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import jwt from "jsonwebtoken";
import { useEffect, useState } from "react";
import cryptojs from "crypto-js";
import axios from "axios";
import Cookies from "js-cookie";
const LoginUser = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({});
  const [error, setError] = useState("");
  useEffect(() => {
    if (Cookies.get("token")) {
      navigate("/");
    }
  }, [navigate]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    data.password
      ? (data.password = cryptojs.MD5(data.password).toString())
      : null;
    console.log(data);
    try {
      const res = await axios.post(
        "http://localhost:20474/user/api/login",
        data
      );
      if (res.data) {
        Cookies.set("user", res.data.user);
        const expire = jwt.decode(res.data.token).exp;
        Cookies.set("token", res.data.token, { expires: Date.now() + expire });

        navigate("/");
      }
    } catch (err) {
      console.log(err);
      setError(err.response.data);
    }
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <button
        onClick={() => navigate("/")}
        className="absolute translate-x-0 -translate-y-1 right-5 top-5 bg-green-400 p-2 rounded-full hover:bg-green-500 transition-all text-white"
      >
        <FaArrowLeft />
      </button>
      <div className="sm:w-2/6 w-3/5 mx-auto bg-gray-100 shadow-md sm:p-16 p-10 border rounded-md">
        <form className="flex flex-col gap-4 mx-auto" onSubmit={handleSubmit}>
          <h1 className="text-center font-bold text-3xl mb-5">Login</h1>
          <div className="flex flex-col gap-2 py-1">
            <label htmlFor="email" className="font-semibold">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="border-2 border-gray-400 rounded-md p-2 focus:border-green-500 focus:outline-none focus:ring-green-300 transition-all"
              onChange={(e) => setData({ ...data, email: e.target.value })}
            />
          </div>
          <div className="flex flex-col gap-2 py-1">
            <label htmlFor="password" className="font-semibold">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className="border-2 border-gray-400 rounded-md p-2 focus:border-green-500 focus:outline-none focus:ring-green-300 transition-all"
              onChange={(e) => setData({ ...data, password: e.target.value })}
            />
          </div>
          {error && (
            <div className="text-red-500 text-sm font-semibold">{error}</div>
          )}
          <div className="flex flex-col pt-10">
            <button
              type="submit"
              className="bg-green-500 text-white rounded-md p-2 hover:bg-green-600 text-md font-semibold transition-all"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginUser;
