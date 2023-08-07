const LoginUser = () => {
  return (
    <div className="w-2/5 mx- py-5 h-[350px] bg-gray-100 shadow-sm p-5">
      <form
        method="post"
        className="flex flex-col gap-4 mx-auto"
        action="http://localhost:3000/user/login"
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            className="border-2 border-gray-400 rounded-md p-2"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            className="border-2 border-gray-400 rounded-md p-2"
          />
        </div>
        <div className="flex flex-col gap-2">
          <button
            type="submit"
            className="bg-green-500 text-white rounded-md p-2"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginUser;
