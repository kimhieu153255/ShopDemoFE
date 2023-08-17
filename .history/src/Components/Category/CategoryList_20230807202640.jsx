import Swiper from "swiper";
import CategoryItem from "./CategoryItem";

const CategoryList = () => {
  return (
    <div className="flex flex-shrink-0">
      <Swiper>
        <SwiperSlide>
          <CategoryItem />
        </SwiperSlide>
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
      </Swiper>
    </div>
  );
};

export default CategoryList;
