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
          <Route exact path="/about" component={About} />
          <Route exact path="/user" component={User} />
          <Route exact path="/login" component={LoginPage} />
        </switch>
      </Router>
    </>
  );
}

export default App;
