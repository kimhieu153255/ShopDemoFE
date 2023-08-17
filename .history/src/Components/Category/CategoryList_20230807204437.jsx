import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import CategoryItem from "./CategoryItem";
import "swiper/css";

const CategoryList = () => {
  const btnSwiper = useSwiper();

  return (
    <div className="flex flex-shrink-0">
      <Swiper
        grabCursor={true}
        slidesPerView={5}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={1}
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

        {/* <button onClick={() => btnSwiper.slideNext()}>></button> */}
      </Swiper>
    </div>
  );
};

export default CategoryList;
