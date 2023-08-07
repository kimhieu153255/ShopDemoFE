import { Router, Route, Switch } from "react-router-dom";
import About from "./Pages/About";
import Users from "./Pages/Users";
import Home from "./Pages/Home";
import LoginPage from "./Pages/LoginPage";
function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
