import { Swiper, SwiperSlide } from "swiper";
import CategoryItem from "./CategoryItem";

const CategoryList = () => {
  return (
    <div className="flex flex-shrink-0">
      <Swiper>
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
