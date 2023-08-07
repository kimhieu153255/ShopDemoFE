import Cookies from "js-cookie";
import { useEffect, useRef, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const RegisterStore = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const userRef = useRef();
  useEffect(() => {
    if (Cookies.get("token")) {
      navigate("/");
    }
    userRef.current = JSON.parse(Cookies.get("user") || "{}");
    return () => (userRef.current = null);
  }, [navigate, userRef]);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);
  };

  return (
    <div>
      <div className="flex justify-center items-center my-3 flex-wrap">
        <button
          onClick={() => navigate("/")}
          className="absolute translate-x-0 -translate-y-1 right-5 top-5 bg-green-400 p-2 rounded-full hover:bg-green-500 transition-all text-white"
        >
          <FaArrowLeft />
        </button>
        <div className="sm:w-2/6 w-3/5 mx-auto bg-gray-100 shadow-md sm:p-16 p-10 border rounded-md">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-1.5 mx-auto">
              <h1 className="text-center font-bold text-3xl mb-5">Register</h1>
              <div className="flex flex-col gap-1">
                <label htmlFor="boss" className="font-semibold">
                  Boss
                </label>
                <input
                  type="text"
                  name="boss"
                  id="boss"
                  className="border-2 border-gray-400 rounded-md p-2 focus:border-green-500 focus:outline-none focus:ring-green-300 transition-all"
                  required
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
                  required
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="name" className="font-semibold">
                  Name Store
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="border-2 border-gray-400 rounded-md p-2 focus:border-green-500 focus:outline-none focus:ring-green-300 transition-all"
                  required
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="boss" className="font-semibold">
                  Address
                </label>
                <input
                  type="text"
                  name="address"
                  id="address"
                  className="border-2 border-gray-400 rounded-md p-2 focus:border-green-500 focus:outline-none focus:ring-green-300 transition-all"
                  required
                />
              </div>
              {error && (
                <div className="text-red-500 text-sm font-semibold">
                  {error}
                </div>
              )}
              <div className="flex flex-col pt-5">
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
    </div>
  );
};

export default RegisterStore;
