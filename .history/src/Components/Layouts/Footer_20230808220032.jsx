import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-gray-100 pt-10 pb-5 flex justify-around">
      <div className="flex flex-col text-lg">
        <h2 className="font-semibold text-xl">Shop</h2>
        <span>About</span>
        <span>Terms of use</span>
        <span>Privacy Policy</span>
      </div>
      <div className="flex flex-col">
        <h2 className="font-semibold text-xl">Suport center</h2>
        <span>FAQ</span>
        <span>Contacts</span>
        <span>Buying guide</span>
        <span>Return guide</span>
        <span>Warranty Policy</span>
      </div>
      <div className="flex flex-col">
        <h2 className="font-semibold text-xl">Category</h2>
        <span>Shirt</span>
        <span>Shoes</span>
        <span>Trousers</span>
        <span>Hat</span>
        <span>Glasses</span>
        <span>wallet</span>
      </div>
      <div className="flex flex-col">
        <h2 className="font-semibold text-xl">Follow us</h2>
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
