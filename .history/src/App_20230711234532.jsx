import { Routes, Route, NavLink } from "react-router-dom";
import About from "./Pages/About";
import User from "./Pages/User";
import Home from "./Pages/Home";
import LoginUser from "./Pages/LoginUser";
function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/user" component={User} />
        <Route path="/login" component={LoginUser} />
      </Routes>
    </>
  );
}

export default App;
