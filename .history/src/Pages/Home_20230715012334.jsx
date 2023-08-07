import Cookies from "js-cookie";

const Home = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    Cookies.remove("token");
    Cookies.remove("user");
    navigate("/login");
  };
  return (
    <div>
      <h1>Home Page</h1>
      <button
        className="bg-green-500 hover:bg-green-600 text-white font-semibold p-2 rounded-md"
        onClick={handleClick}
      >
        logout
      </button>
    </div>
  );
};

export default Home;
