import { Route, Routes } from "react-router-dom";
import Nav from "./Components/Nav";
import Home from "./Pages/Home";
import About from "./Pages/About";
import LoginUser from "./Pages/LoginUser";
import RegisterUser from "./Pages/RegisterUser";
function App() {
  return (
    <>
      <Routes>
        <Route path="/">
          <Nav />
          <Route path="/" element={<Home></Home>} />
          <Route path="about" element={<About></About>} />
          <Route path="dashboard" element={<h1>Dashboard</h1>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
