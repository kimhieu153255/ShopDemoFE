import React from "react";

const Banner = () => {
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

export default Banner;
