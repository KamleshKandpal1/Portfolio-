import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-creative";
import { Autoplay } from "swiper/modules";
import Data from "../assets/json/ProductData.json";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div className="w-full h-full bg-[var(--accent-fouth)] flex justify-center items-center ">
      <Swiper
        grabCursor={true}
        effect={"creative"}
        loop={true}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: true,
          pauseOnMouseEnter: true, // Pauses on hover
        }}
        modules={[Autoplay]}
        className="w-full h-full mySwiper"
      >
        {Data.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full group p-2">
              <Link to={`/project/${item.title}`}>
                <img
                  src={item.img}
                  className="w-full h-full object-fill"
                  alt={item.title}
                />
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Projects;
