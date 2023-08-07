import { Route, Routes } from "react-router-dom";
import Nav from "./Components/Layouts/Nav";
import Home from "./Pages/Home";
import About from "./Pages/About";
import LoginUser from "./Pages/LoginUser";
import RegisterUser from "./Pages/RegisterUser";
import ErrorPage from "./Pages/ErrorPage";
import Imformation from "./Pages/Infomation";
import Test from "./Pages/test";

// import CardList from "./Components/Card/CardList";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Nav></Nav>}>
          <Route path="/" element={<Home></Home>} />
          <Route path="/about" element={<About></About>} />
          <Route path="/user" element={<Imformation></Imformation>}>
            <Route path="/" element={<Imformation></Imformation>} />
            <Route path="/information" element={<Imformation></Imformation>} />
            <Route path="/test" element={<Test></Test>} />
          </Route>
        </Route>
        <Route path="/user/login" element={<LoginUser></LoginUser>} />
        <Route path="/user/register" element={<RegisterUser></RegisterUser>} />
        <Route path="*" element={<ErrorPage></ErrorPage>} />
      </Routes>
    </>
  );
}

export default App;
