import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
const Home = () => {
  return (
    <div className="banners h-[350px] bg-gray-700 max-w-[800px] mx-auto rounded-lg  overflow-hidden ">
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        emulateTouch={true}
      >
        <BannerItem />
        <BannerItem />
        <BannerItem />
        <BannerItem />
        <BannerItem />
        <BannerItem />
        <BannerItem />
        <BannerItem />
        <BannerItem />
      </Carousel>
    </div>
  );
};

const BannerItem = () => {
  return (
    <div className="banner h-[350px] w-full select-none rounded-lg relative">
      <img
        src="/logoShop.avif"
        alt="img"
        className="object-cover w-full h-full rounded-lg brightness-95"
      />
    </div>
  );
};

export default Home;
