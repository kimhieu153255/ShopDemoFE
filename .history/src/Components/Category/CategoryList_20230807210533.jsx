import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import CategoryItem from "./CategoryItem";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";

SwiperCore.use([Navigation]);

const CategoryList = () => {
  const btnSwiper = useSwiper();

  const handleNextSlide = () => {
    if (btnSwiper) {
      btnSwiper.slideNext();
    }
  };

  return (
    <div className="">
      <Swiper
        grabCursor={true}
        slidesPerView={5}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={1}
        className="w-full"
        allowSlideNext={true}
        allowSlidePrev={true}
      >
        <SwiperSlide>
          <CategoryItem />
        </SwiperSlide>
        <SwiperSlide>
          <CategoryItem />
        </SwiperSlide>
        <SwiperSlide>
          <CategoryItem />
        </SwiperSlide>
        <SwiperSlide>
          <CategoryItem />
        </SwiperSlide>
        <SwiperSlide>
          <CategoryItem />
        </SwiperSlide>
        <SwiperSlide>
          <CategoryItem />
        </SwiperSlide>
      </Swiper>

      <button onClick={handleNextSlide}>next</button>
    </div>
  );
};

export default CategoryList;
