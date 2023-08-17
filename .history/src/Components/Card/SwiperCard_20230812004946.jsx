import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import { useEffect, useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Card from "./Card";
import axios from "axios";

const SwiperCard = () => {
  const swiperRef = useRef();
  const btnEndRef = useRef();
  const btnStartRef = useRef();

  const handleNextSlide = () => {
    if (swiperRef.current) {
      const slidesToJump = 3;
      for (let i = 0; i < slidesToJump; i++) {
        swiperRef.current.slideNext();
      }
    }
  };

  const handlePrevSlide = () => {
    if (swiperRef.current) {
      const slidesToJump = 3;
      for (let i = 0; i < slidesToJump; i++) {
        swiperRef.current.slidePrev();
      }
    }
  };

  const LoadPopularProduct = async () => {
    const url = "http://localhost:8000/product/api/getPopularProducts";
    try {
      const res = await axios.get(url, {
        params: { limit: 10 },
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      if (res.data) {
        console.log(res.data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    LoadPopularProduct();
  }, []);

  const handleSlideChangeTransitionEnd = () => {
    const isEnd = swiperRef.current.isEnd;
    const isBeginning = swiperRef.current.isBeginning;
    isEnd
      ? btnEndRef.current.classList.add("hidden")
      : btnEndRef.current.classList.remove("hidden");
    isBeginning
      ? btnStartRef.current.classList.add("hidden")
      : btnStartRef.current.classList.remove("hidden");
  };

  return (
    <div className="relative">
      <Swiper
        grabCursor={true}
        slidesPerView={5}
        pagination={{
          clickable: true,
        }}
        spaceBetween={1}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onReachBeginning={handleSlideChangeTransitionEnd}
        onReachEnd={handleSlideChangeTransitionEnd}
        onSlideChangeTransitionEnd={handleSlideChangeTransitionEnd}
        className="pt-2 pb-[52px] px-2"
      >
        <SwiperSlide>
          <Card id={1} />
        </SwiperSlide>
        <SwiperSlide>
          <Card id={2} />
        </SwiperSlide>
        <SwiperSlide>
          <Card id={3} />
        </SwiperSlide>
        <SwiperSlide>
          <Card id={4} />
        </SwiperSlide>
        <SwiperSlide>
          <Card id={5} />
        </SwiperSlide>
        <SwiperSlide>
          <Card id={6} />
        </SwiperSlide>
        <SwiperSlide>
          <Card id={7} />
        </SwiperSlide>
        <SwiperSlide>
          <Card id={8} />
        </SwiperSlide>
        <SwiperSlide>
          <Card id={9} />
        </SwiperSlide>
        <button
          onClick={handlePrevSlide}
          className="text-center absolute left-0 top-1/2 z-10 rounded-full shadow-lg hover:scale-125 hover:text-gray-500 transform transition-all duration-200 ease-in-out bg-gray-50 p-1 text-gray-400 hidden"
          ref={btnStartRef}
        >
          <FaChevronLeft className="text-xl pr-1" />
        </button>
        <button
          onClick={handleNextSlide}
          className={`text-center absolute right-0 top-1/2 z-10 rounded-full shadow-lg hover:scale-125 hover:text-gray-500 transform transition-all duration-300 ease-in-out bg-gray-50 p-1 text-gray-400`}
          ref={btnEndRef}
        >
          <FaChevronRight className="text-xl pl-1 " />
        </button>
      </Swiper>
    </div>
  );
};

export default SwiperCard;
