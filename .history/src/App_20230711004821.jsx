import { Router, Route, Switch } from "react-router-dom";
import About from "./Pages/About";
import User from "./Pages/User";
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
            <User />
          </Route>
          <Route path="/">
            <Home />
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
