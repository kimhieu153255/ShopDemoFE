import { Router, Route, Switch, Link } from "react-router-dom";
import About from "./Pages/About";
import User from "./Pages/User";
import Home from "./Pages/Home";
import LoginPage from "./Pages/LoginPage";
function App() {
  return (
    <>
      <Router>
        <switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/user" component={User} />
          <Route path="/login" component={LoginPage} />
        </switch>
      </Router>
    </>
  );
}

export default App;
