import { Carousel } from "react-responsive-carousel";
const Home = () => {
  return (
    <div className="w-full h-[300px] bg-gray-50">
      <Carousel autoPlay infiniteLoop showThumbs={false}>
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
    <div className="banners h-[350px] bg-gray-700 max-w-[800px] mx-auto rounded-lg  overflow-hidden">
      <div className="banner h-full w-full select-none rounded-lg relative">
        <img
          src="/logoShop.avif"
          alt="img"
          className="object-cover w-full h-full rounded-lg"
        />
      </div>
    </div>
  );
};

export default Home;
