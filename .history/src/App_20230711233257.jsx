import { Routes, Route, Switch } from "react-router-dom";
import About from "./Pages/About";
import User from "./Pages/User";
import Home from "./Pages/Home";
import LoginPage from "./Pages/LoginPage";
function App() {
  return (
    <>
      <Routes>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/about" component={About} />
          <Route path="/user" component={User} />
          <Route path="/login" component={LoginPage} />
        </Switch>
      </Routes>
    </>
  );
}

export default App;
