"use client";

import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { EffectCoverflow, Navigation } from "swiper/modules";

import Image from "next/image";
import cardIcon from "../../public/images/best-card-icon.svg";
import cardIcon3 from "../../public/images/Group 45.svg";
// import aboutImg3 from "../../public/images/about-us-img3.png";
import aboutRight from "../../public/images/about-right.svg";
import sliderRight from "../../public/images/slider-right.svg";

export default function Best() {
  return (
    <>
      <div className="relative overflow-hidden">
        <div className="best-otr  relative bg-black pb-[40px]">
          <div className="best-inr px-39 max-desktop:px-10 max-tablet:px-5 relative">
            <p className="best-heading font-gendy font-normal text-[60px] text-center max-tablet:text-[40px]">
              What We Do Best
            </p>
            <p className="best-desc font-normal  text-[15px] w-[844px] text-center mx-auto max-laptop:w-full">
              We craft end‑to‑end tech solutions—spanning strategy, design, and
              development—that turn bold ideas into resilient, user‑focused
              products. Partner with us to accelerate innovation, optimize
              operations, and create seamless digital experiences that set you
              apart.
            </p>
            <div className="best-row-main relative    bg-cover bg-center bg-no-repeat">
              <Image
                className="absolute bg-boxes-img object-cover max-laptop:hidden"
                src={cardIcon3}
                alt="Your Logo"
              />
              <Swiper
                breakpoints={{
                  // when window width is >= 320px
                  320: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                  },
                  // when window width is >= 640px
                  640: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                  },
                  // when window width is >= 1024px
                  1024: {
                    slidesPerView: 3,
                  },
                }}
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                navigation={true}
                initialSlide={1} // Sets the middle slide as the active slide
                slidesPerView={3}
                coverflowEffect={{
                  rotate: 50,
                  stretch: 0,
                  depth: 100,
                  modifier: 1,
                  slideShadows: true,
                }}
                modules={[EffectCoverflow, Navigation]}
                className="mySwiper !pb-[70px] max-laptop:!pb-[50px] !pt-[47px] "
              >
                <SwiperSlide>
                  <div className="best-card-inr min-h-[487px] w-full rounded-[24px] border border-[#FFFFFF1A] pt-[23px] pb-[76px] px-[19px] max-tablet3:py-[30px] max-tablet3:px-[17px] backdrop-blur-md bg-[rgba(255,255,255,0.1)]">
                    <div className="flex justify-center">
                      <Image
                        className="cursor-pointer w-6 h-6 cardIcon hidden"
                        src={cardIcon}
                        alt="Your Logo"
                        height={80}
                        width={80}
                      />
                    </div>
                    <p className="font-medium text-[18px] uppercase text-center pt-[12px] text-white">
                      E-Commerce
                    </p>
                    <p className="font-quicksand font-medium text-[11px] text-center text-gray-300">
                      Centralized Platforms For Enhanced Business Processes.
                    </p>
                    <div className="pt-4 flex flex-col gap-[10px]">
                      <div className="">
                        <p className="font-medium text-[12px] uppercase flex items-center gap-[6px] text-white">
                          <span className="w-1.5 h-1.5 rounded-full bg-white block"></span>{" "}
                          User-Friendly Storefront
                        </p>
                        <p className="font-quicksand font-normal text-[10px] text-gray-300 w-[253px]">
                          Design an intuitive, visually appealing storefront
                          that showcases products effectively and offers
                          seamless navigation for a smooth shopping experience.
                        </p>
                      </div>
                      <div className="">
                        <p className="font-medium text-[12px] uppercase flex items-center gap-[6px] text-white">
                          <span className="w-1.5 h-1.5 rounded-full bg-white block"></span>{" "}
                          Secure Payment Integration
                        </p>
                        <p className="font-quicksand font-normal text-[10px] text-gray-300 w-[253px]">
                          Enable secure transactions with multiple payment
                          options like credit/debit cards, digital wallets, UPI,
                          and BNPL (Buy Now, Pay Later) solutions, supported by
                          encryption for data safety.
                        </p>
                      </div>

                      <div className="">
                        <p className="font-medium text-[12px] uppercase flex items-center gap-[6px] text-white">
                          <span className="w-1.5 h-1.5 rounded-full  bg-white block"></span>{" "}
                          Product Management System
                        </p>
                        <p className="font-quicksand font-normal text-[10px] text-gray-300 w-[253px]">
                          Manage inventory, pricing, and product details
                          effortlessly with real-time updates and automation to
                          reduce manual effort.
                        </p>
                      </div>
                    </div>
                    <span className="active-style tl-span  h-1.5 w-1.5 rounded-full bg-gray-300 absolute top-[12px] left-[12px] hidden"></span>
                    <span className="active-style tr-span  h-1.5 w-1.5 rounded-full bg-gray-300 absolute top-[12px] right-[12px] hidden"></span>
                    <span className="active-style tl-span  h-1.5 w-1.5 rounded-full bg-gray-300 absolute bottom-[12px] left-[12px] hidden"></span>
                    <p className=" font-quicksand font-medium text-[9px] flex items-center gap-[6px] absolute bottom-[12px] right-[12px]">
                      Explore More
                      <span className="  tl-span block h-1.5 w-1.5 rounded-full bg-gray-300 "></span>
                    </p>
                  </div>

                  <style jsx>{`
                    .best-card-inr {
                      backdrop-filter: blur(12px);
                      -webkit-backdrop-filter: blur(
                        12px
                      ); /* Safari & old iOS support */
                      background-color: rgba(255, 255, 255, 0.1);
                    }
                  `}</style>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="best-card-inr min-h-[487px] w-full rounded-[24px] border border-[#FFFFFF1A] pt-[23px] pb-[76px] px-[19px] max-tablet3:py-[30px] max-tablet3:px-[17px] backdrop-blur-md bg-[rgba(255,255,255,0.1)]">
                    <div className="flex justify-center">
                      <Image
                        className="cursor-pointer w-6 h-6 cardIcon hidden"
                        src={cardIcon}
                        alt="Your Logo"
                        height={80}
                        width={80}
                      />
                    </div>
                    <p className="font-medium text-[18px] uppercase text-center pt-[12px] text-white">
                      Website Development
                    </p>
                    <p className="font-quicksand font-medium text-[11px] text-center text-gray-300">
                      Centralized Platforms For Enhanced Business Processes.
                    </p>
                    <div className="pt-4 flex flex-col gap-[10px]">
                      <div className="">
                        <p className="font-medium text-[12px] uppercase flex items-center gap-[6px] text-white">
                          <span className="w-1.5 h-1.5 rounded-full bg-white block"></span>{" "}
                          Customer Portals
                        </p>
                        <p className="font-quicksand font-normal text-[10px] text-gray-300 w-[253px]">
                          Provide personalized access for customers to manage
                          their accounts, view transactions, and track
                          activities seamlessly.
                        </p>
                      </div>
                      <div className="">
                        <p className="font-medium text-[12px] uppercase flex items-center gap-[6px] text-white">
                          <span className="w-1.5 h-1.5 rounded-full bg-white block"></span>{" "}
                          Employee Portals
                        </p>
                        <p className="font-quicksand font-normal text-[10px] text-gray-300 w-[253px]">
                          Enable your team to collaborate efficiently with tools
                          for task management, resource sharing, and
                          communication.
                        </p>
                      </div>
                      <div className="">
                        <p className="font-medium text-[12px] uppercase flex items-center gap-[6px] text-white">
                          <span className="w-1.5 h-1.5 rounded-full bg-white block"></span>{" "}
                          E-Commerce Portals
                        </p>
                        <p className="font-quicksand font-normal text-[10px] text-gray-300 w-[253px]">
                          Integrate shopping features, inventory management, and
                          payment solutions for an engaging online store
                          experience.
                        </p>
                      </div>
                      <div className="">
                        <p className="font-medium text-[12px] uppercase flex items-center gap-[6px] text-white">
                          <span className="w-1.5 h-1.5 rounded-full  bg-white block"></span>{" "}
                          Service Portals
                        </p>
                        <p className="font-quicksand font-normal text-[10px] text-gray-300 w-[253px]">
                          Simplify support with ticket systems, FAQs, and live
                          chat for quick issue resolution.
                        </p>
                      </div>
                    </div>
                    <span className=" active-style tl-span  h-1.5 w-1.5 rounded-full bg-gray-300 absolute top-[12px] left-[12px] hidden"></span>
                    <span className=" active-style tr-span  h-1.5 w-1.5 rounded-full bg-gray-300 absolute top-[12px] right-[12px] hidden"></span>
                    <span className=" active-style tl-span  h-1.5 w-1.5 rounded-full bg-gray-300 absolute bottom-[12px] left-[12px] hidden"></span>
                    <p className=" font-quicksand font-medium text-[9px] flex items-center gap-[6px] absolute bottom-[12px] right-[12px]">
                      Explore More
                      <span className="  tl-span block h-1.5 w-1.5 rounded-full bg-gray-300 "></span>
                    </p>
                  </div>

                  <style jsx>{`
                    .best-card-inr {
                      backdrop-filter: blur(12px);
                      -webkit-backdrop-filter: blur(
                        12px
                      ); /* Safari & old iOS support */
                      background-color: rgba(255, 255, 255, 0.1);
                    }
                  `}</style>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="best-card-inr min-h-[487px] w-full rounded-[24px] border border-[#FFFFFF1A] pt-[23px] pb-[76px] px-[19px] max-tablet3:py-[30px] max-tablet3:px-[17px] backdrop-blur-md bg-[rgba(255,255,255,0.1)]">
                    <div className="flex justify-center">
                      <Image
                        className="cursor-pointer w-6 h-6 cardIcon hidden"
                        src={cardIcon}
                        alt="Your Logo"
                        height={80}
                        width={80}
                      />
                    </div>
                    <p className="font-medium text-[18px] uppercase text-center pt-[12px] text-white">
                      E-Commerce
                    </p>
                    <p className="font-quicksand font-medium text-[11px] text-center text-gray-300">
                      Centralized Platforms For Enhanced Business Processes.
                    </p>
                    <div className="pt-4 flex flex-col gap-[10px]">
                      <div className="">
                        <p className="font-medium text-[12px] uppercase flex items-center gap-[6px] text-white">
                          <span className="w-1.5 h-1.5 rounded-full bg-white block"></span>{" "}
                          User-Friendly Storefront
                        </p>
                        <p className="font-quicksand font-normal text-[10px] text-gray-300 w-[253px]">
                          Design an intuitive, visually appealing storefront
                          that showcases products effectively and offers
                          seamless navigation for a smooth shopping experience.
                        </p>
                      </div>
                      <div className="">
                        <p className="font-medium text-[12px] uppercase flex items-center gap-[6px] text-white">
                          <span className="w-1.5 h-1.5 rounded-full bg-white block"></span>{" "}
                          Secure Payment Integration
                        </p>
                        <p className="font-quicksand font-normal text-[10px] text-gray-300 w-[253px]">
                          Enable secure transactions with multiple payment
                          options like credit/debit cards, digital wallets, UPI,
                          and BNPL (Buy Now, Pay Later) solutions, supported by
                          encryption for data safety.
                        </p>
                      </div>

                      <div className="">
                        <p className="font-medium text-[12px] uppercase flex items-center gap-[6px] text-white">
                          <span className="w-1.5 h-1.5 rounded-full  bg-white block"></span>{" "}
                          Product Management System
                        </p>
                        <p className="font-quicksand font-normal text-[10px] text-gray-300 w-[253px]">
                          Manage inventory, pricing, and product details
                          effortlessly with real-time updates and automation to
                          reduce manual effort.
                        </p>
                      </div>
                    </div>
                    <span className="active-style tl-span  h-1.5 w-1.5 rounded-full bg-gray-300 absolute top-[12px] left-[12px] hidden"></span>
                    <span className="active-style tr-span  h-1.5 w-1.5 rounded-full bg-gray-300 absolute top-[12px] right-[12px] hidden"></span>
                    <span className="active-style tl-span  h-1.5 w-1.5 rounded-full bg-gray-300 absolute bottom-[12px] left-[12px] hidden"></span>
                    <p className=" font-quicksand font-medium text-[9px] flex items-center gap-[6px] absolute bottom-[12px] right-[12px]">
                      Explore More
                      <span className="  tl-span block h-1.5 w-1.5 rounded-full bg-gray-300 "></span>
                    </p>
                    <span className="active-style tl-span  h-1.5 w-1.5 rounded-full bg-gray-300 absolute top-[12px] left-[12px] hidden"></span>
                    <span className="active-style tr-span  h-1.5 w-1.5 rounded-full bg-gray-300 absolute top-[12px] right-[12px] hidden"></span>
                    <span className="active-style tl-span  h-1.5 w-1.5 rounded-full bg-gray-300 absolute bottom-[12px] left-[12px] hidden"></span>
                    <p className=" font-quicksand font-medium text-[9px] flex items-center gap-[6px] absolute bottom-[12px] right-[12px]">
                      Explore More
                      <span className="  tl-span block h-1.5 w-1.5 rounded-full bg-gray-300 "></span>
                    </p>
                  </div>

                  <style jsx>{`
                    .best-card-inr {
                      backdrop-filter: blur(12px);
                      -webkit-backdrop-filter: blur(
                        12px
                      ); /* Safari & old iOS support */
                      background-color: rgba(255, 255, 255, 0.1);
                    }
                  `}</style>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="best-card-inr min-h-[487px] w-full rounded-[24px] border border-[#FFFFFF1A] pt-[23px] pb-[76px] px-[19px] max-tablet3:py-[30px] max-tablet3:px-[17px] backdrop-blur-md bg-[rgba(255,255,255,0.1)]">
                    <div className="flex justify-center">
                      <Image
                        className="cursor-pointer w-6 h-6 cardIcon hidden"
                        src={cardIcon}
                        alt="Your Logo"
                        height={80}
                        width={80}
                      />
                    </div>
                    <p className="font-medium text-[18px] uppercase text-center pt-[12px] text-white">
                      E-Commerce
                    </p>
                    <p className="font-quicksand font-medium text-[11px] text-center text-gray-300">
                      Centralized Platforms For Enhanced Business Processes.
                    </p>
                    <div className="pt-4 flex flex-col gap-[10px]">
                      <div className="">
                        <p className="font-medium text-[12px] uppercase flex items-center gap-[6px] text-white">
                          <span className="w-1.5 h-1.5 rounded-full bg-white block"></span>{" "}
                          User-Friendly Storefront
                        </p>
                        <p className="font-quicksand font-normal text-[10px] text-gray-300 w-[253px]">
                          Design an intuitive, visually appealing storefront
                          that showcases products effectively and offers
                          seamless navigation for a smooth shopping experience.
                        </p>
                      </div>
                      <div className="">
                        <p className="font-medium text-[12px] uppercase flex items-center gap-[6px] text-white">
                          <span className="w-1.5 h-1.5 rounded-full bg-white block"></span>{" "}
                          Secure Payment Integration
                        </p>
                        <p className="font-quicksand font-normal text-[10px] text-gray-300 w-[253px]">
                          Enable secure transactions with multiple payment
                          options like credit/debit cards, digital wallets, UPI,
                          and BNPL (Buy Now, Pay Later) solutions, supported by
                          encryption for data safety.
                        </p>
                      </div>

                      <div className="">
                        <p className="font-medium text-[12px] uppercase flex items-center gap-[6px] text-white">
                          <span className="w-1.5 h-1.5 rounded-full  bg-white block"></span>{" "}
                          Product Management System
                        </p>
                        <p className="font-quicksand font-normal text-[10px] text-gray-300 w-[253px]">
                          Manage inventory, pricing, and product details
                          effortlessly with real-time updates and automation to
                          reduce manual effort.
                        </p>
                      </div>
                    </div>
                    <span className="active-style tl-span  h-1.5 w-1.5 rounded-full bg-gray-300 absolute top-[12px] left-[12px] hidden"></span>
                    <span className="active-style tr-span  h-1.5 w-1.5 rounded-full bg-gray-300 absolute top-[12px] right-[12px] hidden"></span>
                    <span className="active-style tl-span  h-1.5 w-1.5 rounded-full bg-gray-300 absolute bottom-[12px] left-[12px] hidden"></span>
                    <p className=" font-quicksand font-medium text-[9px] flex items-center gap-[6px] absolute bottom-[12px] right-[12px]">
                      Explore More
                      <span className="  tl-span block h-1.5 w-1.5 rounded-full bg-gray-300 "></span>
                    </p>
                  </div>

                  <style jsx>{`
                    .best-card-inr {
                      backdrop-filter: blur(12px);
                      -webkit-backdrop-filter: blur(
                        12px
                      ); /* Safari & old iOS support */
                      background-color: rgba(255, 255, 255, 0.1);
                    }
                  `}</style>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="best-card-inr min-h-[487px] w-full rounded-[24px] border border-[#FFFFFF1A] pt-[23px] pb-[76px] px-[19px] max-tablet3:py-[30px] max-tablet3:px-[17px] backdrop-blur-md bg-[rgba(255,255,255,0.1)]">
                    <div className="flex justify-center">
                      <Image
                        className="cursor-pointer w-6 h-6 cardIcon hidden"
                        src={cardIcon}
                        alt="Your Logo"
                        height={80}
                        width={80}
                      />
                    </div>
                    <p className="font-medium text-[18px] uppercase text-center pt-[12px] text-white">
                      Website Development
                    </p>
                    <p className="font-quicksand font-medium text-[11px] text-center text-gray-300">
                      Centralized Platforms For Enhanced Business Processes.
                    </p>
                    <div className="pt-4 flex flex-col gap-[10px]">
                      <div className="">
                        <p className="font-medium text-[12px] uppercase flex items-center gap-[6px] text-white">
                          <span className="w-1.5 h-1.5 rounded-full bg-white block"></span>{" "}
                          Customer Portals
                        </p>
                        <p className="font-quicksand font-normal text-[10px] text-gray-300 w-[253px]">
                          Provide personalized access for customers to manage
                          their accounts, view transactions, and track
                          activities seamlessly.
                        </p>
                      </div>
                      <div className="">
                        <p className="font-medium text-[12px] uppercase flex items-center gap-[6px] text-white">
                          <span className="w-1.5 h-1.5 rounded-full bg-white block"></span>{" "}
                          Employee Portals
                        </p>
                        <p className="font-quicksand font-normal text-[10px] text-gray-300 w-[253px]">
                          Enable your team to collaborate efficiently with tools
                          for task management, resource sharing, and
                          communication.
                        </p>
                      </div>
                      <div className="">
                        <p className="font-medium text-[12px] uppercase flex items-center gap-[6px] text-white">
                          <span className="w-1.5 h-1.5 rounded-full bg-white block"></span>{" "}
                          E-Commerce Portals
                        </p>
                        <p className="font-quicksand font-normal text-[10px] text-gray-300 w-[253px]">
                          Integrate shopping features, inventory management, and
                          payment solutions for an engaging online store
                          experience.
                        </p>
                      </div>
                      <div className="">
                        <p className="font-medium text-[12px] uppercase flex items-center gap-[6px] text-white">
                          <span className="w-1.5 h-1.5 rounded-full  bg-white block"></span>{" "}
                          Service Portals
                        </p>
                        <p className="font-quicksand font-normal text-[10px] text-gray-300 w-[253px]">
                          Simplify support with ticket systems, FAQs, and live
                          chat for quick issue resolution.
                        </p>
                      </div>
                    </div>
                    <span className=" active-style tl-span  h-1.5 w-1.5 rounded-full bg-gray-300 absolute top-[12px] left-[12px] hidden"></span>
                    <span className=" active-style tr-span  h-1.5 w-1.5 rounded-full bg-gray-300 absolute top-[12px] right-[12px] hidden"></span>
                    <span className=" active-style tl-span  h-1.5 w-1.5 rounded-full bg-gray-300 absolute bottom-[12px] left-[12px] hidden"></span>
                    <p className=" font-quicksand font-medium text-[9px] flex items-center gap-[6px] absolute bottom-[12px] right-[12px]">
                      Explore More
                      <span className="  tl-span block h-1.5 w-1.5 rounded-full bg-gray-300 "></span>
                    </p>
                  </div>

                  <style jsx>{`
                    .best-card-inr {
                      backdrop-filter: blur(12px);
                      -webkit-backdrop-filter: blur(
                        12px
                      ); /* Safari & old iOS support */
                      background-color: rgba(255, 255, 255, 0.1);
                    }
                  `}</style>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="best-card-inr min-h-[487px] w-full rounded-[24px] border border-[#FFFFFF1A] pt-[23px] pb-[76px] px-[19px] max-tablet3:py-[30px] max-tablet3:px-[17px] backdrop-blur-md bg-[rgba(255,255,255,0.1)]">
                    <div className="flex justify-center">
                      <Image
                        className="cursor-pointer w-6 h-6 cardIcon hidden"
                        src={cardIcon}
                        alt="Your Logo"
                        height={80}
                        width={80}
                      />
                    </div>
                    <p className="font-medium text-[18px] uppercase text-center pt-[12px] text-white">
                      E-Commerce
                    </p>
                    <p className="font-quicksand font-medium text-[11px] text-center text-gray-300">
                      Centralized Platforms For Enhanced Business Processes.
                    </p>
                    <div className="pt-4 flex flex-col gap-[10px]">
                      <div className="">
                        <p className="font-medium text-[12px] uppercase flex items-center gap-[6px] text-white">
                          <span className="w-1.5 h-1.5 rounded-full bg-white block"></span>{" "}
                          User-Friendly Storefront
                        </p>
                        <p className="font-quicksand font-normal text-[10px] text-gray-300 w-[253px]">
                          Design an intuitive, visually appealing storefront
                          that showcases products effectively and offers
                          seamless navigation for a smooth shopping experience.
                        </p>
                      </div>
                      <div className="">
                        <p className="font-medium text-[12px] uppercase flex items-center gap-[6px] text-white">
                          <span className="w-1.5 h-1.5 rounded-full bg-white block"></span>{" "}
                          Secure Payment Integration
                        </p>
                        <p className="font-quicksand font-normal text-[10px] text-gray-300 w-[253px]">
                          Enable secure transactions with multiple payment
                          options like credit/debit cards, digital wallets, UPI,
                          and BNPL (Buy Now, Pay Later) solutions, supported by
                          encryption for data safety.
                        </p>
                      </div>

                      <div className="">
                        <p className="font-medium text-[12px] uppercase flex items-center gap-[6px] text-white">
                          <span className="w-1.5 h-1.5 rounded-full  bg-white block"></span>{" "}
                          Product Management System
                        </p>
                        <p className="font-quicksand font-normal text-[10px] text-gray-300 w-[253px]">
                          Manage inventory, pricing, and product details
                          effortlessly with real-time updates and automation to
                          reduce manual effort.
                        </p>
                      </div>
                    </div>
                    <span className="active-style tl-span  h-1.5 w-1.5 rounded-full bg-gray-300 absolute top-[12px] left-[12px] hidden"></span>
                    <span className="active-style tr-span  h-1.5 w-1.5 rounded-full bg-gray-300 absolute top-[12px] right-[12px] hidden"></span>
                    <span className="active-style tl-span  h-1.5 w-1.5 rounded-full bg-gray-300 absolute bottom-[12px] left-[12px] hidden"></span>
                    <p className=" font-quicksand font-medium text-[9px] flex items-center gap-[6px] absolute bottom-[12px] right-[12px]">
                      Explore More
                      <span className="  tl-span block h-1.5 w-1.5 rounded-full bg-gray-300 "></span>
                    </p>
                    <span className="active-style tl-span  h-1.5 w-1.5 rounded-full bg-gray-300 absolute top-[12px] left-[12px] hidden"></span>
                    <span className="active-style tr-span  h-1.5 w-1.5 rounded-full bg-gray-300 absolute top-[12px] right-[12px] hidden"></span>
                    <span className="active-style tl-span  h-1.5 w-1.5 rounded-full bg-gray-300 absolute bottom-[12px] left-[12px] hidden"></span>
                    <p className=" font-quicksand font-medium text-[9px] flex items-center gap-[6px] absolute bottom-[12px] right-[12px]">
                      Explore More
                      <span className="  tl-span block h-1.5 w-1.5 rounded-full bg-gray-300 "></span>
                    </p>
                  </div>

                  <style jsx>{`
                    .best-card-inr {
                      backdrop-filter: blur(12px);
                      -webkit-backdrop-filter: blur(
                        12px
                      ); /* Safari & old iOS support */
                      background-color: rgba(255, 255, 255, 0.1);
                    }
                  `}</style>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
        <Image
          className="absolute -top-[0px]  -right-[25px] max-laptop:hidden"
          src={sliderRight}
          alt="img"
        />
        <Image
          className="absolute -top-[36px] -rotate-104 -left-[116px] max-laptop:hidden"
          src={aboutRight}
          alt="img"
        />
      </div>
    </>
  );
}
