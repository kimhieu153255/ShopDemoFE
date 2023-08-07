import { Router, Route, Switch, Link } from "react-router-dom";
import About from "./Pages/About";
import User from "./Pages/User";
import Home from "./Pages/Home";
import LoginPage from "./Pages/LoginPage";
function App() {
  return (
    <>
      <Router>
        <Link to="/about">About</Link>
        <Link to="/users">Users</Link>
        <Link to="/login">Login</Link>
      </Router>
    </>
  );
}

export default App;
