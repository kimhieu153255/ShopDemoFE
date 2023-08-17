import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-gray-100 pt-10 pb-5 flex">
      <div>
        <h2>Shop</h2>
        <span>About</span>
        <span>Terms of use</span>
        <span>Privacy Policy</span>
      </div>
      <div>
        <h2>Suport center</h2>
        <span>FAQ</span>
        <span>Contacts</span>
        <span>Buying guide</span>
        <span>Return guide</span>
        <span>Warranty Policy</span>
      </div>
      <div>
        <h2>Category</h2>
        <span>Shirt</span>
        <span>Shoes</span>
        <span>Trousers</span>
        <span>Hat</span>
        <span>Glasses</span>
        <span>wallet</span>
      </div>
      <div>
        <h2>Follow us</h2>
        <span>
          <FaFacebook className="inline-block"></FaFacebook> Facebook
        </span>
        <span>
          <FaInstagram className="inline-block"></FaInstagram>Instagram
        </span>
        <span>
          <FaTwitter className="inline-block"></FaTwitter>Twitter
        </span>
        <span>
          <FaYoutube className="inline-block"></FaYoutube>Youtube
        </span>
      </div>
    </div>
  );
};

export default Footer;