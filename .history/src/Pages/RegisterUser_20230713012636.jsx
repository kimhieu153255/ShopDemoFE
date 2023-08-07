const RegisterUser = () => {
  return (
    <div className="flex justify-center flex-row">
      <form method="post" action="http://localhost:3000/user/register">
        <div className="flex flex-col gap-4 mx-auto">
          <h1 className="text-center font-bold text-3xl mb-5">Register</h1>
          <div className="flex flex-col gap-2 ">
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
          <div className="flex flex-col gap-2 ">
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
          <div className="flex flex-col gap-2 ">
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
          <div className="flex flex-col gap-2 ">
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
          <div className="flex flex-col gap-2 ">
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
          <div className="flex flex-col gap-2 ">
            <label htmlFor="address" className="font-semibold">
              Address
            </label>
            <input
              type="text"
              name="address"
              id="address"
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
  );
};

export default RegisterUser;
