// import React from "react";

const VerifyEmail = () => {
  return (
    <div className="p-5 flex flex-col">
      <h1 className="font-bold text-xl">VerifyEmail</h1>
      <form>
        <span className="font-semibold text-lg">Code: </span>
        <input
          type="text"
          maxLength={6}
          className="shadow appearance-none rounded w-52 text-4xl py-2 text-center leading-tight focus:outline-none focus:shadow-outline tracking-[10px]"
        />
      </form>
    </div>
  );
};

export default VerifyEmail;
