// import React from "react";

const VerifyEmail = () => {
  return (
    <div className="p-5 flex flex-col gap-3 justify-center items-center border rounded-md bg-gray-100 w-1/2 min-w-max">
      <h1 className="font-bold text-xl">VerifyEmail</h1>
      <form className="text-center">
        <div>
          <span className="font-semibold text-lg">Code: </span>
          <input
            type="text"
            maxLength={6}
            className="shadow appearance-none rounded w-52 text-4xl py-2 text-center leading-tight focus:outline-none focus:shadow-outline tracking-[10px]"
          />
        </div>
        <button
          type="submit"
          className="bg-green-500 p-2 font-semibold text-lg rounded-lg mt-3 w-5"
        >
          Verify
        </button>
      </form>
    </div>
  );
};

export default VerifyEmail;
