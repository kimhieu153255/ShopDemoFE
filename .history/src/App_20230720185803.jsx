// import { Route, Routes } from "react-router-dom";
// import Nav from "./Components/Layouts/Nav";
// import Home from "./Pages/Home";
// import About from "./Pages/About";
// import LoginUser from "./Pages/LoginUser";
// import RegisterUser from "./Pages/RegisterUser";
// import ErrorPage from "./Pages/ErrorPage";
// import Information from "./Pages/Infomation";
// import Resume from "./Components/Information/Resume";
// import Address from "./Components/Information/Address";
// import ChangePass from "./Components/Information/ChangePass";
// import SettingInfo from "./Components/Information/SettingInfo";
// import ChangeEmail from "./Components/Information/ChangeEmail";
// import VerifyEmail from "./Components/Information/VerifyEmail";
import CartItem from "./Components/Cart/CartItem";

// import CardList from "./Components/Card/CardList";

const data = {
  img: "/avatar.avif",

};

function App() {
  return (
    <>
      {/* <Routes>
        <Route path="/" element={<Nav></Nav>}>
          <Route path="/" element={<Home></Home>} />
          <Route path="/about" element={<About></About>} />
          <Route path="/user">
            <Route path="information" element={<Information></Information>}>
              <Route path="resume" element={<Resume></Resume>} />
              <Route path="address" element={<Address></Address>} />
              <Route
                path="changePassword"
                element={<ChangePass></ChangePass>}
              />
              <Route
                path="settingNotification"
                element={<SettingInfo></SettingInfo>}
              />
              <Route
                path="change-email"
                element={<ChangeEmail></ChangeEmail>}
              />
              <Route
                path="verify-email/:newEmail"
                element={<VerifyEmail></VerifyEmail>}
              />
            </Route>
          </Route>
        </Route>
        <Route path="/user/login" element={<LoginUser></LoginUser>} />
        <Route path="/user/register" element={<RegisterUser></RegisterUser>} />
        <Route path="*" element={<ErrorPage></ErrorPage>} />
      </Routes> */}
      <CartItem></CartItem>
    </>
  );
}

export default App;
