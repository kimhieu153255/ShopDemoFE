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
import Cart from "./Pages/Cart";
import { CartProvider } from "./Components/Contexts/CartContext";
import { StoreProvider } from "./Components/Contexts/StoreContext";
import { AuthProvider } from "./Components/Contexts/AuthContext";
import AddCard from "./Components/Card/AddCard";

function App() {
  return (
    <>
      <AuthProvider>
        <Routes>
          <Route
            path="/"
            element={
              <CartProvider>
                <Nav></Nav>
              </CartProvider>
            }
          >
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
              <Route path="cart" element={<Cart></Cart>} />
            </Route>
            <Route path="/shop/add-product" element={<AddCard></AddCard>} />
            <Route
              path="/shop/:category/:page"
              element={
                <StoreProvider>
                  <Store></Store>
                </StoreProvider>
              }
            />
          </Route>
          <Route
            path="/register-store"
            element={<RegisterStore></RegisterStore>}
          />
          <Route path="/user/login" element={<LoginUser></LoginUser>} />
          <Route
            path="/user/register"
            element={<RegisterUser></RegisterUser>}
          />
          <Route path="*" element={<ErrorPage></ErrorPage>} />
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
