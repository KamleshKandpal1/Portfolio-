import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-creative";
import { Autoplay } from "swiper/modules";
import Data from "../assets/json/ProductData.json";
import { Link } from "react-router-dom";
import { PiBagBold } from "react-icons/pi";

const Projects = () => {
  return (
    <div className="text-[#916ce7] bg-[#101010] p-4 h-full flex flex-col items-center space-y-5 rounded-lg relative">
      {/* Heading */}
      <div>
        <div className="flex items-center justify-center gap-x-1 text-xl">
          <PiBagBold />
          <p className="text-[12px] font-medium text-[#999999]">Projects</p>
        </div>
        <p className="text-[15px] font-normal text-[#e6e6e6] text-center">
          Works Gallery
        </p>
      </div>
      <Swiper
        slidesPerView={2}
        centeredSlides={true}
        grabCursor={true}
        effect={"creative"}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: true,
          pauseOnMouseEnter: true, // Pauses on hover
        }}
        modules={[Autoplay]}
        className="w-full h-full mySwiper "
      >
        {Data.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-32 group rounded-lg px-2">
              <Link to={item?.link} target="_blank">
                <img
                  src={item.img}
                  className="w-full rounded-lg h-full"
                  alt={item.title}
                />
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <Link
        to="/project"
        className="bg-[#916ce7] text-[#e6e6e6]
      rounded-xl text-xs px-6 py-2.5 font-medium border border-black"
      >
        View Works
      </Link>
    </div>
  );
};

export default Projects;
