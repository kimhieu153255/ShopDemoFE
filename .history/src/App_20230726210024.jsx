import { Route, Routes } from "react-router-dom";
import Nav from "./Components/Layouts/Nav";
import Home from "./Pages/Home";
import About from "./Pages/About";
import LoginUser from "./Pages/LoginUser";
import RegisterUser from "./Pages/RegisterUser";
import ErrorPage from "./Pages/ErrorPage";
import Information from "./Pages/Infomation";
import Resume from "./Components/Information/Resume";
import Address from "./Components/Information/Address";
import ChangePass from "./Components/Information/ChangePass";
import SettingInfo from "./Components/Information/SettingInfo";
import ChangeEmail from "./Components/Information/changeEmail";
import VerifyEmail from "./Components/Information/verifyEmail";
import RegisterStore from "./Pages/RegisterStore";
import Store from "./Pages/Store";

// import CartItem from "./Components/Cart/CartItem";
// import CartList from "./Components/Cart/CartList";

// const data = {
//   img: "/avatar.avif",
//   // color: ["red", "blue", "green"],
//   size: ["S", "M", "L"],
//   price: 150,
//   number: 1,
//   name: "this is name for test",
// };

function App() {
  return (
    <>
      <Routes>
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
        <Route
          path="/register-store"
          element={<RegisterStore></RegisterStore>}
        />
        <Route path="/shop" element={<Store></Store>} />
        <Route path="/user/login" element={<LoginUser></LoginUser>} />
        <Route path="/user/register" element={<RegisterUser></RegisterUser>} />
        <Route path="*" element={<ErrorPage></ErrorPage>} />
      </Routes>
      {/* <CartItem
        img={data.img}
        color={data.color}
        size={data.size}
        price={data.price}
        name={data.name}
      ></CartItem> */}
      {/* <div>
        <Store></Store>
      </div> */}
    </>
  );
}

export default App;
