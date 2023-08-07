import Cookies from "js-cookie";
// import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    if (Cookies.get("token")) {
      Cookies.remove("token");
      Cookies.remove("user");
      navigate("/login");
      return;
    }
  };
  return (
    <div>
      <h1>Home Page</h1>
    </div>
  );
};

export default Home;
