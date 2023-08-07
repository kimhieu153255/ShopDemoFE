import { Route, Routes } from "react-router-dom";
import Nav from "./Components/Nav";
import Home from "./Pages/Home";
import About from "./Pages/About";
import LoginUser from "./Pages/LoginUser";
import RegisterUser from "./Pages/RegisterUser";
import ErrorPage from "./Pages/ErrorPage";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Nav></Nav>}>
          <Route path="/" element={<Home></Home>} />
          <Route path="/home" element={<Home></Home>} />
          <Route path="/about" element={<About></About>} />
          <Route path="/register" element={<RegisterUser></RegisterUser>} />
        </Route>
        <Route path="/login" element={<LoginUser></LoginUser>} />
        <Route path="*" element={<ErrorPage></ErrorPage>} />
      </Routes>
    </>
  );
}

export default App;
