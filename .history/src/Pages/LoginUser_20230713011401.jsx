import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
const LoginUser = () => {
  const navigate = useNavigate();
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="sm:w-2/6 w-3/5 mx-auto bg-gray-100 shadow-md sm:p-16 p-10 border rounded-md">
        <button
          onClick={() => navigate("/")}
          className="absolute translate-x-0 -translate-y-1 top-0 left-0 bg-gray-200 p-2 rounded-full hover:bg-gray-300 transition-all"
        >
          <FaArrowLeft />
        </button>
        <form
          method="post"
          className="flex flex-col gap-4 mx-auto"
          action="http://localhost:3000/user/login"
        >
          <h1 className="text-center font-bold text-3xl">Login</h1>
          <div className="flex flex-col gap-2">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              className="border-2 border-gray-400 rounded-md p-2 focus:border-green-500 focus:outline-none focus:ring-green-300 transition-all"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              className="border-2 border-gray-400 rounded-md p-2 focus:border-green-500 focus:outline-none focus:ring-green-300 transition-all"
            />
          </div>
          <div className="flex flex-col pb-5">
            <button
              type="submit"
              className="bg-green-500 text-white rounded-md p-2 hover:bg-green-600 "
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
