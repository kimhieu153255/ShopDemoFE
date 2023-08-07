import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const RegisterUser = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({});
  const [error, setError] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(data);
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
        <form method="post" action="http://localhost:3000/user/register">
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
              />
            </div>
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
