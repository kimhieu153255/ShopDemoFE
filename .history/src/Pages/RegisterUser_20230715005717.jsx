import axios from "axios";
import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const validateEmail = (input) => {
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  return emailRegex.test(input);
};

const validatePassword = (input) => {
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
  return passwordRegex.test(input);
  //công dụng: kiểm tra xem có chữ hoa, chữ thường, số, độ dài từ 6-20 ký tự
};

const RegisterUser = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({});
  const [error, setError] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(data);

    if (!data) setError("Please fill all the fields");
    if (data.password !== data.confirmPassword)
      setError("Password does not match");

    if (!validatePassword(data.password))
      setError(
        "Password must contain at least 1 uppercase, 1 lowercase letter and 1 number"
      );

    if (!validateEmail(data.email)) setError("Invalid email");

    try {
      const res = await axios.post(
        "http://localhost:20474/user/api/register",
        data
      );
      if (res.data) {
        navigate("/login");
      }
    } catch (err) {
      console.log(err);
      setError(err.response.data);
    }
  };
  return (
    <div className="h-screen flex justify-center items-center p-5 flex-wrap">
      <button
        onClick={() => navigate("/")}
        className="absolute translate-x-0 -translate-y-1 right-5 top-5 bg-green-400 p-2 rounded-full hover:bg-green-500 transition-all text-white"
      >
        <FaArrowLeft />
      </button>
      <div className="sm:w-2/6 w-3/5 mx-auto bg-gray-100 shadow-md sm:p-16 p-10 border rounded-md">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-2 mx-auto">
            <h1 className="text-center font-bold text-3xl mb-5">Register</h1>
            <div className="flex flex-col gap-1">
              <label htmlFor="name" className="font-semibold">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="border-2 border-gray-400 rounded-md p-2 focus:border-green-500 focus:outline-none focus:ring-green-300 transition-all"
                onChange={(e) => setData({ ...data, name: e.target.value })}
              />
            </div>
            <div className="flex flex-col gap-1 ">
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
            <div className="flex flex-col gap-1 ">
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
            <div className="flex flex-col gap-1 ">
              <label htmlFor="confirmPassword" className="font-semibold">
                Confirm Password
              </label>
              <input
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                className="border-2 border-gray-400 rounded-md p-2 focus:border-green-500 focus:outline-none focus:ring-green-300 transition-all"
                onChange={(e) =>
                  setData({ ...data, confirmPassword: e.target.value })
                }
              />
            </div>
            <div className="flex flex-col gap-1 ">
              <label htmlFor="phone" className="font-semibold">
                Phone
              </label>
              <input
                type="text"
                name="phone"
                id="phone"
                className="border-2 border-gray-400 rounded-md p-2 focus:border-green-500 focus:outline-none focus:ring-green-300 transition-all"
                onChange={(e) => setData({ ...data, phone: e.target.value })}
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
                Register
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterUser;
