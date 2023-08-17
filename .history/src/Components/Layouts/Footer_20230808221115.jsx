import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const ArrShop = [
  {
    title: "About",
    link: "#",
  },
  {
    title: "Terms of use",
    link: "#",
  },
  {
    title: "Privacy Policy",
    link: "#",
  },
];
const ArrSupport = [
  {
    title: "FAQ",
    link: "#",
  },
  {
    title: "Contacts",
    link: "#",
  },
  {
    title: "Buying guide",
    link: "#",
  },
  {
    title: "Return guide",
    link: "#",
  },
  {
    title: "Warranty Policy",
    link: "#",
  },
];
const ArrCategory = [
  {
    title: "Shirt",
    link: "#",
  },
  {
    title: "Shoes",
    link: "#",
  },
  {
    title: "Accessories",
    link: "#",
  },
  {
    title: "Hat",
    link: "#",
  },
  {
    title: "Glasses",
    link: "#",
  },
  {
    title: "Wallet",
    link: "#",
  },
];
const ArrFollow = [
  {
    title: "Facebook",
    link: "#",
    icon: <FaFacebook className="inline-block"></FaFacebook>,
  },
  {
    title: "Instagram",
    link: "#",
    icon: <FaInstagram className="inline-block"></FaInstagram>,
  },
  {
    title: "Twitter",
    link: "#",
    icon: <FaTwitter className="inline-block"></FaTwitter>,
  },
  {
    title: "Youtube",
    link: "#",
    icon: <FaYoutube className="inline-block"></FaYoutube>,
  },
];

const Footer = () => {
  return (
    <div className="bg-gray-100 pt-10 pb-5 flex justify-around">
      <div className="flex flex-col text-lg">
        <h2 className="font-semibold text-xl">Shop</h2>
        <hr className="inline-block bg-green-500 h-1 w-10 mb-5 rounded-2xl" />
        {ArrShop.map((item, index) => (
          <span key={index} className="cursor-pointer hover:scale-110">
            {item.title}
          </span>
        ))}
      </div>
      <div className="flex flex-col text-lg">
        <h2 className="font-semibold text-xl">Suport center</h2>
        <hr className="inline-block bg-green-500 h-1 w-10 mb-5 rounded-2xl" />
        <span>FAQ</span>
        <span>Contacts</span>
        <span>Buying guide</span>
        <span>Return guide</span>
        <span>Warranty Policy</span>
      </div>
      <div className="flex flex-col text-lg">
        <h2 className="font-semibold text-xl">Category</h2>
        <hr className="inline-block bg-green-500 h-1 w-10 mb-5 rounded-2xl" />
        <span>Shirt</span>
        <span>Shoes</span>
        <span>Trousers</span>
        <span>Hat</span>
        <span>Glasses</span>
        <span>wallet</span>
      </div>
      <div className="flex flex-col text-lg">
        <h2 className="font-semibold text-xl">Follow us</h2>
        <hr className="inline-block bg-green-500 h-1 w-10 mb-5 rounded-2xl" />
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
