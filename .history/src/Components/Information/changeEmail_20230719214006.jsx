import React from "react";

const changeEmail = ({ email }) => {
  return (
    <div>
      <h1>changeEmail</h1>
      <form>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" />
        </div>
      </form>
    </div>
  );
};

export default changeEmail;
