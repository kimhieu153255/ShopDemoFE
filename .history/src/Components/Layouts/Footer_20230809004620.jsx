import {
  FaCopyright,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

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
    icon: <FaFacebook className="inline-block text-2xl"></FaFacebook>,
  },
  {
    title: "Instagram",
    link: "#",
    icon: <FaInstagram className="inline-block text-2xl"></FaInstagram>,
  },
  {
    title: "Twitter",
    link: "#",
    icon: <FaTwitter className="inline-block text-2xl"></FaTwitter>,
  },
  {
    title: "Youtube",
    link: "#",
    icon: <FaYoutube className="inline-block text-2xl"></FaYoutube>,
  },
];

const Footer = () => {
  return (
    <div className="bg-gray-100 mt-5">
      <div className=" py-10 flex justify-evenly border-b-gray-500 border-2">
        <div className="flex flex-col text-lg w-40 min-w-max ">
          <h2 className="font-semibold text-xl">Shop</h2>
          <hr className="inline-block bg-green-500 h-1 w-10 mb-5 rounded-2xl" />
          {ArrShop.map((item, index) => (
            <span
              key={index}
              className="py-1 cursor-pointer transition-all hover:pl-3 duration-300 hover:text-green-600 pl-1 hover:font-semibold"
            >
              {item.title}
            </span>
          ))}
        </div>
        <div className="flex flex-col text-lg w-40  min-w-max">
          <h2 className="font-semibold text-xl">Suport center</h2>
          <hr className="inline-block bg-green-500 h-1 w-10 mb-5 rounded-2xl" />
          {ArrSupport.map((item, index) => (
            <span
              key={index}
              className="py-1 cursor-pointer transition-all hover:pl-3 duration-300 hover:text-green-600 pl-1 hover:font-semibold"
            >
              {item.title}
            </span>
          ))}
        </div>
        <div className="flex flex-col text-lg w-40  min-w-max">
          <h2 className="font-semibold text-xl">Category</h2>
          <hr className="inline-block bg-green-500 h-1 w-10 mb-5 rounded-2xl" />
          {ArrCategory.map((item, index) => (
            <span
              key={index}
              className="py-1 cursor-pointer transition-all hover:pl-3 duration-300 hover:text-green-600 pl-1 hover:font-semibold"
            >
              {item.title}
            </span>
          ))}
        </div>
        <div className="flex flex-col text-lg w-40 min-w-max">
          <h2 className="font-semibold text-xl">Follow us</h2>
          <hr className="inline-block bg-green-500 h-1 w-10 mb-5 rounded-2xl" />
          {ArrFollow.map((item, index) => (
            <span
              key={index}
              className="py-1 cursor-pointer transition-all hover:pl-3 duration-300 hover:text-green-600 pl-1 hover:font-semibold leading-7"
            >
              {item.icon}
              <span className="ml-2">{item.title}</span>
            </span>
          ))}
        </div>
      </div>
      <div className="flex">
        <span className="text-gray-500 text-sm ml-5 mt-5">
          <FaCopyright className="inline-block"></FaCopyright> 2021 - ShopDemo
        </span>
      </div>
    </div>
  );
};

export default Footer;
