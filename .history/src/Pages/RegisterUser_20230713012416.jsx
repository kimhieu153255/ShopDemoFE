const RegisterUser = () => {
  return (
    <div className="flex justify-center flex-row">
      <form method="post" action="http://localhost:3000/user/register">
        <input type="text" name="name" placeholder="Name" />
        <input type="email" name="email" />
        <input type="password" name="password" />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegisterUser;
