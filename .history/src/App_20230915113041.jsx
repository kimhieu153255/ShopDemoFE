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
import PrivacyPolicy from "./Components/Shop/PrivacyPolicy";
import FAQ from "./Components/Support/FAQ";
import Contact from "./Components/Support/Contact";
import BuyingGuide from "./Components/Support/BuyingGuide";
import ReturnGuide from "./Components/Support/ReturnGuide";
import WarrantyPolicy from "./Components/Support/WarrantyPolicy";
import TermOfUser from "./Components/Shop/TermOfUser";
import Message from "./Components/Message/Message";
import FilterPanel from "./Pages/FilterPanel";
import ChangePhone from "./Components/Information/ChangePhone";
import VerifyPhone from "./Components/Information/VerifyPhone";
import InforCard from "./Pages/InforCard";

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
                <Message></Message>
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
              <Route path="faq" element={<FAQ></FAQ>} />
              <Route path="contacts" element={<Contact></Contact>} />
              <Route
                path="buying-guide"
                element={<BuyingGuide></BuyingGuide>}
              />
              <Route
                path="return-guide"
                element={<ReturnGuide></ReturnGuide>}
              />
              <Route
                path="warranty-policy"
                element={<WarrantyPolicy></WarrantyPolicy>}
              />
            </Route>
            <Route
              path="/category/:category"
              element={<FilterPanel></FilterPanel>}
            />
            <Route
              path="/product/:id"
              element={<InforCard></InforCard>}
            ></Route>
            {/* <Route path="/:nameStore" element={<Store></Store>}></Route> */}

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
                <Route
                  path="change-phone"
                  element={<ChangePhone></ChangePhone>}
                ></Route>
                <Route
                  path="verify-phone"
                  element={<VerifyPhone></VerifyPhone>}
                ></Route>
              </Route>
              <Route path="cart" element={<Cart></Cart>} />
            </Route>
            <Route path="/shop/add-product" element={<AddCard></AddCard>} />
            <Route
              path="/shop"
              element={
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
