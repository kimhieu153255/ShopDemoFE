import { Route, Routes } from "react-router-dom";
import Nav from "./Components/Layouts/Nav";
import Home from "./Pages/Home";
import About from "./Pages/About";
import LoginUser from "./Pages/LoginUser";
import RegisterUser from "./Pages/RegisterUser";
import ErrorPage from "./Pages/ErrorPage";
import Imformation from "./Pages/Infomation";

// import CardList from "./Components/Card/CardList";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Nav></Nav>}>
          <Route path="/" element={<Home></Home>} />
          <Route path="/about" element={<About></About>} />
          {/* <Route
            path="/user/information"
            element={<Imformation></Imformation>}
          /> */}
          <Routes>
            <Route path="/user">
              <Route
                path="/Imformation"
                element={<Imformation></Imformation>}
              />
            </Route>
          </Routes>
        </Route>
        <Route path="/login" element={<LoginUser></LoginUser>} />
        <Route path="/register" element={<RegisterUser></RegisterUser>} />
        <Route path="*" element={<ErrorPage></ErrorPage>} />
      </Routes>
      {/* <CardList></CardList> */}
    </>
  );
}

export default App;
