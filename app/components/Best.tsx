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

export default function Best() {
  return (
    <>
      <div className="best-otr  bg-black pb-[40px]">
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
            slidesPerView={3}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            modules={[EffectCoverflow, Navigation]}
            className="mySwiper !pb-[70px] "
          >
            <SwiperSlide>
              <div className="best-row flex justify-center pt-[81px] max-tablet:pt-[40px]">
                <div className="best-card-otr relative w-full">
                  <div className="best-card-inr w-full   rounded-[24px] bg-[#000000] border border-[#ffffff]  pt-[23px] pb-[76px] px-[19px] max-tablet3:py-[30px] max-tablet3:px-[17px]">
                    <div className="flex justify-center">
                      <Image
                        className="cursor-pointer w-6 h-6 cardIcon hidden"
                        src={cardIcon}
                        alt="Your Logo"
                      />
                    </div>
                    <p className="font-medium text-[18px] uppercase text-center pt-[12px]">
                      Website Development
                    </p>
                    <p className="font-quicksand font-medium text-[11px]">
                      Centralized Platforms For Enhanced Business Processes.
                    </p>
                    <div className="pt-4 flex flex-col gap-[10px]">
                      <div className="">
                        <p className="font-medium text-[12px] uppercase flex items-center gap-[6px]">
                          <span className="w-1.5 h-1.5 rounded-full bg-white block"></span>{" "}
                          Customer Portals
                        </p>
                        <p className="font-quicksand font-normal text-[10px] text-gray-50 w-[253px]">
                          Provide personalized access for customers to manage
                          their accounts, view transactions, and track
                          activities seamlessly.
                        </p>
                      </div>
                      <div className="">
                        <p className="font-medium text-[12px] uppercase flex items-center gap-[6px]">
                          <span className="w-1.5 h-1.5 rounded-full bg-white block"></span>{" "}
                          Customer Portals
                        </p>
                        <p className="font-quicksand font-normal text-[10px] text-gray-50 w-[253px]">
                          Provide personalized access for customers to manage
                          their accounts, view transactions, and track
                          activities seamlessly.
                        </p>
                      </div>
                      <div className="">
                        <p className="font-medium text-[12px] uppercase flex items-center gap-[6px]">
                          <span className="w-1.5 h-1.5 rounded-full bg-white block"></span>{" "}
                          Customer Portals
                        </p>
                        <p className="font-quicksand font-normal text-[10px] text-gray-50 w-[253px]">
                          Provide personalized access for customers to manage
                          their accounts, view transactions, and track
                          activities seamlessly.
                        </p>
                      </div>
                      <div className="">
                        <p className="font-medium text-[12px] uppercase flex items-center gap-[6px]">
                          <span className="w-1.5 h-1.5 rounded-full bg-white block"></span>{" "}
                          Customer Portals
                        </p>
                        <p className="font-quicksand font-normal text-[10px] text-gray-50 w-[253px]">
                          Provide personalized access for customers to manage
                          their accounts, view transactions, and track
                          activities seamlessly.
                        </p>
                      </div>
                    </div>
                  </div>
                  <span className="tl-span block h-1.5 w-1.5 rounded-full bg-white absolute top-[12px] left-[12px] cardIcon "></span>
                  <span className="bl-span block h-1.5 w-1.5 rounded-full bg-white absolute top-[12px] right-[12px] cardIcon "></span>
                  <span className="tr-span block h-1.5 w-1.5 rounded-full bg-white absolute bottom-[12px] left-[12px] cardIcon "></span>
                  <p className="br-span font-quicksand font-medium text-[9px] flex items-center gap-[6px] absolute bottom-[12px] right-[12px]">
                    Explore More
                    <span className="tr-span block h-1.5 w-1.5 rounded-full bg-white "></span>
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="best-row flex justify-center pt-[81px] max-tablet:pt-[40px]">
                <div className="best-card-otr relative w-full">
                  <div className="best-card-inr w-full   rounded-[24px] bg-[#000000] border border-[#ffffff]  pt-[23px] pb-[76px] px-[19px] max-tablet3:py-[30px] max-tablet3:px-[17px]">
                    <div className="flex justify-center">
                      <Image
                        className="cursor-pointer w-6 h-6 cardIcon hidden"
                        src={cardIcon}
                        alt="Your Logo"
                      />
                    </div>
                    <p className="font-medium text-[18px] uppercase text-center pt-[12px]">
                      Website Development
                    </p>
                    <p className="font-quicksand font-medium text-[11px]">
                      Centralized Platforms For Enhanced Business Processes.
                    </p>
                    <div className="pt-4 flex flex-col gap-[10px]">
                      <div className="">
                        <p className="font-medium text-[12px] uppercase flex items-center gap-[6px]">
                          <span className="w-1.5 h-1.5 rounded-full bg-white block"></span>{" "}
                          Customer Portals
                        </p>
                        <p className="font-quicksand font-normal text-[10px] text-gray-50 w-[253px]">
                          Provide personalized access for customers to manage
                          their accounts, view transactions, and track
                          activities seamlessly.
                        </p>
                      </div>
                      <div className="">
                        <p className="font-medium text-[12px] uppercase flex items-center gap-[6px]">
                          <span className="w-1.5 h-1.5 rounded-full bg-white block"></span>{" "}
                          Customer Portals
                        </p>
                        <p className="font-quicksand font-normal text-[10px] text-gray-50 w-[253px]">
                          Provide personalized access for customers to manage
                          their accounts, view transactions, and track
                          activities seamlessly.
                        </p>
                      </div>
                      <div className="">
                        <p className="font-medium text-[12px] uppercase flex items-center gap-[6px]">
                          <span className="w-1.5 h-1.5 rounded-full bg-white block"></span>{" "}
                          Customer Portals
                        </p>
                        <p className="font-quicksand font-normal text-[10px] text-gray-50 w-[253px]">
                          Provide personalized access for customers to manage
                          their accounts, view transactions, and track
                          activities seamlessly.
                        </p>
                      </div>
                      <div className="">
                        <p className="font-medium text-[12px] uppercase flex items-center gap-[6px]">
                          <span className="w-1.5 h-1.5 rounded-full bg-white block"></span>{" "}
                          Customer Portals
                        </p>
                        <p className="font-quicksand font-normal text-[10px] text-gray-50 w-[253px]">
                          Provide personalized access for customers to manage
                          their accounts, view transactions, and track
                          activities seamlessly.
                        </p>
                      </div>
                    </div>
                  </div>
                  <span className="tl-span block h-1.5 w-1.5 rounded-full bg-white absolute top-[12px] left-[12px] cardIcon "></span>
                  <span className="bl-span block h-1.5 w-1.5 rounded-full bg-white absolute top-[12px] right-[12px] cardIcon "></span>
                  <span className="tr-span block h-1.5 w-1.5 rounded-full bg-white absolute bottom-[12px] left-[12px] cardIcon "></span>
                  <p className="br-span font-quicksand font-medium text-[9px] flex items-center gap-[6px] absolute bottom-[12px] right-[12px]">
                    Explore More
                    <span className="tr-span block h-1.5 w-1.5 rounded-full bg-white "></span>
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="best-row flex justify-center pt-[81px] max-tablet:pt-[40px]">
                <div className="best-card-otr relative w-full">
                  <div className="best-card-inr w-full   rounded-[24px] bg-[#000000] border border-[#ffffff]  pt-[23px] pb-[76px] px-[19px] max-tablet3:py-[30px] max-tablet3:px-[17px]">
                    <div className="flex justify-center">
                      <Image
                        className="cursor-pointer w-6 h-6 cardIcon hidden"
                        src={cardIcon}
                        alt="Your Logo"
                      />
                    </div>
                    <p className="font-medium text-[18px] uppercase text-center pt-[12px]">
                      Website Development
                    </p>
                    <p className="font-quicksand font-medium text-[11px]">
                      Centralized Platforms For Enhanced Business Processes.
                    </p>
                    <div className="pt-4 flex flex-col gap-[10px]">
                      <div className="">
                        <p className="font-medium text-[12px] uppercase flex items-center gap-[6px]">
                          <span className="w-1.5 h-1.5 rounded-full bg-white block"></span>{" "}
                          Customer Portals
                        </p>
                        <p className="font-quicksand font-normal text-[10px] text-gray-50 w-[253px]">
                          Provide personalized access for customers to manage
                          their accounts, view transactions, and track
                          activities seamlessly.
                        </p>
                      </div>
                      <div className="">
                        <p className="font-medium text-[12px] uppercase flex items-center gap-[6px]">
                          <span className="w-1.5 h-1.5 rounded-full bg-white block"></span>{" "}
                          Customer Portals
                        </p>
                        <p className="font-quicksand font-normal text-[10px] text-gray-50 w-[253px]">
                          Provide personalized access for customers to manage
                          their accounts, view transactions, and track
                          activities seamlessly.
                        </p>
                      </div>
                      <div className="">
                        <p className="font-medium text-[12px] uppercase flex items-center gap-[6px]">
                          <span className="w-1.5 h-1.5 rounded-full bg-white block"></span>{" "}
                          Customer Portals
                        </p>
                        <p className="font-quicksand font-normal text-[10px] text-gray-50 w-[253px]">
                          Provide personalized access for customers to manage
                          their accounts, view transactions, and track
                          activities seamlessly.
                        </p>
                      </div>
                      <div className="">
                        <p className="font-medium text-[12px] uppercase flex items-center gap-[6px]">
                          <span className="w-1.5 h-1.5 rounded-full bg-white block"></span>{" "}
                          Customer Portals
                        </p>
                        <p className="font-quicksand font-normal text-[10px] text-gray-50 w-[253px]">
                          Provide personalized access for customers to manage
                          their accounts, view transactions, and track
                          activities seamlessly.
                        </p>
                      </div>
                    </div>
                  </div>
                  <span className="tl-span block h-1.5 w-1.5 rounded-full bg-white absolute top-[12px] left-[12px] cardIcon "></span>
                  <span className="bl-span block h-1.5 w-1.5 rounded-full bg-white absolute top-[12px] right-[12px] cardIcon "></span>
                  <span className="tr-span block h-1.5 w-1.5 rounded-full bg-white absolute bottom-[12px] left-[12px] cardIcon "></span>
                  <p className="br-span font-quicksand font-medium text-[9px] flex items-center gap-[6px] absolute bottom-[12px] right-[12px]">
                    Explore More
                    <span className="tr-span block h-1.5 w-1.5 rounded-full bg-white "></span>
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="best-row flex justify-center pt-[81px] max-tablet:pt-[40px]">
                <div className="best-card-otr relative w-full">
                  <div className="best-card-inr w-full   rounded-[24px] bg-[#000000] border border-[#ffffff]  pt-[23px] pb-[76px] px-[19px] max-tablet3:py-[30px] max-tablet3:px-[17px]">
                    <div className="flex justify-center">
                      <Image
                        className="cursor-pointer w-6 h-6 cardIcon hidden"
                        src={cardIcon}
                        alt="Your Logo"
                      />
                    </div>
                    <p className="font-medium text-[18px] uppercase text-center pt-[12px]">
                      Website Development
                    </p>
                    <p className="font-quicksand font-medium text-[11px]">
                      Centralized Platforms For Enhanced Business Processes.
                    </p>
                    <div className="pt-4 flex flex-col gap-[10px]">
                      <div className="">
                        <p className="font-medium text-[12px] uppercase flex items-center gap-[6px]">
                          <span className="w-1.5 h-1.5 rounded-full bg-white block"></span>{" "}
                          Customer Portals
                        </p>
                        <p className="font-quicksand font-normal text-[10px] text-gray-50 w-[253px]">
                          Provide personalized access for customers to manage
                          their accounts, view transactions, and track
                          activities seamlessly.
                        </p>
                      </div>
                      <div className="">
                        <p className="font-medium text-[12px] uppercase flex items-center gap-[6px]">
                          <span className="w-1.5 h-1.5 rounded-full bg-white block"></span>{" "}
                          Customer Portals
                        </p>
                        <p className="font-quicksand font-normal text-[10px] text-gray-50 w-[253px]">
                          Provide personalized access for customers to manage
                          their accounts, view transactions, and track
                          activities seamlessly.
                        </p>
                      </div>
                      <div className="">
                        <p className="font-medium text-[12px] uppercase flex items-center gap-[6px]">
                          <span className="w-1.5 h-1.5 rounded-full bg-white block"></span>{" "}
                          Customer Portals
                        </p>
                        <p className="font-quicksand font-normal text-[10px] text-gray-50 w-[253px]">
                          Provide personalized access for customers to manage
                          their accounts, view transactions, and track
                          activities seamlessly.
                        </p>
                      </div>
                      <div className="">
                        <p className="font-medium text-[12px] uppercase flex items-center gap-[6px]">
                          <span className="w-1.5 h-1.5 rounded-full bg-white block"></span>{" "}
                          Customer Portals
                        </p>
                        <p className="font-quicksand font-normal text-[10px] text-gray-50 w-[253px]">
                          Provide personalized access for customers to manage
                          their accounts, view transactions, and track
                          activities seamlessly.
                        </p>
                      </div>
                    </div>
                  </div>
                  <span className="tl-span block h-1.5 w-1.5 rounded-full bg-white absolute top-[12px] left-[12px] cardIcon "></span>
                  <span className="bl-span block h-1.5 w-1.5 rounded-full bg-white absolute top-[12px] right-[12px] cardIcon "></span>
                  <span className="tr-span block h-1.5 w-1.5 rounded-full bg-white absolute bottom-[12px] left-[12px] cardIcon "></span>
                  <p className="br-span font-quicksand font-medium text-[9px] flex items-center gap-[6px] absolute bottom-[12px] right-[12px]">
                    Explore More
                    <span className="tr-span block h-1.5 w-1.5 rounded-full bg-white "></span>
                  </p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
}

//  <div className="best-row flex justify-center pt-[81px]">
//             <div className="best-card-otr relative">
//               <div className="best-card-inr w-[400px] max-tablet3:w-[330px]  rounded-[24px] bg-white/10 border border-[#ffffff] pt-[23px] pb-[76px] px-[19px] max-tablet3:py-[30px] max-tablet3:px-[17px]">
//                 <div className="flex justify-center">
//                   <Image
//                     className="cursor-pointer w-6 h-6"
//                     src={cardIcon}
//                     alt="Your Logo"
//                   />
//                 </div>
//                 <p className="font-medium text-[18px] uppercase text-center pt-[12px]">
//                   Website Development
//                 </p>
//                 <p className="font-quicksand font-medium text-[11px]">
//                   Centralized Platforms For Enhanced Business Processes.
//                 </p>
//                 <div className="pt-4 flex flex-col gap-[10px]">
//                   <div className="">
//                     <p className="font-medium text-[12px] uppercase flex items-center gap-[6px]">
//                       <span className="w-1.5 h-1.5 rounded-full bg-white block"></span>{" "}
//                       Customer Portals
//                     </p>
//                     <p className="font-quicksand font-normal text-[10px] text-gray-50 w-[253px]">
//                       Provide personalized access for customers to manage their
//                       accounts, view transactions, and track activities
//                       seamlessly.
//                     </p>
//                   </div>
//                   <div className="">
//                     <p className="font-medium text-[12px] uppercase flex items-center gap-[6px]">
//                       <span className="w-1.5 h-1.5 rounded-full bg-white block"></span>{" "}
//                       Customer Portals
//                     </p>
//                     <p className="font-quicksand font-normal text-[10px] text-gray-50 w-[253px]">
//                       Provide personalized access for customers to manage their
//                       accounts, view transactions, and track activities
//                       seamlessly.
//                     </p>
//                   </div>
//                   <div className="">
//                     <p className="font-medium text-[12px] uppercase flex items-center gap-[6px]">
//                       <span className="w-1.5 h-1.5 rounded-full bg-white block"></span>{" "}
//                       Customer Portals
//                     </p>
//                     <p className="font-quicksand font-normal text-[10px] text-gray-50 w-[253px]">
//                       Provide personalized access for customers to manage their
//                       accounts, view transactions, and track activities
//                       seamlessly.
//                     </p>
//                   </div>
//                   <div className="">
//                     <p className="font-medium text-[12px] uppercase flex items-center gap-[6px]">
//                       <span className="w-1.5 h-1.5 rounded-full bg-white block"></span>{" "}
//                       Customer Portals
//                     </p>
//                     <p className="font-quicksand font-normal text-[10px] text-gray-50 w-[253px]">
//                       Provide personalized access for customers to manage their
//                       accounts, view transactions, and track activities
//                       seamlessly.
//                     </p>
//                   </div>
//                 </div>
//               </div>
//               <span className="tl-span block h-1.5 w-1.5 rounded-full bg-white absolute top-[12px] left-[12px]"></span>
//               <span className="bl-span block h-1.5 w-1.5 rounded-full bg-white absolute top-[12px] right-[12px]"></span>
//               <span className="tr-span block h-1.5 w-1.5 rounded-full bg-white absolute bottom-[12px] left-[12px]"></span>
//               <p className="br-span font-quicksand font-medium text-[9px] flex items-center gap-[6px] absolute bottom-[12px] right-[12px]">
//                 Explore More
//                 <span className="tr-span block h-1.5 w-1.5 rounded-full bg-white "></span>
//               </p>
//             </div>
//           </div>
