import React from "react";
import "./css/Banner.css";

//Swiper imports
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";

SwiperCore.use([Navigation, Pagination, Autoplay]);

const Banner = () => {
  const BannerData = [];

  for (let i = 1; i <= 9; i++) {
    BannerData.push(`banner${i}.jpg`);
  }

  return (
    <article className="banner">
      <Swiper
        pagination
        navigation
        loop
        autoplay={{ delay: 3500, disableOnInteraction: false }}
      >
        {BannerData.map((data, index) => {
          return (
            <SwiperSlide key={index}>
              <img src={`./Banner/${data}`} alt="banner" />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </article>
  );
};

export default Banner;
