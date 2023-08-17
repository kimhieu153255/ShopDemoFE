import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import CategoryItem from "./CategoryItem";
import Swip from "swiper";
import "swiper/css";
// import SwiperCore, { Navigation } from "swiper/modules/navigation";
// SwiperCore.use([Navigation]);

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
    </div>
  );
};

export default CategoryList;
