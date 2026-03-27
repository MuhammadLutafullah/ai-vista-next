"use client";

import React, { useState, useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";

// import required modules
import { EffectCoverflow, Navigation } from "swiper/modules";

import Image from "next/image";
import cardIcon from "../../public/images/best-card-icon.svg";

// Dummy API service
const dummyApiService = {
  // Simulate API call with delay
  fetchBestData: () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          heading: "What We Do Best",
          description:
            "We craft end‑to‑end tech solutions—spanning strategy, design, and development—that turn bold ideas into resilient, user‑focused products. Partner with us to accelerate innovation, optimize operations, and create seamless digital experiences that set you apart.",
          slides: [
            {
              id: 1,
              title: "E-Commerce",
              subtitle: "Centralized Platforms For Enhanced Business Processes.",
              features: [
                {
                  title: "User-Friendly Storefront",
                  description:
                    "Design an intuitive, visually appealing storefront that showcases products effectively and offers seamless navigation for a smooth shopping experience.",
                },
                {
                  title: "Secure Payment Integration",
                  description:
                    "Enable secure transactions with multiple payment options like credit/debit cards, digital wallets, UPI, and BNPL (Buy Now, Pay Later) solutions, supported by encryption for data safety.",
                },
                {
                  title: "Product Management System",
                  description:
                    "Manage inventory, pricing, and product details effortlessly with real-time updates and automation to reduce manual effort.",
                },
              ],
            },
             {
              id: 5,
              title: "AI & Machine Learning",
              subtitle: "Intelligent Solutions For Data-Driven Decisions.",
              features: [
                {
                  title: "Predictive Analytics",
                  description:
                    "Leverage ML algorithms to forecast trends, customer behavior, and business outcomes.",
                },
                {
                  title: "Computer Vision",
                  description:
                    "Implement image recognition, object detection, and visual search capabilities.",
                },
                {
                  title: "NLP & Chatbots",
                  description:
                    "Build intelligent conversational agents and text analysis tools for enhanced user interaction.",
                },
              ],
            },
            {
              id: 2,
              title: "Website Development",
              subtitle: "Centralized Platforms For Enhanced Business Processes.",
              features: [
                {
                  title: "Customer Portals",
                  description:
                    "Provide personalized access for customers to manage their accounts, view transactions, and track activities seamlessly.",
                },
                {
                  title: "Employee Portals",
                  description:
                    "Enable your team to collaborate efficiently with tools for task management, resource sharing, and communication.",
                },
                {
                  title: "E-Commerce Portals",
                  description:
                    "Integrate shopping features, inventory management, and payment solutions for an engaging online store experience.",
                },
                {
                  title: "Service Portals",
                  description:
                    "Simplify support with ticket systems, FAQs, and live chat for quick issue resolution.",
                },
              ],
            },
            {
              id: 3,
              title: "Mobile App Development",
              subtitle: "Centralized Platforms For Enhanced Business Processes.",
              features: [
                {
                  title: "Native & Cross-Platform Apps",
                  description:
                    "Build high-performance mobile applications for iOS and Android using React Native, Flutter, or native technologies.",
                },
                {
                  title: "Offline Functionality",
                  description:
                    "Enable seamless user experience even without internet connectivity with local storage and sync capabilities.",
                },
                {
                  title: "Push Notifications",
                  description:
                    "Engage users with timely notifications, updates, and personalized alerts to boost retention.",
                },
              ],
            },
            {
              id: 4,
              title: "Cloud Solutions",
              subtitle: "Scalable Infrastructure For Modern Businesses.",
              features: [
                {
                  title: "AWS/Azure/GCP Integration",
                  description:
                    "Leverage leading cloud platforms for scalable, secure, and cost-effective infrastructure solutions.",
                },
                {
                  title: "DevOps & CI/CD",
                  description:
                    "Automate deployment pipelines, monitoring, and infrastructure management for faster releases.",
                },
                {
                  title: "Cloud Migration",
                  description:
                    "Seamlessly migrate your existing applications to the cloud with minimal downtime.",
                },
              ],
            },
            {
              id: 6,
              title: "Cybersecurity",
              subtitle: "Protect Your Digital Assets With Enterprise-Grade Security.",
              features: [
                {
                  title: "Penetration Testing",
                  description:
                    "Identify vulnerabilities with comprehensive security assessments and ethical hacking.",
                },
                {
                  title: "Data Encryption",
                  description:
                    "Implement end-to-end encryption for sensitive data at rest and in transit.",
                },
                {
                  title: "Compliance & Auditing",
                  description:
                    "Ensure GDPR, HIPAA, and SOC2 compliance with regular security audits.",
                },
              ],
            },
          ],
        });
      }, 1500);
    });
  },
};

// Skeleton Card Component
const SkeletonCard = () => {
  return (
    <div className="best-card-inr min-h-[487px] w-full rounded-[24px] border border-[#FFFFFF1A] pt-[23px] pb-[76px] px-[19px] max-tablet3:py-[30px] max-tablet3:px-[17px] backdrop-blur-md bg-[rgba(255,255,255,0.1)] animate-pulse">
      <div className="flex justify-center">
        <div className="w-12 h-12 rounded-full bg-white/20"></div>
      </div>
      <div className="pt-[12px] flex justify-center">
        <div className="h-7 w-36 bg-white/20 rounded"></div>
      </div>
      <div className="pt-2 flex justify-center">
        <div className="h-5 w-52 bg-white/20 rounded"></div>
      </div>
      <div className="pt-4 flex flex-col gap-[12px]">
        {[1, 2, 3].map((item) => (
          <div key={item}>
            <div className="flex items-center gap-[6px] mb-1">
              <div className="w-1.5 h-1.5 rounded-full bg-white/20"></div>
              <div className="h-4 w-32 bg-white/20 rounded"></div>
            </div>
            <div className="h-12 w-full bg-white/20 rounded mt-1"></div>
          </div>
        ))}
      </div>
      <div className="absolute bottom-[12px] right-[12px]">
        <div className="h-4 w-24 bg-white/20 rounded"></div>
      </div>

      <style jsx>{`
        .best-card-inr {
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          background-color: rgba(255, 255, 255, 0.1);
        }
      `}</style>
    </div>
  );
};

// Card Component
const BestCard = ({ data }) => {
  return (
    <div className="best-card-inr min-h-[487px] w-full rounded-[24px] border border-[#FFFFFF1A] pt-[23px] pb-[76px] px-[19px] max-tablet3:py-[30px] max-tablet3:px-[17px] backdrop-blur-md bg-[rgba(255,255,255,0.1)] transition-all duration-300 hover:scale-105">
      <div className="flex justify-center">
        <Image
          className="cursor-pointer w-10 h-10"
          src={cardIcon}
          alt="Service icon"
          height={80}
          width={80}
        />
      </div>
      <p className="font-medium text-[22px] uppercase text-center pt-[12px] text-white">
        {data.title}
      </p>
      <p className="font-quicksand font-medium text-[13px] text-center text-gray-300">
        {data.subtitle}
      </p>
      <div className="pt-4 flex flex-col gap-[14px]">
        {data.features.map((feature, idx) => (
          <div key={idx}>
            <p className="font-medium text-[14px] uppercase flex items-center gap-[6px] text-white">
              <span className="w-1.5 h-1.5 rounded-full bg-white block"></span>{" "}
              {feature.title}
            </p>
            <p className="font-quicksand font-normal text-[14px] text-gray-300 w-full leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
      <p className="font-quicksand font-medium text-[11px] flex items-center gap-[6px] absolute bottom-[12px] right-[12px] text-white/60 hover:text-white transition-colors cursor-pointer">
        Explore More
        <span className="tl-span block w-1.5 h-1.5 rounded-full bg-white"></span>
      </p>

      <style jsx>{`
        .best-card-inr {
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          background-color: rgba(255, 255, 255, 0.1);
        }
      `}</style>
    </div>
  );
};

export default function Best() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const result = await dummyApiService.fetchBestData();
        setData(result);
        setError(null);
      } catch (err) {
        setError("Failed to load data. Please try again later.");
        console.error("Error fetching data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (error) {
    return (
      <div className="relative overflow-hidden bg-black min-h-[400px]">
        <div className="best-otr relative bg-black pb-[40px]">
          <div className="best-inr px-39 max-desktop:px-10 max-tablet:px-5 relative">
            <div className="text-center text-red-500 py-20">
              <p>{error}</p>
              <button
                onClick={() => window.location.reload()}
                className="mt-4 px-6 py-2 bg-[#00a8a8] text-white rounded-lg hover:bg-[#008a8a] transition-colors"
              >
                Retry
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Get slides data - either skeleton or actual
  const slidesData = loading 
    ? Array(6).fill(null).map((_, i) => ({ id: `skeleton-${i}`, isSkeleton: true }))
    : data?.slides || [];

  return (
    <div className="relative overflow-hidden">
      
      <div className="best-otr relative bg-black pb-[40px]">
        <div className="best-inr px-39 max-desktop:px-10 max-tablet:px-5 relative">
          <p className="best-heading font-gendy font-normal text-[60px] text-center max-tablet:text-[40px] text-white">
            {loading ? "What We Do Best" : data?.heading}
          </p>
          <p className="best-desc font-normal text-[16px] w-[844px] text-center mx-auto max-laptop:w-full text-white/80">
            {loading ? "Loading amazing content..." : data?.description}
          </p>
          <div className="best-row-main relative bg-cover bg-center bg-no-repeat">
            <Swiper
              key={loading ? "skeleton" : "actual"}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                640: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
              }}
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              navigation={true}
              initialSlide={1}
              slidesPerView={3}
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
              modules={[EffectCoverflow, Navigation]}
              className="mySwiper !pb-[70px] max-laptop:!pb-[50px] !pt-[47px]"
              onInit={(swiper) => {
                setTimeout(() => {
                  swiper.update();
                }, 50);
              }}
            >
              {slidesData.map((slide) => (
                <SwiperSlide key={slide.id}>
                  {loading ? <SkeletonCard /> : <BestCard data={slide} />}
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}