const LoginUser = () => {
  return (
    //set height to 100vh
    <div className="h-screen flex justify-center items-center">
      <div className="w-2/5 mx-auto h-[350px] bg-gray-100 shadow-sm p-8 my-auto border rounded-sm">
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
          <div className="flex flex-col pb-5">
            <button
              type="submit"
              className="bg-green-500 text-white rounded-md p-2"
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
