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
import { AuthProvider } from "./Components/Contexts/AuthContext";
import AddCard from "./Pages/AddCard";
import { Fragment } from "react";
import { ShopProvider } from "./Components/Contexts/ShopContext";
import Footer from "./Components/Layouts/Footer";
import TermOfUser from "./Pages/TermOfUser";
import PrivacyPolicy from "./Pages/PrivacyPolicy";

function App() {
  return (
    <Fragment>
      <AuthProvider>
        <Routes>
          <Route
            path="/"
            element={
              <CartProvider>
                <Nav></Nav>
                <Footer></Footer>
              </CartProvider>
            }
          >
            <Route path="/" element={<Home></Home>} />
            <Route path="/about" element={<About></About>} />
            <Route path="/term">
              <Route path="use" element={<TermOfUser></TermOfUser>} />
              <Route path="privacy" element={<PrivacyPolicy></PrivacyPolicy>} />
            </Route>
            <Route path="/support">
              <Route path="faq" element={<TermOfUser></TermOfUser>} />
              <Route path="contacts" element={<TermOfUser></TermOfUser>} />
              <Route path="buying-guide" element={<TermOfUser></TermOfUser>} />
              <Route path="return-guide" element={<TermOfUser></TermOfUser>} />
              <Route
                path="warranty-policy"
                element={<TermOfUser></TermOfUser>}
              />
            </Route>
            <Route path="/category/:category" element={} />

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
              path="/shop"
              element={
                // <StoreProvider>
                // </StoreProvider>
                <ShopProvider>
                  <Store></Store>
                </ShopProvider>
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
    </Fragment>
  );
}

export default App;
