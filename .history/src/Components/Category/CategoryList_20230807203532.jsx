import { Swiper, SwiperSlide } from "swiper/react";
import CategoryItem from "./CategoryItem";
import "swiper/css";

const CategoryList = () => {
  return (
    <div className="flex flex-shrink-0">
      <Swiper
        grabCursor={true}
        slidesPerView={5}
        navigation
        spaceBetween={2}
        className="w-full"
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
