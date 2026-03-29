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
    id: 2,
    title: "Web Development Services",
    subtitle: "Scalable Platforms For Seamless Digital Experiences.",
    features: [
      {
        title: "Responsive Design",
        description:
          "Create fast, mobile-friendly websites optimized for performance and accessibility.",
      },
      {
        title: "Custom Web Apps",
        description:
          "Develop scalable and secure web applications tailored to your business needs.",
      },
      {
        title: "API Integration",
        description:
          "Integrate third-party services and APIs for enhanced functionality and automation.",
      },
    ],
  },
  {
    id: 1,
    title: "Artificial Intelligence & Machine Learning",
    subtitle: "Intelligent Systems For Smarter Business Decisions.",
    features: [
      {
        title: "Predictive Analytics",
        description:
          "Leverage AI models to forecast trends, user behavior, and business outcomes with high accuracy.",
      },
      {
        title: "Computer Vision",
        description:
          "Implement image recognition, object detection, and visual intelligence for automation.",
      },
      {
        title: "NLP & Chatbots",
        description:
          "Build smart conversational agents to enhance user interaction and support systems.",
      },
    ],
  },
  {
    id: 3,
    title: "AI Automation Services",
    subtitle: "Smart Automation For Streamlined Business Operations.",
    features: [
      {
        title: "Process Automation",
        description:
          "Automate repetitive workflows to improve efficiency and reduce operational costs.",
      },
      {
        title: "AI Workflows",
        description:
          "Design intelligent pipelines that connect systems and optimize task execution.",
      },
      {
        title: "Chatbot Automation",
        description:
          "Deploy AI-driven bots to handle customer queries and support tasks effectively.",
      },
    ],
  },
  {
    id: 4,
    title: "Mobile App Development",
    subtitle: "High-Performance Apps For Modern Mobile Experiences.",
    features: [
      {
        title: "Cross-Platform Apps",
        description:
          "Build scalable apps for iOS and Android using modern frameworks and tools.",
      },
      {
        title: "Offline Functionality",
        description:
          "Ensure smooth performance with offline access and real-time data syncing.",
      },
      {
        title: "Push Notifications",
        description:
          "Engage users with timely alerts and personalized communication strategies.",
      },
    ],
  },
  {
    id: 5,
    title: "Data Science & Analytics",
    subtitle: "Data-Driven Insights For Strategic Business Growth.",
    features: [
      {
        title: "Data Visualization",
        description:
          "Transform complex data into clear dashboards and actionable insights.",
      },
      {
        title: "Big Data Processing",
        description:
          "Handle large datasets efficiently for real-time analytics and decision-making.",
      },
      {
        title: "Business Intelligence",
        description:
          "Enable smarter strategies with data-backed reporting and performance tracking.",
      },
    ],
  },
  {
    id: 6,
    title: "Edge AI Computing Services",
    subtitle: "Real-Time Processing At The Edge For Faster Decisions.",
    features: [
      {
        title: "Edge Deployment",
        description:
          "Run AI models locally on devices to reduce latency and improve speed.",
      },
      {
        title: "IoT Integration",
        description:
          "Connect smart devices with AI capabilities for intelligent automation systems.",
      },
      {
        title: "Low Latency Systems",
        description:
          "Ensure fast data processing without relying heavily on cloud infrastructure.",
      },
    ],
  },
  {
    id: 7,
    title: "Cyber Security Services",
    subtitle: "Advanced Protection For Your Digital Infrastructure.",
    features: [
      {
        title: "Threat Detection",
        description:
          "Identify and prevent cyber threats using advanced monitoring systems.",
      },
      {
        title: "Data Protection",
        description:
          "Secure sensitive data with encryption and access control mechanisms.",
      },
      {
        title: "Security Audits",
        description:
          "Conduct regular assessments to ensure compliance and system integrity.",
      },
    ],
  },
  {
    id: 8,
    title: "SAAS Development",
    subtitle: "Cloud-Based Solutions For Scalable Business Growth.",
    features: [
      {
        title: "Multi-Tenant Architecture",
        description:
          "Build scalable SaaS platforms supporting multiple users and organizations.",
      },
      {
        title: "Subscription Systems",
        description:
          "Implement flexible billing models and subscription management features.",
      },
      {
        title: "Cloud Integration",
        description:
          "Leverage cloud infrastructure for high availability and performance.",
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