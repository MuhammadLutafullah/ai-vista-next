"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import Image from "next/image";
import sliderIcon1 from "../../public/images/aiicon.svg";
import sliderIcon2 from "../../public/images/Custom-icon.svg";
import sliderIcon3 from "../../public/images/webicon.svg";
import sliderIcon4 from "../../public/images/account-settings-svgrepo-com.svg";
import sliderIcon5 from "../../public/images/interface-ui-ux-web-svgrepo-com.svg";
import sliderIcon6 from "../../public/images/mobileIcon.svg";
import sliderIcon7 from "../../public/images/arrangement-chart-form-svgrepo-com.svg";

export default function SliderHero() {
  return (
    <div className="bg-[#000000] hero-slider-otr  relative z-[3] py-8 max-tablet:py-2 px-39 max-desktop:px-10 max-tablet:px-5">
      <div className="hero-slider-inr">
        {/* <p className="hero-slider-heading uppercase text-[#ffffff] text-center pb-10">
          services we offer:
        </p> */}

        <Swiper
          breakpoints={{
            0: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 80,
            },
          }}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          speed={2000}
          freeMode={{
            enabled: true,
            momentum: false,
            sticky: true,
          }}
          modules={[Autoplay, FreeMode]}
          touchEventsTarget="container"
          className="mySwiper"
        >
          {[
            { icon: sliderIcon1, text: "AI/ML" },
            { icon: sliderIcon2, text: "Software Development" },
            { icon: sliderIcon3, text: "Web Development" },
            { icon: sliderIcon4, text: "Cybersecurity" },
            { icon: sliderIcon5, text: "UI/UX" },
            { icon: sliderIcon6, text: "Mobile Development" },
            { icon: sliderIcon7, text: "ERP Solutions" },
          ].map((item, index) => (
            <SwiperSlide key={index}>
              <div className="slider-hero-slide flex items-center gap-2 px-2">
                <Image
                  className="star1 w-11 h-11 max-tablet:w-8 max-tablet:h-8"
                  src={item.icon}
                  alt={item.text}
                  width={44}
                  height={44}
                />
                <p className="text-[#ffffff] text-sm max-tablet:text-xs ">
                  {item.text}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
