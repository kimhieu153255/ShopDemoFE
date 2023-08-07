import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/css";
const Home = () => {
  return (
    <div>
      <div className="banners h-[350px] bg-gray-700 max-w-[800px] mx-auto rounded-lg  overflow-hidden">
        <Carousel autoPlay infiniteLoop showThumbs={false}>
          {banners.map((banner) => (
            <div key={banner.id}>
              <img src={banner.imageUrl} alt={banner.alt} />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

const BannerItem = () => {
  return (
    <div className="banner h-full w-full select-none rounded-lg relative">
      <img
        src="/logoShop.avif"
        alt="img"
        className="object-cover w-full h-full rounded-lg"
      />
    </div>
  );
};

export default Home;
